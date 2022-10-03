<template>
    <div>
        <h2>This is Employee Page</h2>
        <EmployeeForm @MyEmployee="getEmployee($data)"/>

        <v-container xm12 sm6 md4 lg3 class="my-12" v-for="em in ourEmployee" :key="em.id">
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-container class="d-flex justify-center">

                    <v-avatar width="100" height="100">
                        
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
                    </v-img>
                </v-avatar>
                </v-container>

                <v-card-subtitle class="pb-0 text-center">
                {{em.name}}
                </v-card-subtitle>

                <v-card-text class="text--primary text-center">
                <div>{{em.email}}</div>

                <div>{{em.phone}}</div>
                </v-card-text>

                <v-card-actions class="d-flex justify-center">
                    <v-btn
                        color="orange"
                        text
                    >
                        Edit
                        <v-icon>mdi-lead-pencil</v-icon>
                    </v-btn>

                    <v-btn
                        color="orange"
                        text
                    >
                        delete
                        <v-icon>mdi-archive-cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>

    </div>
</template>
<!-- <div v-for="em in Employee" :key="em.phone">
    <h2>{{em.name}}</h2>
    <h2>{{em.email}}</h2>
    <h2>{{em.phone}}</h2>
  </div> -->
<script>
    import EmployeeForm from "@/components/EmployeeForm.vue";
    export default {
        components : {
            EmployeeForm
        },
        data() {
            return {
                ourEmployee :[],
                // console.log(ourEmployee)
            }
        },
        methods: {
            getEmployee(data) {
                this.ourEmployee = [...this.ourEmployee, data]
            }
        }
    }
</script>
<style scoped>
    
</style>