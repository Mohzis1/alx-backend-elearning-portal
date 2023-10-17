<template>

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>{{ user.user.first_name+' '+user.user.surname }}</h5>
                </div>
                <div class="card-body">
                    <div class="card-block">
                       <div class="row">
                           <template v-if="user.export_diagnostic_answers.length > 0">
                               <div class="col-md-3 border border-success rounded m-2"
                                    v-for="(answer, index) in user.export_diagnostic_answers">
                                <p class="font-weight-bold"
                                   v-if="answer.export_diagnostic_question">
                                    {{ answer.export_diagnostic_question.question }}</p>
                                <p>{{ answer.answer }}</p>
                               </div>
                           </template>
                           <template v-else>
                               <div class="col-md-12 text-center font-weight-bold">No records</div>
                           </template>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import {
    ContentLoader,
    FacebookLoader,
} from 'vue-content-loader';

export default {
    components: {
        ContentLoader,
        FacebookLoader,
    },
    props: {
        user: Object
    },
    data(){
        return {
            dataLoaded: true
        }
    },
    methods: {

    },

    computed: {

    },

    mounted(){
        console.log(this.user);
    }
}
</script>

<style scoped>

</style>
