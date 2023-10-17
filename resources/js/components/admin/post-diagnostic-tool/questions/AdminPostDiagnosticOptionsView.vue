<template>

    <transition name="fade">
        <div class="vue-modal" v-show="open">
            <transition name="drop-in">
                <div class="vue-modal-inner" v-show="open">
                    <div class="vue-modal-content">

                        <div class="row">
                            <div class="col-12">
                                <p class="content-header">{{ question.question }} | Options</p>
                            </div>
                        </div>

                        <admin-post-diagnostic-options-form
                            @emit-submitted-options="submittedOptions"
                            :question="question"
                        ></admin-post-diagnostic-options-form>

                        <div class="row justify-content-center d-flex">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-body">
                                        <admin-post-diagnostic-options-item
                                            v-for="option in options"
                                            :key="option.id"
                                            :option="option"
                                        ></admin-post-diagnostic-options-item>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 text-left">
                                <button @click.prevent="emitCloseModal" class="btn btn-danger btn-medium">Close Modal</button>
                            </div>
                        </div>

                    </div>
                </div>
            </transition>
        </div>
    </transition>

</template>

<script setup>
    import {ref, watch, reactive, onBeforeMount} from "vue";
    import AdminPostDiagnosticOptionsForm from "./AdminPostDiagnosticOptionsForm.vue";
    import AdminPostDiagnosticOptionsItem from "./AdminPostDiagnosticOptionsItem.vue";
    import {useRoute} from "vue-router";

    const questionId = ref('');
    const route = useRoute();
    questionId.value = route.params.id !== undefined ? route.params.id : '';
    watch(
        () => route.params.id,
        () => {
            questionId.value = route.params.id !== undefined ? route.params.id : '';
        },
    );

    const props = defineProps([
        'open',
        'question',
        'options'
    ]);

    const question = ref(props.question);
    const options = ref(props.options);
    const isOpen = ref(false);

    const form = reactive({
        search_term: ''
    });

    const emit = defineEmits([
        'emit-close-modal',
        'emit-updated-options'
    ]);

    const emitCloseModal = () => {
        console.log("emit close modal");
        emit("emit-close-modal", 'Close modal');
    }

    const handleKeyup = (event) => {
        if(event.keyCode === 27){
            emitCloseModal();
        }
    }

    const submittedOptions = (event) => {
        console.log(event);
        options.value = event;
        emit("emit-updated-options", event);
    }

    const getOptions = () => {
        axios.get('/api/admin/post-diagnostic-tool/question/options', {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                question_id: questionId.value
            }
        }).then((response) => {
            if(response.data.success === true){
                options.value = response.data.options;
                question.value = response.data.question;
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    onBeforeMount(() => {
        // getOptions();
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
