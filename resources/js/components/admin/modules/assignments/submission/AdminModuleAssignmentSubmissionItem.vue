<script setup>
import moment from 'moment';
import {ref} from 'vue';

const props = defineProps([
    'assignment',
]);

const isOpen = ref(false);
const assignment = ref(props.assignment);

const toggleMore = () => {
    isOpen.value === true ? isOpen.value = false : isOpen.value = true;
}

const fullDate = (value) => {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
}
</script>

<template>
    <tr>
        <td width="40%">
            <strong>Name:</strong> {{ assignment.user.name }}<br>
            <strong>Email:</strong> {{ assignment.user.email }}<br>
            <strong>Mobile:</strong> {{ assignment.user.mobile }}<br>
            <strong>Business:</strong> {{ assignment.user.business_name }}<br>
            <strong>Country:</strong> {{ assignment.user.country }}<br>
            <strong>Country Residence:</strong> {{ assignment.user.country_residence }}<br>
            <strong>Date of Birth:</strong> {{ assignment.user.date_of_birth }}<br>
            <strong>Gender:</strong> {{ assignment.user.gender }}<br>
            <strong>Education:</strong> {{ assignment.user.education }}<br>
            <div><img width="70" :src="assignment.user.image"/></div>
        </td>

        <td width="40%">
            <strong>Assignments:</strong><br>
            <a v-if="assignment.document_one" class="font-weight-500 mr-1"
               :href="assignment.document_one" :download="assignment.document_one">
                Document one
            </a>
            <a v-if="assignment.document_two" class="font-weight-500 mr-1"
               :href="assignment.document_two" :download="assignment.document_two">
                Document two
            </a>
            <a v-if="assignment.document_three" class="font-weight-500"
               :href="assignment.document_three" :download="assignment.document_two">
                Document three
            </a>
        </td>

        <td width="20%">
            <strong>Date Submitted:</strong> {{ assignment.updated_at }}<br>
        </td>
    </tr>

</template>

<style scoped>

</style>
