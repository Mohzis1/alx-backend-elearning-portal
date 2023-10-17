<template>
    <div v-if="!deleted" class="row p-2">
        <div class="col-8" style="border-bottom: 1px solid;">
            <p><strong>Option:</strong> {{ option.option }}</p>
            <p><strong>Sort:</strong> {{ option.sort }}</p>
            <p v-if="option.conditional"><strong>Condition:</strong> {{ option.condition_type }}</p>
            <p v-if="option.hide_questions"><strong>Hide questions if selected:</strong> {{ option.hide_questions }}</p>
        </div>
        <div class="col-4" style="border-bottom: 1px solid;">
            <!--Delete modal Button-->
            <button @click.prevent="deleteOption(option.id)"
                    class="btn btn-danger btn-sm">
                <i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import moment from 'moment';

    const props = defineProps([
        'option'
    ]);

    const option = ref(props.option);
    const deleted = ref(false);

    const fullDate =  (value) => {
        return moment(value).format('MMMM Do YYYY');
    }

    const deleteOption = (id) => {
        // Install sweetalert2 to use
        Swal.fire({
            title: 'Delete '+option.value.option+'?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // Loading
                Swal.fire({
                    title: 'Please Wait !',
                    html: 'Deleting',// add html attribute if you want or remove
                    allowOutsideClick: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                axios.delete('/api/admin/post-diagnostic-tool/option/delete', {
                    headers: {
                        "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                        'Accept' : 'application/json',
                    },
                    params: {
                        option_id: option.value.id
                    }
                }).then((response) => {
                        if(response.data.success === true){
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 8000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            });
                            Toast.fire({
                                icon: 'success',
                                title: 'Deleted'
                            });
                            deleted.value = true;
                        }
                    }).catch((error) => {
                    console.log(error);
                });
            } else if (result.isDenied) {
                return false;
            }
        });
    }
</script>

<style scoped>

</style>
