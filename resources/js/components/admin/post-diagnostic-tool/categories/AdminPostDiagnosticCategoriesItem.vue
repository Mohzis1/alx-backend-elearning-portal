<template>
    <tr v-if="!deleted">
        <td width="50%" class="">
            <span v-if="category.name">
                {{ category.name }}<br>
                <strong>Order:</strong> {{ category.sort }}
            </span>
        </td>
        <td width="20%" class="">
            <router-link
                exact
                class="btn btn-sm btn-primary"
                :to="{name: 'AdminPostDiagnosticCategoryQuestionView', params: {id: category.id}}">
                Questions ({{ category.questions ? category.questions.length : 0 }})
            </router-link>
        </td>
        <td width="30%">
            <span class="tx-10">
                <strong>Date: </strong> {{ fullDate(category.created_at) }}
            </span><br><br>

            <button class="btn btn-warning btn-sm mr-1" @click.prevent="isOpen = true">
                <i class="fa fa-trash"></i> Edit</button><br>

            <Teleport to="section">
                <admin-post-diagnostic-category-form
                    :open="isOpen"
                    :category="category"
                    @emitting-close-modal="closeModal"
                    @emitting-updated-category="updatedCategory"
                ></admin-post-diagnostic-category-form>
            </Teleport>

            <!--Delete modal Button-->
            <button @click.prevent="deleteCategory(category.id)"
                    class="btn btn-danger btn-sm">
                <i class="fa fa-trash"></i> Delete</button>
        </td>
    </tr>
</template>

<script setup>
    import {ref} from 'vue';
    import moment from 'moment';
    import AdminPostDiagnosticCategoryForm from "./AdminPostDiagnosticCategoryForm.vue";

    const props = defineProps([
        'category',
    ]);

    const category = ref(props.category);
    const isOpen = ref(false);
    const deleted = ref(false);

    const fullDate = (value) => {
        return moment(value).format('MMMM Do YYYY');
    }

    const closeModal = () => {
        isOpen.value = false;
    }

    const updatedCategory = (event) => {
        console.log(event);
        category.value = event;
    }

    const deleteCategory = (id) => {
        // Install sweetalert2 to use
        Swal.fire({
            title: 'Delete '+props.category.name,
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
                axios.delete('/api/admin/post-diagnostic-tool/category/delete', {
                    headers: {
                        "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                        'Accept' : 'application/json',
                    },
                    params: {
                        category_id: id
                    }
                }).then((response) => {
                        if(response.data.success === true){
                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted',
                                showConfirmButton: true,
                                timer: 10500
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
