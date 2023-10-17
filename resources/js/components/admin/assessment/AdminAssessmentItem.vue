<script setup>
    import moment from 'moment';
    import {ref} from 'vue';

    const props = defineProps([
        'user',
    ]);

    const isOpen = ref(false);
    const user = ref(props.user);

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
            <strong>Name:</strong> {{ user.name }}<br>
            <strong>Email:</strong> {{ user.email }}<br>
            <strong>Mobile:</strong> {{ user.mobile }}<br>
            <strong>Business:</strong> {{ user.business_name }}<br>
            <strong>Country:</strong> {{ user.country }}<br>
            <strong>Country Residence:</strong> {{ user.country_residence }}<br>
            <strong>Date of Birth:</strong> {{ user.date_of_birth }}<br>
            <strong>Gender:</strong> {{ user.gender }}<br>
            <strong>Education:</strong> {{ user.education }}<br>
            <div><img width="70" :src="user.image"/></div>
        </td>

        <td width="40%">
            <strong>Completed:</strong> {{ user.overall_assessments }}<br><br>
            <div v-for="(assessment, index) in user.module_assessments" :key="assessment.id">
                <div class="mb-2">
                    <strong>({{ index + 1 }}) Module:</strong> {{ assessment.module_title }}<br>
                    <strong>Score:</strong> {{ assessment.score }}<br>
                    <strong>Percent:</strong> {{ assessment.percent }}<br>
                </div>
            </div>
        </td>

        <td width="20%">
            <strong>Last Active:</strong> {{ user.last_login }}<br><br>
        </td>
    </tr>

</template>

<style scoped>

</style>
