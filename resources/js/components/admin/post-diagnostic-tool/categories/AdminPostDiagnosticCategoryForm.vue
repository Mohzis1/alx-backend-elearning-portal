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

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group p-1">
                                                                <label>
                                                                    Name<span class="text-danger">*</span>
                                                                </label>
                                                                <input v-model="form.name" type="text" id="name"
                                                                       class="form-control pl-1" required>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="form-group p-1">
                                                                <label>
                                                                    Sort<span class="text-danger">*</span>
                                                                </label>
                                                                <input v-model="form.sort" type="text" id="name"
                                                                       class="form-control pl-1" required>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-12 center-inside">
                                                        <button v-if="category === undefined"
                                                                @click.prevent="submitCategory"
                                                                class="btn btn-primary btn-md p-1 mr-1">Submit</button>
                                                        <button v-else @click.prevent="updateCategory(category.id)"
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
    import {onMounted, onUnmounted, reactive, ref} from 'vue';
    import SweetAlertService from "../../../../services/sweet-alert-service";
    import axios from "axios";

    const props = defineProps([
        'category',
        'open',
    ]);

    const emit = defineEmits([
        'emitting-close-modal'
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

    const category = ref(props.category);
    const form = reactive({
        name: props.category !== undefined ? category.value.name : '',
        sort: props.category !== undefined ? category.value.sort : '',
    });
    const errors = ref([]);

    const submitCategory = async () => {
        errors.value = [];
        SweetAlertService.formLoading(Swal, 'Please wait', 'Submitting...');

        const formData = new FormData();
        // iterate and add form data
        Object.keys(form).forEach(function(key) {
            console.log(key); // key
            console.log(form[key]); // value
            formData.append(key, form[key]);
        });

        await axios.post('/api/admin/post-diagnostic-tool/category/store', formData, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            }
        }).then((response) => {
            if (response.data.success) {
                console.log("Emitting Submitted Category");
                emit("emitting-submitted-category", response.data.category);
                console.log(response.data.question);

                SweetAlertService.formSuccess(Swal, 'Submitted', 2500);
                // Clear fields
                Object.keys(form).forEach(function(key) {
                    form[key] = '';
                });

            } else {
                SweetAlertService.formError(Swal, 'one or more fields are required', 7000);
                if(response.data.error_message){
                    console.log(response.data.error_message);
                }

                if(response.data.errors.length){
                    errors.value = response.data.errors;
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const updateCategory = async (id) => {
        errors.value = [];
        SweetAlertService.formLoading(Swal, 'Please wait', 'Updating...');

        const formData = new FormData();
        // iterate and add form data
        Object.keys(form).forEach(function(key) {
            console.log(key); // key
            console.log(form[key]); // value
            if(form[key] !== null){
                formData.append(key, form[key]);
            }else{
                formData.append(key, '');
            }
        });

        await axios.post('/api/admin/post-diagnostic-tool/category/update', formData, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                category_id: id
            }
        }).then((response) => {
            if (response.data.success) {
                console.log("Emitting Updated Category");
                emit("emitting-updated-category", response.data.category);
                console.log(response.data.category);
                SweetAlertService.formSuccess(Swal, 'Updated', 2500);

            } else {
                SweetAlertService.formError(Swal, 'one or more fields are required', 5000);
                if(response.data.error_message){
                    console.log(response.data.error_message);
                }
                if(response.data.errors.length){
                    errors.value = response.data.errors;
                }
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    onUnmounted(() => {
        document.removeEventListener("keyup", handleKeyup);
    });

    onMounted(() => {
        document.addEventListener("keyup", handleKeyup);
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
