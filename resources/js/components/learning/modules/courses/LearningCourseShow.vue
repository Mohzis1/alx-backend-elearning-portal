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
                    :to="{name: 'LearningCourseView', params: {id: module.id}}">
                    <span class="text-light-grey">Courses</span>
                </router-link>
                /
                <span class="text-dark">{{ course.title }}</span>
            </p>
            <h4 class="text-orange float-left text-inter">{{ course.title }}</h4>
        </div>
    </div>

    <ContentLoader
        v-if="!contentLoaded"
        width={1500}
        height={300}
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
    >
        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>

    <div class="row mt-5" v-else>
        <div class="col-md-8">
            <div class="row bg-medium-grey p-3">
                <!--Course video and contents-->
                <div v-if="course.video" class="col-12">
                    <div v-html="course.video"></div>
                </div>

                <div class="col-12">
                    <router-link
                        v-if="course.previous_course"
                        exact
                        :to="{name: 'LearningCourseShow', params: {id: course.previous_course.id}}">
                        <button class="submit-btn-small na-bg-dark-green text-white float-left">Previous Course</button>
                    </router-link>

                    <router-link
                        v-if="course.next_course"
                        exact
                        :to="{name: 'LearningCourseShow', params: {id: course.next_course.id}}">
                        <button class="submit-btn-small na-bg-dark-green text-white float-right">Next Course</button>
                    </router-link>

                    <router-link
                        v-else
                        exact
                        :to="{name: 'LearningModuleAssessmentView', params: {id: module.id}}">
                        <button class="submit-btn-small na-bg-dark-green text-white float-right">Assessment</button>
                    </router-link>
                </div>

                <div v-if="course.course_contents" class="col-12 mt-4">
                    <p v-html="course.course_contents"></p>
                </div>

                <!--Course resources-->
                <div v-if="course.resources" class="col-12 p-0 pb-3 bg-white na-border-radius mt-4">
                    <div class="na-bg-dark-green p-3">
                        <strong class="text-white">Resources</strong>
                    </div>

                    <div class="row justify-content-center">
                        <div v-for="resource in course.resources" :key="resource.id"
                             class="col-md-11 bg-white-radius-shadow mt-2">
                            <span class="material-symbols-outlined text-orange float-left">note</span>
                            <div class="float-left ml-1">
                                <p class="text-inter mb-0">{{ resource.title }}</p>
                                <a v-if="resource.url" class="na-text-dark-green" :href="resource.url" target="_blank" title="website link">
                                    <i class="fa fa-globe fa-2x mb-1"></i>
                                </a><br>
                                <a v-if="resource.document" class="na-text-dark-green"
                                   @click.prevent="downloadResource(resource.document, resource.title)"
                                   :href="resource.document" :download="resource.document"
                                ><i class="fa fa-download fa-2x" title="download resource"></i>Download</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12">
            <learning-course-discussion-view
                :course="course"
                :module="module"
            ></learning-course-discussion-view>
        </div>
    </div>

</template>

<script>
import {ref, onBeforeMount, watch, onMounted} from 'vue';
import {useRoute} from "vue-router";
import LearningCourseDiscussionView from "./discussion/LearningCourseDiscussionView.vue";
import BaseService from "../../../../services/base-service";
import {
    ContentLoader,
} from 'vue-content-loader';

export default {
    components: {
        LearningCourseDiscussionView,
        ContentLoader
    },

    setup(){
        // For routing with params, especially when changing
        const id = ref('');
        const route = useRoute();
        id.value = route.params.id;
        watch(
            () => route.params.id,
            () => {
                id.value = route.params.id;
            },
        );

        const course = ref({});
        const module = ref({});
        const activityPoints = ref(0);
        const contentLoaded = ref(false);

        const getCourse = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.get('/api/learning/course', {
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
                params: {
                    course_id: id.value,
                }
            }).then((response) => {
                if (response.data.success) {
                    course.value = response.data.course;
                    module.value = response.data.module;
                    contentLoaded.value = true;
                    // console.log(response.data.module);
                }else{
                    console.log(response.data);
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        const storeCourseActivity = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.post('/api/learning/course/user-activity/store', {
                course_id: id.value,
                module_id: module.value.id,
            },

      {
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
                // params: {
                //     course_id: id.value,
                //     module_id: module.value.id,
                // }
            }
            ).then((response) => {
                if (response.data.success) {
                    console.log('Stored Activity', response.data);
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        const downloadResource = async (file_url, title) => {
            // use method from base service
            return BaseService.downloadAnyFile(file_url, title);
        }

        onBeforeMount(() => {
            getCourse();
        });

        onMounted(() => {
            storeCourseActivity();
        });

        return {
            course,
            module,
            id,
            route,
            activityPoints,
            contentLoaded,

            getCourse,
            storeCourseActivity,
            downloadResource
        }
    }
}
</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
