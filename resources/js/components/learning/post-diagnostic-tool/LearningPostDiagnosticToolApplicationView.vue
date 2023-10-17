<template>

    <Transition name="slide-fade">
        <section v-if="intro" class="wow fadeIn pt-5 pl-3 pr-3 pb-5" style="margin-top: 0px; z-index: 3;">
            <div class="shrink-responsiveness-ent-o container-fluid">
                <div class="row m-0 justify-content-center d-flex">

                    <div class="col-md-8 test-container" style="border-radius: 12px">
                        <div id="intro">
                            <div class="row p-4">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <div class="big-scrn d-none d-sm-none d-md-block">
                                            <div class="row">
                                                <div class="col-12 pt-4 text-center na-text-dark-green text-center">
                                                    <h5 class="custom-font2">Instructions</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="yaedp-content text-center">
                                                <strong>Before you proceed, please read the below instructions carefully.</strong>
                                            </p>

                                            <p class="width-75 mx-auto yaedp-content text-extra-dark-gray lg-width-90 sm-width-100 text-large">
                                                The aim of this tool is to collect information about participants’ level of understanding and lessons learned from the BRACE program and how these lessons would be applied to their business to adopt climate-smart practices.<br>
                                                Please provide an honest and sincere response to the questions related to your business.<br><br>

                                                1. Please note that you cannot go back to previous questions, so make sure to answer the questions correctly.<br>
                                                2. You are only required to answer questions about the value chain you operate.
                                                This tool will take approximately 10 minutes. You can save and continue answering the questions at a later time.<br>
                                                (<strong>Note:</strong> You need to complete this tool before you can access your certificate)
                                            </p>

                                            <a class="justify-content-center d-flex" href="">
                                                <button @click.prevent="intro = false" type="button"
                                                        class="yedp-begin-btn btn active">Next</button>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section v-else>
            <div class="col-12 mb-3">
                <h5 v-if="question.export_diagnostic_category" class="custom-font2 na-text-dark-green">
                    {{ question.export_diagnostic_category.name }}</h5>
                <div class="progress margin-3px-bottom">
                    <div class="progress-bar progress-bar-striped na-bg-brown-2 padding-2px-tb"
                         role="progressbar" :style="'width: '+progress+'%'"
                         :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
                        {{ progress }}% (Progress)</div>
                </div>
            </div>

            <!--Inside Card-->
            <div class="col-12 col-sm-12 col-md-8 test-container" style="border-radius: 12px">

                <!--If there are no questions, process feedback-->
                <div class="row justify-content-center d-flex" v-if="question !== false">
                    <div v-if="dataLoaded" class="col-12">
                        <!--Question category name-->
                        <form @submit.prevent="submitAnswer">
                            <div v-if="errors" class="text-danger text-center">
                                <span v-for="(error, index) in errors" :key="index">
                                    {{ error.toString() }}<br>
                                </span>
                            </div>

                            <!--If question type is radio-->
                            <div v-if="question.type === 'radio'">
                                <p class="custom-font1 text-large brand-text-brown">
                                    {{ question.question }}:</p>
                                <label v-for="(option, index) in options" :key="option.id"
                                       class="radio-container ml-5">{{ option.option }}
                                    <input type="radio" v-model="form.option_id"
                                           :value="option.id" @change="selectOption($event, option.condition_type)">
                                    <span class="checkmark"></span>
                                </label>

                                <input v-if="condition_input" v-model="form.answer"
                                       class="input-bg width-50-percent margin-five-left"
                                       type="text" placeholder="Other Answer" />
                            </div>

                            <div v-if="question.type === 'location_country'">
                                <p class="custom-font1 text-large brand-text-brown">
                                    {{ question.question }}:</p>

                                <select v-model="form.option_id" class="form-control input-bg">
                                    <option value="">Select Country</option>
                                    <option v-for="country in countries" :value="country.id">
                                        {{ country.name }}</option>
                                </select>
                            </div>

                            <div v-if="question.type === 'location_state'">
                                <p class="custom-font1 text-large brand-text-brown">
                                    {{ question.question }}:</p>

                                <select v-model="form.option_id" class="form-control input-bg">
                                    <option value="">Select State</option>
                                    <option v-for="state in states" :value="state.id">
                                        {{ state.name }}</option>
                                </select>
                            </div>

                            <!--If question type is checkbox-->
                            <div v-if="question.type === 'checkbox'">
                                <p class="custom-font1 text-large brand-text-brown">
                                    {{ question.question }}:
                                </p>
                                <div v-for="(option, index) in options" :key="option.id"
                                     class="form-group form-check ml-5">
                                    <input type="checkbox" class="form-check-input"
                                           :id="'checkbox'+option.id" :value="option.id"
                                           v-model="form.option_ids">
                                    <label class="" :for="'checkbox'+option.id">
                                        {{ option.option }}
                                    </label>
                                </div>
                            </div>

                            <!--If question type is freetext-->
                            <div  v-if="question.type === 'freetext'">
                                <p class="custom-font1 text-large brand-text-brown">
                                    {{ question.question }}:
                                </p>
                                <input class="input-bg" type="text" v-model="form.answer" required />
                                <span class="feedback-custom"></span>
                            </div>

                            <div class="justify-content-center d-flex">
                                <button v-if="!loading" type="submit" class="yedp-begin-btn btn active">Next</button>
                                <button v-else disabled class="yedp-begin-btn btn active">
                                    <i class="fa fa-circle-o-notch fa-spin"></i>
                                </button>
                            </div>

                        </form>
                    </div>

                    <!--Show loader when question is loading-->
                    <div class="col-12" v-else>
                        <ContentLoader viewBox="0 0 400 150" height={130} width={400}>
                            <circle cx="10" cy="20" r="8" />
                            <rect x="25" y="15" rx="5" ry="5" width="300" height="10" />
                            <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                            <circle cx="34" cy="80" r="8" />
                            <rect x="51" y="75" rx="5" ry="5" width="90" height="8" />
                            <circle cx="34" cy="110" r="8" />
                            <rect x="50" y="106" rx="5" ry="5" width="100" height="8" />
                        </ContentLoader>
                    </div>
                </div>

                <!--show participant feedback-->
                <div class="row justify-content-center d-flex" v-else>

                    <div v-if="dataLoaded" class="col-12 text-center">
                        <h5 class="na-text-dark-green custom-font2">Assessment Complete</h5>
                        <p class="custom-font1 text-extra-large">
                            Thank you for taking the post diagnostic tool.<br>
                            Your certificate is available in the
                            <router-link
                                class="na-text-dark-green"
                                exact
                                :to="{name: 'LearningModuleAssessmentHistoryView'}">
                                assessment history page
                            </router-link>
                        </p>
                    </div>

                    <div class="col-12" v-else>
                        <ContentLoader viewBox="0 0 400 150" height={130} width={400}>
                            <circle cx="10" cy="20" r="8" />
                            <rect x="25" y="15" rx="5" ry="5" width="300" height="10" />
                            <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                            <circle cx="34" cy="80" r="8" />
                            <rect x="51" y="75" rx="5" ry="5" width="90" height="8" />
                            <circle cx="34" cy="110" r="8" />
                            <rect x="50" y="106" rx="5" ry="5" width="100" height="8" />
                        </ContentLoader>
                    </div>

                </div>
            </div>
        </section>
    </Transition>

</template>

<script setup>
    import { ContentLoader } from 'vue-content-loader';
    import {ref, onBeforeMount, reactive} from "vue";

    const form = reactive({
        answer: '',
        option_id: '',
        option_ids: []
    });

    const loading = ref(false);
    const errors = ref([]);
    const options = ref([]);
    const countries = ref([]);
    const states = ref([]);
    const question = ref('');
    const dataLoaded = ref(false);
    const progress = ref(0);
    const status = ref('');
    const condition_input = ref(false);
    const intro = ref(true);

    const selectOption = (e, condition_type) => {
        console.log(e.target.value);

        if(condition_type === 'show_input'){
            condition_input.value = true;
            console.log(condition_type);
        }else{
            condition_input.value = false;
        }
    }

    const getQuestion = () => {
        condition_input.value = false;
        dataLoaded.value = false;
        axios.get('/api/learning/post-diagnostic-tool/get-question', {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('brace-learning-tk'),
                'Accept' : 'application/json',
            },
        }).then(response => {
            console.log(response.data);
            if(response.data.success === true){
                console.log("score", response.data.accumulated_assessment_score);
                // If accumulated score is zero, this means the participant has not completed the assessment yet.
                if(response.data.accumulated_assessment_score < 1){
                    window.location.href = '/learning/dashboard';
                }
                if(response.data.question !== null){
                    question.value = response.data.question;
                    options.value = response.data.question.options;
                    dataLoaded.value = true;
                    console.log(response.data.question.options);

                    // If next question is country list
                    if(response.data.question.type === 'location_country'){
                        getCountries();
                    }

                    // If next question is state list
                    if(response.data.question.type === 'location_state'){
                        getStatesFromCountryId();
                    }

                }else{
                    question.value = false;
                    status.value = response.data.status;
                    console.log('percent '+status.value.percent);
                }
                dataLoaded.value = true;
            }else{
                console.log(response.data.message);
            }
        }).catch(error => {
            console.log(error)
        });
    }

    const getApplicationProgress = () => {
        axios.get('/api/learning/post-diagnostic-tool/application/progress', {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('brace-learning-tk'),
                'Accept' : 'application/json',
            },
        }).then(response => {
                if(response.data.success === true){
                    progress.value = response.data.progress;
                    console.log(response.data.progress);
                }else{
                    console.log(response.data.message);
                }
            }).catch(error => {
            console.log(error)
        });
    }

    const submitAnswer = () => {
        loading.value = true;
        errors.value = []; // clear errors
        let url = '/api/learning/post-diagnostic-tool/answer/store';
        let fields = {}; // create empty object

        // assign the right input field on the question type
        // Laravel validation request will use this to validate only available fields
        if(question.value.type === 'radio'){
            // If a conditional option exists and it has a "show input" value
            // Submit both option id and answer
            // Else submit only option id
            if(condition_input.value === true){
                fields = {
                    option_id : form.option_id,
                    answer : form.answer
                };
            }else{
                fields = {
                    option_id : form.option_id
                };
            }
        }

        if(question.value.type === 'location_country'){
            fields = {option_id : form.option_id};
            // Store Country Id in local storage
            window.localStorage.removeItem("diagnostic_country_id");
            window.localStorage.setItem("diagnostic_country_id", form.option_id);
        }

        if(question.value.type === 'location_state'){
            // Get country id from local storage
            // Use it to get the country name in backend
            let countryId = window.localStorage.getItem("diagnostic_country_id");
            fields = {option_id : form.option_id, country_id : countryId};
        }

        if(question.value.type === 'checkbox'){
            fields = {option_ids : form.option_ids};
        }

        if(question.value.type === 'freetext'){
            fields = {answer : form.answer};
        }

        console.log(fields);
        axios.post(url, fields, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('brace-learning-tk'),
                'Accept' : 'application/json',
            },
            params: {
                question_id: question.value.id
            }
        }).then(response => {
                console.log(response.data);
                if(response.data.success === true){
                    // Empty all fields
                    form.answer = '';
                    form.option_id = '';
                    form.option_ids = [];
                    // get next question and progress percentage
                    getQuestion();
                    getApplicationProgress();
                }else{
                    errors.value = response.data.errors;
                    console.log(response.data.error_message);
                }
            }).catch(error => {
            console.log(error)
        }).finally(() => {
            loading.value = false;
        });
    }

    const getCountries = () => {
        dataLoaded.value = false;
        axios.get('/api/world/countries/africa').then(response => {
            console.log(response.data);
            if(response.data.success === true){
                countries.value = response.data.countries;
                console.log(response.data.countries);
            }else{
                console.log(response.data.error_message);
            }
        }).catch(error => {
            console.log(error)
        });
    }

    const getStatesFromCountryId = () => {
        // get country id stored in local storage
        let countryId = window.localStorage.getItem("diagnostic_country_id");
        // if current question type is state
        axios.get('/api/world/states/africa', {
            params: {
                country_id: countryId
            }
        }).then(response => {
            console.log(response.data);
            if(response.data.success === true){
                if(response.data.states.length > 0){
                    states.value = response.data.states;
                }else{
                    states.value = {id:0, name:"None"};
                    console.log("No state found");
                }

                console.log(response.data.states);
            }else{
                console.log(response.data.error_message);
            }
        }).catch(error => {
            console.log(error)
        });
    }

    onBeforeMount(() => {
        getQuestion();
        getApplicationProgress();
    });

</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.test-container{
    -webkit-box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
    background: #ffffff;
    padding: 12px;
    margin: 0 auto;
}

.yedp-begin-btn{
    background: #006600;
    border: 2px solid #006600;
    box-sizing: border-box;
    border-radius: 5.06329px;
    font-family: tahoma, arial, helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin: 20px 0 auto;
}

.yedp-begin-btn:hover{
    background: #FFFFFF;
    border: 2px solid #006600;
    box-sizing: border-box;
    border-radius: 5.06329px;
    font-family: tahoma, arial, helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #006600;
}

.yaedp-content{
    font-family: tahoma, arial, helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    color: #1E1E1E;
}

.na-bg-brown-2 {
    background-color: #fc924b;
}

.radio-container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}

/* The container */
.radio-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.radio-container text {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .checkmark {
    background-color: #ccc;
}

.radio-container:hover text ~ .checkmark {
    background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.radio-container input:checked ~ .checkmark {
    background-color: #006600;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
    display: block;
}

/*Progress bar*/
.progress {
    display: -ms-flexbox;
    display: flex;
    height: 1.5rem;
    overflow: hidden;
    font-size: 1rem;
    background-color: #e9ecef;
    border-radius: .50rem;
}
</style>
