<template>
    <div class="row">
        <div class="col-xl-3 col-lg-6 col-12">
            <div class="card">
                <div class="card-body">
                    <div class="media align-items-stretch">
                        <div class="p-2">
                            <i class="fa fa-user font-large-2 text-success"></i>
                        </div>
                        <div class="p-2 media-body">
                            <h6>Total</h6>
                            <h5 class="text-bold-400 mb-0">{{ total }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-12 justify-content-center d-flex">
            <button class="btn btn-md btn-info" @click.prevent="isOpen = true">
                Add New Question
            </button>
        </div>

        <Teleport to="section">
            <admin-post-diagnostic-question-form
                :open="isOpen"
                @emitting-close-modal="closeModal"
                @emitting-submitted-question="submittedQuestion"
            ></admin-post-diagnostic-question-form>
        </Teleport>

        <div class="col-md-12">
            <div class="card">
                <div class="card-body pt-2">
                    <form @submit.prevent="searchQuestions">
                        <div class="row pl-3">
                            <div class="col-md-6">
                                <input v-model="form.search_value" class="form-control"
                                       type="text" placeholder="Search">
                            </div>
                            <div class="col-md-2">
                                <button type="submit" class="btn btn-info btn-md">Search</button>
                            </div>
                        </div>
                    </form>

                    <div v-if="searchActive && dataLoaded" class="card-block">
                        <h5>
                            {{ total }} result(s) for
                            <span v-for="(value, index) in searchValues" :key="index">
                                    <!--Get value from each object-->
                                    "{{ Object.values(value)[0] }}",</span>
                        </h5>

                        <a class="btn btn-rounded btn-outline-success font-weight-bold mr-1"
                           @click.prevent="getQuestions">
                            Back to Questions</a>
                    </div>

                    <div class="card-block">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered small w-100 table table-hover table-responsive-sm mb-0">
                                <thead>
                                <tr>
                                    <th class="border-top-0">Question</th>
                                    <th class="border-top-0">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                <template v-if="dataLoaded">
                                    <admin-post-diagnostic-questions-item
                                        v-for="quest in questions.data"
                                        :key="quest.id"
                                        :question="quest"
                                    ></admin-post-diagnostic-questions-item>
                                </template>

                                <tr v-else>
                                    <td colspan="2">
                                        <content-loader
                                            :animate="true"
                                            :speed="2"
                                            width={1500}
                                            height={400}
                                            viewBox="0 0 1500 400"
                                            backgroundColor="#f3f3f3"
                                            foregroundColor="#ecebeb"
                                        >
                                            <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
                                            <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
                                            <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
                                            <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
                                            <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
                                            <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
                                            <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1424" y="137" rx="10" ry="10" width="68" height="19" />
                                            <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
                                            <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
                                            <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
                                            <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
                                            <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
                                            <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
                                            <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
                                            <circle cx="1456" cy="203" r="12" />
                                            <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
                                            <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
                                            <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
                                            <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
                                            <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
                                            <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
                                            <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
                                            <circle cx="1456" cy="265" r="12" />
                                            <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
                                            <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
                                            <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
                                            <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
                                            <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
                                            <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
                                            <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
                                            <circle cx="1456" cy="323" r="12" />
                                            <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
                                            <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
                                            <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
                                            <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
                                            <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
                                            <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
                                            <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
                                            <circle cx="1456" cy="386" r="12" />
                                            <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
                                            <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
                                            <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
                                            <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
                                            <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />
                                            <rect x="1183" y="139" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1182" y="196" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1182" y="258" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1182" y="316" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1182" y="379" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1305" y="137" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1304" y="194" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1304" y="256" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1304" y="314" rx="10" ry="10" width="85" height="19" />
                                            <rect x="1304" y="377" rx="10" ry="10" width="85" height="19" />
                                            <circle cx="37" cy="97" r="11" />
                                            <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
                                            <circle cx="1316" cy="88" r="11" />
                                            <rect x="1337" y="94" rx="0" ry="0" width="134" height="3" />
                                            <circle cx="77" cy="96" r="11" />
                                        </content-loader>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <laravel-vue-pagination v-if="!searchActive"
                            class="justify-content-center"
                            :limit="3"
                            :data="questions"
                            @pagination-change-page="getQuestions"
    >
        <template #prev-nav>
            <span>&lt; Previous</span>
        </template>
        <template #next-nav>
            <span>Next &gt;</span>
        </template>
    </laravel-vue-pagination>

    <laravel-vue-pagination v-if="searchActive"
                            class="justify-content-center"
                            :limit="3"
                            :data="questions"
                            @pagination-change-page="searchQuestions"
    >
        <template #prev-nav>
            <span>&lt; Previous</span>
        </template>
        <template #next-nav>
            <span>Next &gt;</span>
        </template>
    </laravel-vue-pagination>

</template>

<script setup>
    import {onBeforeMount, onMounted, reactive, ref, watch} from "vue";
    import LaravelVuePagination from 'laravel-vue-pagination';
    import {ContentLoader} from 'vue-content-loader';
    import AdminPostDiagnosticQuestionForm from "./AdminPostDiagnosticQuestionForm.vue";
    import AdminPostDiagnosticQuestionsItem from "./AdminPostDiagnosticQuestionsItem.vue";
    import {useRoute} from "vue-router";

    const categoryId = ref('');
    const route = useRoute();
    categoryId.value = route.params.id !== undefined ? route.params.id : '';
    watch(
        () => route.params.id,
        () => {
            categoryId.value = route.params.id !== undefined ? route.params.id : '';
        },
    );

    const questions = ref([]);
    const total = ref(0);
    const dataLoaded = ref(false);
    const searchActive = ref(false);
    const searchValues = ref(false);
    const isOpen = ref(false);

    const form = reactive({
       search_term: ''
    });

    const closeModal = () => {
        isOpen.value = false;
    }

    const submittedQuestion = (event) => {
        console.log("event submitted", event);
        questions.value.data.unshift(event);
    }

    const getQuestions = (page = 1) => {
        searchActive.value = false;
        dataLoaded.value = false;
        axios.get('/api/admin/post-diagnostic-tool/questions?page=' + page, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                category_id: categoryId.value
            }
        }).then((response) => {
                if(response.data.success === true){
                    questions.value = response.data.questions;
                    total.value = response.data.total;
                }
                dataLoaded.value = true;
                console.log(questions.value);
            }).catch((error) => {
            console.log(error);
        });
    }

    const searchQuestions = (page = 1) => {
        // On submit, make search active, turn on div load and empty current logins array
        questions.value = [];
        searchActive.value = true;
        dataLoaded.value = false;
        axios.post('/api/admin/post-diagnostic-tool/questions/search?page=' + page, form, {
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem('afc-admin-tk'),
                'Accept' : 'application/json',
            },
            params: {
                category_id: categoryId.value
            }
        }).then((response) => {

                if(response.data.success === true){
                    questions.value = response.data.questions;
                    total.value = response.data.total;
                    searchValues.value = response.data.search_values;
                }else{
                    total.value = response.data.total;
                    searchValues.value = response.data.search_values;
                }
                dataLoaded.value = true;
            }).catch((error) => {
            console.log(error);
        });
    }

    onBeforeMount(() => {
        getQuestions();
    });
</script>

<style scoped>

</style>
