<template>

    <div class="row">
        <div class="col-12 text-danger text-center">
            <span class=""
                  v-for="(error, index) in errors" :key="index">
                {{ error.toString() }}<br>
            </span>
        </div>

        <div class="col-12">
            <form>
                <div class="row justify-content-center d-flex">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <div v-for="(input, index) in formFields" :key="index" class="px-3">
                                    <div class="bg-grey-rounded mt-2 mb-2 pl-1 pr-2">

                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label>Option</label>
                                                    <input type="text" class="form-control"
                                                           v-model="input.option" required>
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Sort</label>
                                                    <input type="number" class="form-control"
                                                           v-model="input.sort">
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Has Condition</label>
                                                    <select v-model="input.conditional" class="form-control">
                                                        <option value='0'>No</option>
                                                        <option value='1'>Yes</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-4" v-if="input.conditional === '1'">
                                                <div class="form-group">
                                                    <label>Condition Type</label>
                                                    <select v-model="input.condition_type" class="form-control">
                                                        <option value="">Select</option>
                                                        <option value="show_input">Show Input</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-12" v-if="question.conditional">
                                                <div class="form-group">
                                                    <label>Hide Questions (Pick questions to hide when this option is selected)</label>
                                                    <select v-model="input.hide_questions"
                                                            class="form-control" multiple>
                                                        <option value=""></option>
                                                        <option v-for="(quest, index) in questions"
                                                                :key="quest.id" :value="quest.id">
                                                            {{ quest.sort }} - {{ quest.question }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-md-2 mt-4">
                                            <button @click.prevent="removeField(index)" v-show="index !== 0"
                                                    type="submit" class="btn btn-outline-danger btn-sm">
                                                Remove field</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button type="button" @click.prevent="addField"
                                            class="btn btn-outline-info btn-sm mr-2">Add field</button>
                                    <button type="button" @click.prevent="submitOptions"
                                            class="btn btn-success btn-sm mr-2">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>


</template>

<script setup>
import {onBeforeMount, ref} from "vue";

    const props = defineProps([
        'question'
    ]);

    const emit = defineEmits([
        'emit-submitted-options'
    ]);

    const formFields = ref([{
        option: '',
        sort: '',
        hide_questions: '',
        conditional: '',
        condition_type: '',
        display_text: '',
    }]);

    const question = ref(props.question);
    const questions = ref([]);
    const errors = ref([]);

    const addField = () => {
        formFields.value.push({
            option: '',
            sort: '',
            points: '',
            hide_questions: '',
            conditional: '',
            condition_type: '',
            display_text: '',
        });
    }

    const removeField = (index) => {
        formFields.value.splice(index, 1);
    }

    const submitOptions = () => {
        // Install sweetalert2 to use
        // Loading
        Swal.fire({
            title: 'Please Wait !',
            html: 'Submitting',// add html attribute if you want or remove
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        let formData = new FormData();
        // iterate inputs array and object in input array
        // 2 level iteration
        formFields.value.forEach(function (item, index) {
            for (let key in item) {
                console.log(index);
                console.log(key);
                console.log(item[key]);
                formData.append('inputs['+index+']['+key+']', item[key]);
            }
        });

        axios.post('/api/admin/post-diagnostic-tool/question/option/store', formData, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                question_id: question.value.id,
            }

        }).then((response) => {
            if(response.data.success === true){
                emit("emit-submitted-options", response.data.options);
                errors.value = [];
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 11000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Submitted'
                });
                formFields.value.forEach((item, index) => {
                    item.option = '';
                    item.sort = '';
                });

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error Occurred',
                    showConfirmButton: false,
                    timer: 1500
                });
                errors.value = response.data.errors;
                console.log(response.data.errors);
                console.log(response.data.error_message);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const getQuestions = () => {
        axios.get('/api/admin/post-diagnostic-tool/all-questions')
            .then((response) => {
                if(response.data.success === true){
                    questions.value = response.data.questions;
                }
                console.log("all questions", response.data.questions);
            }).catch((error) => {
            console.log(error);
        });
    }

    onBeforeMount(() => {
        console.log("Question id", props.questionId);
        getQuestions();
    });
</script>

<style scoped>

</style>
