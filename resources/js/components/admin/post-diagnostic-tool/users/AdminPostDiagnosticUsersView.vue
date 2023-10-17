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
        <div class="col-md-12">
            <div class="card">

                <form @submit.prevent="searchUsers" style="margin-bottom: 4px;">
                    <div class="row p-3">
                        <div class="col-12">
                            <h5 class="text-left">Search and filter</h5>
                        </div>
                        <div class="col-md-4 col-sm-12" style="margin-bottom: 10px;">
                            <label>Search by name, email, company, etc.</label>
                            <input class="form-control" type="text" v-model="form.term">
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>State of Origin</label>
                            <select class="form-control" v-model="form.state_origin">
                                <option selected value="">Select</option>
                                <option v-for="state in states"
                                        :key="state.id"
                                        :value="state.name">{{ state.name }}</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>State of Residence</label>
                            <select class="form-control" v-model="form.state_residence">
                                <option selected value="">Select</option>
                                <option v-for="state in states"
                                        :key="state.id"
                                        :value="state.name">{{ state.name }}</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Company Type</label>
                            <select class="form-control" v-model="form.company_type">
                                <option selected value="">Select</option>
                                <option value="sole proprietorship">Sole Proprietorship</option>
                                <option value="partnership">Partnership</option>
                                <option value="LLC">LLC</option>
                                <option value="Cooperative society">Cooperative society</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Focus Area</label>
                            <select class="form-control" v-model="form.focus_area">
                                <option selected value="">- Select -</option>
                                <option value="Farming">Farming</option>
                                <option value="Processing">Processing</option>
                                <option value="Aggregation and commodity exchange">
                                    Aggregation and commodity exchange</option>
                                <option value="Sales and exports">Sales and exports</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Value Chain</label>
                            <select class="form-control" v-model="form.value_chain">
                                <option value="" selected>- Select -</option>
                                <option value="Cocoa">Cocoa</option>
                                <option value="Spices">Spices</option>
                                <option value="Sesame">Sesame</option>
                                <option value="Shea butter">Shea butter</option>
                                <option value="Cashew">Cashew</option>
                                <option value="Cassava">Cassava</option>
                                <option value="Soybean">Soybean</option>
                                <option value="Rubber">Rubber</option>
                                <option value="Ginger">Ginger</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Company registered ?</label>
                            <select class="form-control" v-model="form.company_registered">
                                <option value="">Select</option>
                                <option value="1">Yes</option>
                                <option value="00">No</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Gender</label>
                            <select class="form-control" v-model="form.gender">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="rather not say">Rather Not Say</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Percentage score</label>
                            <select class="form-control" v-model="form.percentage_score">
                                <option value="">Select</option>
                                <option value="1">90% - 100%</option>
                                <option value="2">70% - 89%</option>
                                <option value="3">60% - 69%</option>
                                <option value="4">Less than 60%</option>
                            </select>
                        </div>

                        <div class="col-md-2 col-sm-12" style="margin-bottom: 10px;">
                            <label>Completed</label>
                            <select class="form-control" v-model="form.completed">
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div class="col-md-12 d-flex justify-content-center"
                             style="margin-bottom: 10px;">
                            <button type="submit" class="btn btn-info btn-md mr-2">
                                Search <i class="fa fa-search"></i></button>
                            <a :href="'/admin/export-diagnostic/users/export'">
                                <button type="button" class="btn btn-warning btn-md">
                                    Export <i class="fa fa-download"></i></button>
                            </a>
                        </div>

                    </div>
                </form>

                <div class="card-body">
                    <div v-if="searchActive && dataLoaded" class="card-block">
                        <h5 v-if="users.length > 0">
                            {{ total }} result(s) for
                            <span v-for="(value, index) in search_values" :key="index">
                                    <!--Get value from each object-->
                                    "{{ Object.values(value)[0] }}",</span>
                        </h5>
                        <h5 v-else>
                            {{ total }} result(s) for
                            <span v-for="(value, index) in search_values" :key="index">
                                    <!--Get value from each object-->
                                    "{{ Object.values(value)[0] }}",</span>
                        </h5>

                        <a class="btn btn-rounded btn-outline-success font-weight-bold mr-1"
                           @click.prevent="getUsers">
                            Back to Users</a>
                    </div>

                    <div class="card-block">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered small table-hover table-responsive-sm mb-0">
                                <thead>
                                <tr>
                                    <th class="border-top-0">User</th>
                                    <th class="border-top-0">Score/Status</th>
                                    <th class="border-top-0">Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                <template v-if="dataLoaded">
                                    <admin-export-diagnostic-users-item
                                        v-for="user in users.data"
                                        :key="user.id"
                                        :user="user"
                                    ></admin-export-diagnostic-users-item>
                                </template>

                                <tr v-else>
                                    <td colspan="3">
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
                            :data="users"
                            @pagination-change-page="getUsers"
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
                            :data="users"
                            @pagination-change-page="searchUsers"
    >
        <template #prev-nav>
            <span>&lt; Previous</span>
        </template>
        <template #next-nav>
            <span>Next &gt;</span>
        </template>
    </laravel-vue-pagination>

</template>

<script>
import AdminExportDiagnosticUsersItem from "./AdminPostDiagnosticUsersItem.vue";
import LaravelVuePagination from 'laravel-vue-pagination';
import {
    ContentLoader,
    FacebookLoader,
    CodeLoader,
    BulletListLoader,
    InstagramLoader,
    ListLoader,
} from 'vue-content-loader';

export default {
    components: {
        AdminExportDiagnosticUsersItem,
        LaravelVuePagination,
        ContentLoader,
        FacebookLoader,
        CodeLoader,
        BulletListLoader,
        InstagramLoader,
        ListLoader,
    },

    data(){
        return {
            form: {
              term: '',
              state_origin: '',
              state_residence: '',
              company_type: '',
              focus_area: '',
              value_chain: '',
              company_registered: '',
              gender: '',
              percentage_score: '',
              completed: '',
            },
            users: [],
            states: [],
            total: 0,
            dataLoaded: false,
            searchActive: false,
            search_values: []
        }
    },
    methods: {
        getUsers(page = 1){
            this.searchActive = false;
            this.dataLoaded = false;
            axios.get('/api/admin/export-diagnostic/users?page=' + page)
                .then((response) => {
                    if(response.data.success === true){
                        this.users = response.data.users;
                        this.total = response.data.total;
                    }else{
                        console.log(response.data.message);
                    }
                    this.dataLoaded = true;
                    console.log(this.users);
                }).catch((error) => {
                console.log(error);
            });
        },

        searchUsers(page = 1){
            // On submit, make search active, turn on div load and empty current logins array
            this.users = [];
            this.searchActive = true;
            this.dataLoaded = false;
            axios.post('/api/admin/export-diagnostic/users/search?page=' + page, this.form)
                .then((response) => {
                    console.log(this.form);
                    if(response.data.success === true){
                        this.users = response.data.users;
                        this.total = response.data.total;
                        this.search_values = response.data.search_values;
                    }else{
                        console.log(response.data.message);
                    }
                    this.dataLoaded = true;
                    console.log(this.users);
                }).catch((error) => {
                console.log(error);
            });
        },

        getStates(){
            axios.get('/api/states/nigeria')
                .then((response) => {
                    if(response.data.success === true){
                        this.states = response.data.states;
                    }
                    console.log(this.states);
                }).catch((error) => {
                console.log(error);
            });
        }
    },

    computed: {

    },

    mounted(){
        this.getUsers();
        this.getStates();
    }
}
</script>

<style scoped>

</style>
