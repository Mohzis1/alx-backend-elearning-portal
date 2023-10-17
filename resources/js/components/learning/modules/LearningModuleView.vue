<template>
    <div class="row mt-5">
        <div class="col-12">
            <p><span class="text-light-grey">Dashboard</span> / <span class="text-dark">Modules</span></p>
            <h2 class="text-orange float-left">Modules</h2>
        </div>

        <div class="col-12 bg-light-green p-4 border-radius-8 mb-4">
            <p class="text-inter"><strong>NOTE:</strong> Each module will be unlocked every week</p>
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
import LearningModuleItem from "./LearningModuleItem.vue";
import RouteService from "../../../services/route-service";
import {
    ContentLoader,
} from 'vue-content-loader';

export default {
    components: {
        LearningModuleItem,
        ContentLoader,
    },

    setup(){
        const modules = ref([]);
        const min_module_sort = ref(0);
        const contentLoaded = ref(false);

        const getModules = async () => {
            // Get token from local storage
            let token = localStorage.getItem('brace-learning-tk');
            axios.get('/api/learning/modules', {
                // Make "true" if not using external API
                withCredentials: true,
                headers: {
                    "Authorization" : "Bearer " + token,
                    'Accept' : 'application/json',
                },
            }).then((response) => {
                if (response.data.success) {
                    modules.value = response.data.modules;
                    min_module_sort.value = response.data.min_module_sort;
                    contentLoaded.value = true;
                    // console.log(response.data.modules);
                    // console.log(response.data.min_module_sort);
                }else{
                    console.log(response.data);
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        onBeforeMount(() => {
            RouteService.completedDiagnosticTool(localStorage.getItem('brace-learning-tk'));
            getModules();
        });

        return {
            modules,
            min_module_sort,
            contentLoaded,

            getModules,
        }
    }
}
</script>

<style scoped>

</style>
