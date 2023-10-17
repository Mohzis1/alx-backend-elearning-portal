<template>
    <div class="container">

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
                    <span class="text-dark">{{ module.title }}</span>
                </p>
                <h2 class="text-orange float-left text-inter">{{ module.title }}</h2>
            </div>

            <div class="col-12 bg-light-green p-4 border-radius-8">
                <p v-html="module.description"></p>
                <p class="text-inter">
                    <strong>Note:</strong> Complete all courses and make sure the "lock" icon has been cleared from all courses before proceeding to your assignment and assessment
                </p>
            </div>
        </div>

        <div class="row mt-5">

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

            <div class="col-md-12" v-else>
                <!--Check if module is unlocked-->
                <div v-if="moduleStatus === true" class="row justify-content-center d-flex">
                    <div v-for="(course, index) in courses" :key="course.id"
                         class="col-md-5 course-card mb-4 ml-2 mr-2">
                        <div class="row">
                            <!--Display every first course-->
<!--                            <div class="col-12" v-if="min_course_sort === course.sort">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4 p-0">-->
<!--                                        <router-link-->
<!--                                            exact-->
<!--                                            :to="{name: 'LearningCourseShow', params: {id: course.id}}">-->
<!--                                            <img class="course-img" :src="course.image"/>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-8 p-0">-->
<!--                                        <div class="course-header bg-very-light-orange">-->
<!--                                            <span class="float-left text-orange text-inter mr-2">-->
<!--                                                Course {{ index + 1 }}-->
<!--                                            </span>-->
<!--                                            <span class="fa fa-user mr-1 text-dark"></span>-->
<!--                                            <span class="text-orange mb-1">{{ course.trainers }}</span>-->
<!--                                        </div>-->
<!--                                        <div class="course-body">-->
<!--                                            <router-link-->
<!--                                                exact-->
<!--                                                :to="{name: 'LearningCourseShow', params: {id: course.id}}">-->
<!--                                                <h6 class="text-medium-dark">{{ course.title }}</h6>-->
<!--                                            </router-link>-->
<!--                                            <p v-if="course.course_outline"-->
<!--                                               class="text-grey" v-html="course.course_outline.substring(0,80)"></p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-4 p-0">
                                        <router-link
                                            exact
                                            :to="{name: 'LearningCourseShow', params: {id: course.id}}">
                                            <img class="course-img" :src="course.image"/>
                                        </router-link>
                                    </div>
                                    <div class="col-md-8 p-0">
                                        <div class="course-header bg-very-light-orange">
                                            <span class="float-left text-orange text-inter mr-2">
                                                Course {{ index + 1 }}</span>
                                            <span class="fa fa-user mr-1 text-dark"></span>
                                            <span class="text-orange mb-1">{{ course.trainers }}</span>
                                        </div>
                                        <div class="course-body">
                                            <router-link
                                                exact
                                                :to="{name: 'LearningCourseShow', params: {id: course.id}}">
                                                <h6 class="text-medium-dark">{{ course.title }}</h6>
                                            </router-link>
                                            <p v-if="course.course_outline"
                                               class="text-grey" v-html="course.course_outline.substring(0,80)"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Fade unlocked course-->
<!--                            <div class="col-12" v-else-if="!course.current_course_completed">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4 p-0">-->
<!--                                        <router-link-->
<!--                                            exact-->
<!--                                            :to="{name: 'LearningCourseShow', params: {id: course.id}}">-->
<!--                                            <img class="course-img" :src="course.image"/>-->
<!--                                        </router-link>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-8 p-0">-->
<!--                                        <div class="course-header bg-very-light-orange">-->
<!--                                            <span class="float-right text-orange">-->
<!--                                                <span class="material-symbols-outlined float-right">lock</span>-->
<!--                                            </span>-->
<!--                                            <span class="float-left text-orange text-inter mr-2">-->
<!--                                                Course {{ index + 1 }}</span>-->
<!--                                            <span class="fa fa-user mr-1 text-dark"></span>-->
<!--                                            <span class="text-orange mb-1">{{ course.trainers }}</span>-->
<!--                                        </div>-->
<!--                                        <div class="course-body">-->
<!--                                            <router-link-->
<!--                                                exact-->
<!--                                                :to="{name: 'LearningCourseShow', params: {id: course.id}}">-->
<!--                                                <h6 class="text-medium-dark">{{ course.title }}</h6>-->
<!--                                            </router-link>-->
<!--                                            <p v-if="course.course_outline"-->
<!--                                               class="text-grey" v-html="course.course_outline.substring(0,80)"></p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

                        </div>
                    </div>

                    <div class="col-md-5 course-card mb-4 mr-2 ml-2"
                         v-for="assignment in module.assignments" :key="assignment.id">
                        <div class="row">
                            <div class="col-md-4 p-0">
                                <router-link
                                    exact
                                    :to="{name: 'LearningModuleAssignmentView', params: {id: assignment.id}}">
                                    <img :src="'/images/icons/module-assignment.jpg'"/>
                                </router-link>
                            </div>
                            <div class="col-md-8 p-0">
                                <div class="course-header bg-light-green">
                                    <span class="float-left na-text-dark-green text-inter">Assignment</span>
                                </div>
                                <router-link
                                    exact
                                    :to="{name: 'LearningModuleAssignmentView', params: {id: assignment.id}}">
                                    <h5 class="text-medium-dark text-inter">{{ assignment.title }}</h5>
                                </router-link>
                            </div>
                        </div>
                    </div>

<!--                    <div class="col-md-5 course-card mb-4 mr-2 ml-2" :class="{'opacity50': !all_courses_completed}"-->
<!--                         v-for="assignment in module.assignments" :key="assignment.id">-->
<!--                        <div class="row">-->
<!--                            <div class="col-md-4 p-0">-->
<!--                                <router-link-->
<!--                                    exact-->
<!--                                    :to="{name: 'LearningModuleAssignmentView', params: {id: assignment.id}}">-->
<!--                                    <img :src="'/images/icons/module-assignment.jpg'"/>-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                            <div class="col-md-8 p-0">-->
<!--                                <div class="course-header bg-light-green">-->
<!--                            <span v-if="all_courses_completed"-->
<!--                                  class="float-left na-text-dark-green text-inter">Assignment</span>-->
<!--                                    <span v-else class="material-symbols-outlined float-right">lock</span>-->

<!--                                </div>-->
<!--                                <div v-if="all_courses_completed" class="course-body">-->
<!--                                    <router-link-->
<!--                                        exact-->
<!--                                        :to="{name: 'LearningModuleAssignmentView', params: {id: assignment.id}}">-->
<!--                                        <h5 class="text-medium-dark text-inter">{{ assignment.title }}</h5>-->
<!--                                    </router-link>-->
<!--                                </div>-->
<!--                                <div v-else class="course-body">-->
<!--                                    <h5 class="text-medium-dark text-inter">{{ assignment.title }}</h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->

                    <div class="col-md-5 mb-4 mr-2 ml-2">
                        <div class="row course-card mb-4">
                            <div class="col-md-4 p-0">
                                <router-link
                                    exact
                                    :to="{name: 'LearningModuleAssessmentView', params: {id: module.id}}">
                                    <img width="200" :src="'/images/icons/module-assessment.jpg'"/>
                                </router-link>
                            </div>
                            <div class="col-md-8 p-0">
                                <div class="course-header bg-light-green">
                                    <span class="float-left na-text-dark-green">Assessment</span>
                                </div>
                                <router-link
                                    exact
                                    :to="{name: 'LearningModuleAssessmentView', params: {id: module.id}}">
                                    <h5 class="text-medium-dark text-inter">Assessment</h5>
                                </router-link>
                            </div>
                        </div>
                    </div>

<!--                    <div class="col-md-5 mb-4 mr-2 ml-2" :class="{'opacity50': !all_courses_completed}">-->
<!--                        <div class="row course-card mb-4">-->
<!--                            <div class="col-md-4 p-0">-->
<!--                                <router-link-->
<!--                                    exact-->
<!--                                    :to="{name: 'LearningModuleAssessmentView', params: {id: module.id}}">-->
<!--                                    <img width="200" :src="'/images/icons/module-assessment.jpg'"/>-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                            <div class="col-md-8 p-0">-->
<!--                                <div class="course-header bg-light-green">-->
<!--                            <span v-if="all_courses_completed"-->
<!--                                  class="float-left na-text-dark-green">Assessment</span>-->
<!--                                    <span v-else class="material-symbols-outlined float-right">lock</span>-->
<!--                                </div>-->
<!--                                <div v-if="all_courses_completed" class="course-body">-->
<!--                                    <router-link-->
<!--                                        exact-->
<!--                                        :to="{name: 'LearningModuleAssessmentView', params: {id: module.id}}">-->
<!--                                        <h5 class="text-medium-dark text-inter">Assessment</h5>-->
<!--                                    </router-link>-->
<!--                                </div>-->
<!--                                <div v-else class="course-body">-->
<!--                                    <h5 class="text-medium-dark text-inter">Assessment</h5>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>

                <h4 v-if="moduleStatus === false" class="na-text-dark-green text-center">
                    This module has been locked
                </h4>
            </div>

        </div>
    </div>

</template>

<script>
import {ref, watch, onBeforeMount} from 'vue';
import {useRoute} from "vue-router";
import LearningCourseItem from "./LearningCourseItem.vue";
import RouteService from "../../../../services/route-service";
import {
    ContentLoader,
} from 'vue-content-loader';

export default {
    components: {
        LearningCourseItem,
        ContentLoader
    },

    setup(){
        // For routing with params
        const id = ref('');
        const route = useRoute();
        id.value = route.params.id;
        watch(
            () => route.params.id,
            () => {
                id.value = route.params.id;
            },
        );

        const courses = ref([]);
        const module = ref({});
        const nextModule = ref({});
        const min_course_sort = ref(0);
        const all_courses_completed = ref(false);
        const moduleStatus = ref(null);
        const contentLoaded = ref(false);

        const getCourses = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.get('/api/learning/courses', {
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
                params: {
                    module_id: id.value,
                }
            }).then((response) => {
                if (response.data.success) {
                    courses.value = response.data.courses;
                    min_course_sort.value = response.data.min_course_sort;
                    module.value = response.data.module;
                    moduleStatus.value = response.data.module.status === 1;
                    nextModule.value = response.data.module.next_module;
                    all_courses_completed.value = response.data.all_courses_completed;
                    contentLoaded.value = true;
                    // console.log(response.data.all_courses_completed);
                }else{
                    console.log(response.data);
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        onBeforeMount(() => {
            RouteService.completedDiagnosticTool(localStorage.getItem('brace-learning-tk'));
            getCourses();
        });

        return {
            courses,
            module,
            nextModule,
            min_course_sort,
            id,
            route,
            all_courses_completed,
            moduleStatus,
            contentLoaded,

            getCourses,
        }
    }
}
</script>

<style scoped>

</style>
