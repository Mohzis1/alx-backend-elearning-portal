<script setup>
    import {ref, onBeforeMount} from 'vue';
    import BaseService from "../../../../services/base-service";
    import RouteService from "../../../../services/route-service";

    const completedModuleAssessments = ref([]);
    const accumulatedAssessmentScore = ref(0);
    const dateCompleted = ref('');
    const user = ref(null);
    const completedPostDiagnostic = ref(false);

    const getModules = async () => {
        // Get token from local storage
        let token = localStorage.getItem('brace-learning-tk');
        axios.get('/api/learning/module/assessment/history', {
            headers: {
                "Authorization" : "Bearer " + token,
                'Accept' : 'application/json',
            },
        }).then((response) => {
            if (response.data.success){
                completedModuleAssessments.value = response.data.completed_module_assessments;
                accumulatedAssessmentScore.value = response.data.accumulated_assessment_score;
                dateCompleted.value = response.data.date_completed;
                user.value = response.data.user;
                completedPostDiagnostic.value = response.data.completed_post_diagnostic;
                console.log(response.data.completed_post_diagnostic);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const roundDecimal = (num) => {
       return BaseService.roundDecimal(num);
    }

    onBeforeMount(() => {
        RouteService.completedDiagnosticTool(localStorage.getItem('brace-learning-tk'));
        getModules();
    });
</script>

<template>
    <div class="row">
        <div class="col-12">
            <p>
                <router-link
                    exact
                    :to="{name: 'LearningDashboardView'}">
                    <span class="text-light-grey">Dashboard</span>
                </router-link>
                /
                <router-link
                    exact
                    :to="{name: 'LearningModuleView'}">
                    <span class="text-light-grey">Modules</span>
                </router-link>
                /
                <span class="text-dark">Assessment History</span>
            </p>
            <h4 class="text-orange float-left text-inter">Assessment History</h4>
        </div>
    </div>

    <div class="row justify-content-center d-flex">

        <div v-if="accumulatedAssessmentScore > 0" class="col-md-10">
            <div class="row">
                <div class="col-12 text-center ">
                    <p class="text-manrope tx-30 mb-0">Overall Score</p>
                    <h1 class="na-text-dark-green text-manrope tx-50">
                        {{ accumulatedAssessmentScore }} %</h1>
                </div>

                <div class="col-12 text-center">
                    <img :src="'/images/icons/medal2.png'" width="100"/>
                </div>

                <div v-if="completedPostDiagnostic" class="col-12 text-center">
                    <a :href="'/learning/certificate/'+JSON.stringify(user)+'/download'">
                        <button style="width:150px;" class="module-btn bg-light-brown">
                            Get Certificate <i class="fa fa-certificate"></i></button>
                    </a>
                    <p class="tx-17">
                        <strong>Date Completed:</strong> {{ dateCompleted }}
                    </p>
                </div>

                <div v-else class="col-12 text-center">
                    <router-link
                        class="font-weight-bolder na-text-dark-green"
                        target="_blank"
                        :to="{name: 'LearningPostDiagnosticToolApplicationView'}">
                        <button class="submit-btn na-bg-dark-green text-white text-center tx-15">
                            Begin Post Diagnostic Tool
                        </button>
                    </router-link>
                </div>

            </div>
        </div>

        <div class="col-md-10">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="na-text-dark-green text-inter mb-1 tx-20">Score Breakdown</p>

                    <div v-if="completedModuleAssessments.length">
                        <div v-for="(assessment, index) in completedModuleAssessments" :key="assessment.id"
                             class="row bg-white-radius-shadow border-light-green mb-2">
                            <div class="col-md-10 col-sm-10">
                                <p class="tx-14 text-dark-green mb-1">Module {{ index + 1 }}</p>
                                <h5 class="text-inter text-dark">
                                    {{ assessment.module.title }} <span class="text-orange">
                                    ({{ roundDecimal(assessment.percent) }}%)
                                </span>
                                </h5>
                            </div>
                            <div v-if="assessment.retake < 3" class="col-md-2 col-sm-2">
                                <router-link
                                    exact :to="{name: 'LearningModuleAssessmentView', params: {id: assessment.module.id}}">
                                    <button class="module-btn bg-danger text-white d-flex justify-content-center">
                                        Retake ({{ 3 - assessment.retake }})</button>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div v-else class="text-center bg-white-radius-shadow border-light-green">
                        <h6 class="text-inter text-gray">No assessment taken</h6>
                    </div>

                </div>
            </div>
        </div>

    </div>



</template>

<style scoped>

</style>
