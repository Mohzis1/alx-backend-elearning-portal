<template>
    <tr v-if="!deleted">
        <td width="50%" class="">
            <strong>Name:</strong> {{ user.user.first_name +' '+ user.user.surname }}<br>
            <strong>Email:</strong> {{ user.user.email }}<br>
            <strong>Mobile:</strong> {{ user.user.mobile }}<br>
            <strong>DOB:</strong> {{ user.user.dob }}<br>
            <strong>Business:</strong> {{ user.user.business }}<br>
            <strong>Location:</strong> {{ user.user.location }}<br>
            <strong>Company Registered:</strong> <span v-if="user.user.legal === 1">Registered</span>
            <span v-else>Not registered</span><br>
            <span v-if="user.user.state_origin">
                <strong>State Origin:</strong> {{ user.user.state_origin.name }}<br>
            </span>
            <span v-if="user.user.state_residence">
                <strong>Business Location:</strong> {{ user.user.location }}<br>
            </span>
            <strong>Last Login: </strong> {{ fullDate(user.last_login) }}<br>
            <strong>Last Active: </strong> {{ fullDate(user.updated_at) }}<br>
            <strong>Date joined: </strong> {{ fullDate(user.created_at) }}<br>
        </td>

        <td width="30%" class="">
            <strong>Status: </strong>
            <span v-if="user.completed === 1">Completed</span>
            <span v-else>On-going</span><br>
            <strong>Score: </strong>{{ user.score }}<br>
            <strong>Percent: </strong>{{ user.percent }}%<br>
        </td>

        <td width="20%">
            <button @click.prevent="deleteDiagnosticUser(user.id)"
                    class="btn btn-danger btn-sm mr-1">
                <i class="fa fa-trash"></i> Delete</button>
            <a :href="'/admin/export-diagnostic/'+user.id+'/user'">
                <button class="btn btn-info btn-sm">
                    <i class="fa fa-user"></i> Responses</button>
            </a>
        </td>
    </tr>
</template>

<script>
import moment from 'moment';
export default {
    props: {
        user: Object,
    },
    data(){
        return {
            deleted: false,
        }
    },
    methods: {
        fullDate (value){
            return moment(value).format('MMMM Do YYYY, h:mm:ss a');
        },

        deleteDiagnosticUser: function(id){
            // Install sweetalert2 to use
            Swal.fire({
                html: "<h3>Delete <span class='text-success'>"+this.user.user.surname+" "+this.user.user.first_name+"'s</span> records</h3>",
                text: "<p>This will delete their diagnostic records.</p>",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    // Loading
                    Swal.fire({
                        title: 'Please Wait !',
                        html: 'Deleting',// add html attribute if you want or remove
                        allowOutsideClick: false,
                        showCancelButton: false,
                        showConfirmButton: false,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    });
                    axios.delete('/api/admin/export-diagnostic/user/'+id+'/delete')
                        .then((response) => {
                            if(response.data.success === true){
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 8000,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', Swal.stopTimer)
                                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    }
                                });
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Deleted'
                                });
                                this.deleted = true;
                            }
                        }).catch((error) => {
                            console.log(error);
                        });
                } else if (result.isDenied) {
                    return false;
                }
            });
        },

    },
    computed: {

    },
    mounted(){

    }
}
</script>

<style scoped>

</style>
