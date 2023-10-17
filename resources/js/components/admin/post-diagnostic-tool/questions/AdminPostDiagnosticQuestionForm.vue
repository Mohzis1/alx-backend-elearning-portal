<template>

    <transition name="fade">
        <div class="vue-modal" v-show="open">
            <transition name="drop-in">
                <div class="vue-modal-inner" v-show="open">
                    <div class="vue-modal-content">

                        <div class="row">
                            <div class="col-md-12 mt-2">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="px-3">
                                            <div class="form-body">

                                                <form>
                                                    <div class="bg-grey-rounded m-2 pl-1 pr-2">
                                                        <div class="row">

                                                            <div class="col-md-12">
                                                                <div class="form-group">
                                                                    <label>Question</label>
                                                                    <input type="text" class="form-control"
                                                                           v-model="form.question" required>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-4 pr-1">
                                                                <div class="form-group">
                                                                    <label>Has Condition?</label><br>
                                                                    <select class="form-control" v-model="form.conditional" required>
                                                                        <option value="0">No</option>
                                                                        <option value="1">Yes</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-4 pr-1">
                                                                <div class="form-group">
                                                                    <label>Category</label><br>
                                                                    <select class="form-control"
                                                                            v-model="form.post_diagnostic_question_category_id" required>
                                                                        <option value="" selected>Select</option>
                                                                        <option v-for="(cat, index) in categories"
                                                                                :key="cat.id"
                                                                                :value="cat.id">
                                                                            {{ cat.name }}
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-4 pr-1">
                                                                <div class="form-group">
                                                                    <label>Option type</label><br>
                                                                    <select class="form-control"
                                                                            v-model="form.type" required>
                                                                        <option value='' selected>Select option type</option>
                                                                        <option value="freetext">Free Text</option>
                                                                        <option value="location_country">Country List</option>
                                                                        <option value="location_state">State List</option>
<!--                                                                        <option value="file">Upload File</option>-->
                                                                        <option value="radio">Radio</option>
                                                                        <option value="checkbox">Checkbox</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label>Sort</label>
                                                                    <input type="number" class="form-control"
                                                                           v-model="form.sort">
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <button v-if="question === undefined"
                                                                @click.prevent="submitQuestion"
                                                                class="btn btn-primary btn-md p-1 mr-1">Submit</button>
                                                        <button v-else @click.prevent="updateQuestion(question.id)"
                                                                class="btn btn-primary btn-md mr-1 p-1">Update</button>
                                                        <button @click.prevent="emitCloseModal"
                                                                class="btn btn-danger btn-md p-1">Close</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>

                                        <p class="text-center text-danger"
                                           v-for="(error, index) in errors" :key="index">
                                            {{ error}}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </transition>
        </div>
    </transition>

</template>

<script setup>
    import {ref, onBeforeMount, reactive} from "vue";

    const props = defineProps([
       'question',
       'open'
    ]);

    const emit = defineEmits([
        'emitting-close-modal',
        'emitting-submitted-question',
        'emitting-updated-question'
    ]);

    const emitCloseModal = () => {
        console.log("emit close modal");
        emit("emitting-close-modal", 'Close modal');
    }

    const handleKeyup = (event) => {
        if(event.keyCode === 27){
            emitCloseModal();
        }
    }

    const question = ref(props.question);
    const questions = ref([]);
    const errors = ref([]);
    const categories = ref([]);
    const currentQuestion = ref(null);

    const form = reactive({
        question: props.question === undefined ? '' : props.question.question,
        post_diagnostic_question_category_id: props.question === undefined ? '' : props.question.post_diagnostic_question_category_id,
        type: props.question === undefined ? '' : props.question.type,
        sort: props.question === undefined ? '' : props.question.sort,
        conditional: props.question === undefined ? '' : props.question.conditional,
    });

    const submitQuestion = () => {
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

        axios.post('/api/admin/post-diagnostic-tool/question/store', form, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
        }).then((response) => {
                if(response.data.success === true){
                    errors.value = [];
                    currentQuestion.value = response.data.question;
                    // Emit submitted question to parent component
                    emit("emitting-submitted-question", response.data.question);
                    console.log("new question", response.data.question);

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
                        title: 'Submitted'
                    });

                    // //Iterate through each object field, key is name of the object field`
                    Object.keys(form).forEach(function(value) {
                        form[value] = '';
                    });

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Error Occurred',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    errors.value = response.data.errors;
                    console.log(errors);
                    console.log(response.data.error_message);
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    const updateQuestion = () => {
        // Install sweetalert2 to use
        // Loading
        Swal.fire({
            title: 'Please Wait !',
            html: 'Updating',// add html attribute if you want or remove
            allowOutsideClick: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        let formData = new FormData();
        //Iterate through each object field, key is name of the object field`
        Object.keys(form).forEach(function(key){
            console.log(key); // key
            console.log(form[key]); // value
            formData.append(key, form[key]);
        });

        axios.post('/api/admin/post-diagnostic-tool/question/update', formData, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                question_id: question.value.id
            }
        }).then((response) => {
                if(response.data.success === true){
                    // Emitting updated question to parent component
                    emit("emitting-updated-question", response.data.question);
                    errors.value = [];
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 10000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                    Toast.fire({
                        icon: 'success',
                        title: 'Updated'
                    });
                }else{
                    errors.value = response.data.errors;
                    Swal.fire({
                        icon: 'error',
                        title: 'Error occurred',
                        showConfirmButton: true,
                        timer: 10000
                    });
                    console.log(response.data.errors);
                }

            }).catch((error) => {
                console.log(error);
            });
    }

    const getCategories = () => {
        axios.get('/api/admin/post-diagnostic-tool/categories')
            .then((response) => {
                if(response.data.success === true){
                    categories.value = response.data.categories;
                }
                console.log(response.data.categories);
            }).catch((error) => {
            console.log(error);
        });
    }

    onBeforeMount(() => {
        console.log("props", props.question);
        getCategories();
    });
</script>

<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.vue-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.vue-modal-inner{
    width: 60%;
    margin: 10rem auto;
}

@media only screen and (max-width: 420px) {
    .vue-modal-inner {
        width: 100%;
    }
}

.vue-modal-content {
    padding: 8px;
    background-color: #fff;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-clip: padding-box;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
}

.vue-modal-btn {
    width: 100px;
    background-color: #f81f1f;
    color: #fff;
    border-radius: 5px;
    margin: 0 auto;
    height: 30px;
    align-content: center;
    display: grid;
    font-size: 13px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
    transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}
</style>
