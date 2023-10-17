<template>
    <tr v-if="!deleted">
        <td width="70%" class="">
            {{ question.question }}<br>
            <strong>Type:</strong> {{ question.type }}<br>
            <strong>Sort:</strong> {{ question.sort }}<br>
            <span v-if="question.category">
                <strong>Category:</strong> {{ question.category.name }}<br>
            </span>
            <span v-if="question.conditional">
                <strong>Has condition:</strong> {{ question.conditional === 1 ? 'Yes' : 'No' }}<br>
            </span>
            <strong>Options:</strong><br>
            <span v-for="option in options">
                <span>Option: {{ option.option }}<br></span>
            </span>

            <button v-if="question.type === 'checkbox' || question.type === 'radio'"
                    class="btn btn-info btn-sm mr-1" @click.prevent="optionIsOpen = true">
                <i class="fa fa-pen"></i> Edit Options</button><br>

            <Teleport to="section">
                <admin-post-diagnostic-options-view
                    :open="optionIsOpen"
                    :options="options"
                    :question="question"
                    @emit-close-modal="optionCloseModal"
                    @emit-updated-options="updatedOptions"
                ></admin-post-diagnostic-options-view>
            </Teleport>

        </td>

        <td width="30%">
            <span class="tx-10">
                <strong>Date: </strong> {{ fullDate(question.created_at) }}
            </span><br><br>

            <button class="btn btn-warning btn-sm mr-1" @click.prevent="isOpen = true">
                <i class="fa fa-pen"></i> Edit</button><br>

            <Teleport to="section">
                <admin-post-diagnostic-question-form
                    :open="isOpen"
                    :question="question"
                    @emitting-close-modal="closeModal"
                    @emitting-updated-question="updatedQuestion"
                ></admin-post-diagnostic-question-form>
            </Teleport>

            <!--Delete modal Button-->
            <button @click.prevent="deleteQuestion(question.id)"
                    class="btn btn-danger btn-sm">
                <i class="fa fa-trash"></i> Delete</button>
        </td>
    </tr>
</template>

<script setup>
    import {ref} from 'vue';
    import moment from 'moment';
    import AdminPostDiagnosticQuestionForm from "./AdminPostDiagnosticQuestionForm.vue";
    import AdminPostDiagnosticOptionsView from "./AdminPostDiagnosticOptionsView.vue";

    const props = defineProps([
        'question'
    ]);

    const isOpen = ref(false);
    const optionIsOpen = ref(false);
    const deleted = ref(false);
    const question = ref(props.question);
    const options = ref(props.question.options);

    const closeModal = () => {
        isOpen.value = false;
    }

    const optionCloseModal = () => {
        optionIsOpen.value = false;
    }

    const updatedQuestion = (event) => {
        console.log(event);
        question.value = event;
    }

    const updatedOptions = (event) => {
        console.log(event);
        options.value = event;
    }

    const fullDate = (value) => {
        return moment(value).format('MMMM Do YYYY');
    }

    const deleteQuestion = (id) => {
        // Install sweetalert2 to use
        Swal.fire({
            title: 'Delete '+question.value.question+' ?',
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
                axios.delete('/api/admin/post-diagnostic-tool/question/delete', {
                    headers: {
                        "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                        'Accept' : 'application/json',
                    },
                    params: {
                        question_id: id
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
