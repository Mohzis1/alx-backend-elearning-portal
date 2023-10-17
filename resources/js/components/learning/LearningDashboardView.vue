<template>

    <div class="row bg-gradient-orange-yellow border-radius-8 pt-5 mb-3">
        <div class="col-7">
            <h1 class="text-white text-inter font-weight-bolder">Welcome {{ user.name }}</h1>
            <p class="text-white text-inter">
                Gather all the knowledge you need from our carefully curated
                courses, interactive exercises and quizzes.
            </p>
        </div>
        <div class="col-5">
            <img :src="'/images/icons/book-glasses.png'" class="welcome-image"/>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 p-2">
            <div class="bg-light-yellow h-100 dashboard-summary-box">
                <img class="float-left" :src="'/images/icons/folder-open.png'" width="50"/>
                <div class="float-left ml-2">
                    <p class="text-dark mb-0">Total Modules</p>
                    <h2 class="text-inter text-yellow">{{ totalModules }}</h2>
                </div>
            </div>
        </div>

        <div class="col-md-4 p-2">
            <div class="bg-light-green h-100 dashboard-summary-box">
                <img class="float-left" :src="'/images/icons/book-stack.png'" width="50"/>
                <div class="float-left ml-2">
                    <p class="text-dark mb-0">Total Courses</p>
                    <h2 class="text-inter na-text-dark-green">{{ totalCourses }}</h2>
                </div>
            </div>
        </div>

        <div class="col-md-4 p-2">
            <div class="bg-light-orange h-100 dashboard-summary-box">
                <img class="float-left" :src="'/images/icons/book-open.png'" width="50"/>
                <div class="float-left ml-2">
                    <p class="text-dark mb-0">Total Resources</p>
                    <h2 class="text-inter text-orange">06</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center d-flex mt-2">
        <div class="col-md-5 bg-light-green dashboard-summary-box mr-1 mb-2">
            <p class="tx-15 text-center">
                Track your progress. Retries, scores and certificate downloads<br>
                <router-link
                    class="font-weight-bolder na-text-dark-green"
                    target="_blank"
                    :to="{name: 'LearningModuleAssessmentHistoryView'}">
                    <button class="submit-btn bg-light-brown text-center tx-15">
                        Assessment History</button>
                </router-link>
            </p>
        </div>

        <div v-if="accumulatedAssessmentScore > 0" class="col-md-5 bg-light-green dashboard-summary-box ml-1">
            <p class="tx-15 text-center">
                <span class="na-text-dark-green font-weight-bolder">Congratulations!</span>
                You have completed all the modules.<br>
                <router-link
                    class="font-weight-bolder na-text-dark-green"
                    target="_blank"
                    :to="{name: 'LearningPostDiagnosticToolApplicationView'}">
                    <button class="submit-btn bg-light-brown text-center tx-15">
                        Begin Post Diagnostic Tool
                    </button>
                </router-link>
            </p>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12">
            <h2 class="na-text-dark-green float-left">Modules</h2>
            <router-link
                exact
                class="float-right"
                :to="{name: 'LearningModuleView'}">
                <span class="text-grey">See all <i class="fa fa-arrow-right"></i></span>
            </router-link>
        </div>

        <div v-if="!contentLoaded" class="col-12">
            <ContentLoader
                viewBox="0 0 400 475"
                width={1500}
                height={475}
            >
                <circle cx="30" cy="258" r="30" />
                <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
                <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
                <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
                <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
            </ContentLoader>
        </div>

        <learning-module-item
            v-else
            v-for="module in modules" :key="module.id"
            :module="module"
            :min_module="min_module_sort"
        ></learning-module-item>

    </div>

</template>

<script>
import {ref, onBeforeMount} from 'vue';
import LearningModuleItem from "./modules/LearningModuleItem.vue";
import RouteService from "../../services/route-service";
import {
    ContentLoader,
} from 'vue-content-loader';

export default {
    components: {
        LearningModuleItem,
        ContentLoader,
    },
    setup(){
        const user = ref('');
        const totalModules = ref(0);
        const modules = ref([]);
        const min_module_sort = ref(0);
        const totalCourses = ref(0);
        const totalResources = ref(0);
        const accumulatedAssessmentScore = ref(0);
        const contentLoaded = ref(false);

        const getUser = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.get('/api/learning/authenticate', {
                // Make "true" if not using external API
                withCredentials: true,
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
                params: {
                    token: token,
                }
            }).then((response) => {
                if (response.data.success) {
                    user.value = response.data.user;
                    console.log(response.data.user)
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        const dashboardSummary = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.get('/api/learning/dashboard/summary', {
                // Make "true" if not using external API
                withCredentials: true,
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
            }).then((response) => {
                if (response.data.success) {
                    totalModules.value = response.data.total_modules;
                    totalCourses.value = response.data.total_courses;
                    modules.value = response.data.modules;
                    min_module_sort.value = response.data.min_module_sort;
                    accumulatedAssessmentScore.value = response.data.accumulated_assessment_score;
                    contentLoaded.value = true;
                }else{
                    console.log(response.data);
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        onBeforeMount(() => {
            RouteService.completedDiagnosticTool(localStorage.getItem('brace-learning-tk'));
            getUser();
            dashboardSummary();
        });

        return {
            user,
            totalModules,
            totalCourses,
            totalResources,
            modules,
            min_module_sort,
            contentLoaded,
            accumulatedAssessmentScore,

            getUser,
            dashboardSummary,
        }
    }
}
</script>

<style scoped>

</style>
