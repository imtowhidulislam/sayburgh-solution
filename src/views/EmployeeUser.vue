<template>
    <div>
        <h2>This is Employee Page</h2>
        <EmployeeForm @MyEmployee="getEmployee($data)"/>

        <v-container class="my-12" >
            <v-layout
                row
                wrap
                clas
                class="d-flex items-center justify-center"
            >
                <v-flex
                xs12 sm10 md6 lg4
                v-for="em in ourEmployee" :key="em.id"
                class=""
                >
                    <v-card
                    max-width="550"
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
                                @click="edit(em.id)"
                            >
                                Edit
                                <v-icon>mdi-lead-pencil</v-icon>
                            </v-btn>

                            <v-btn
                                color="orange"
                                text
                                @click="remove(em.id)"
                            >
                                delete
                                <v-icon>mdi-archive-cancel</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
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
                console.log(ourEmployee);
            },
            remove(id) {
                console.log(id);
                const filterEmp = this.ourEmployee.filter(em => {
                    return em.id !== id
                })
                this.ourEmployee = filterEmp
                localStorage.removeItem("EmployeeData")
                console.log(filterEmp);
            },
            edit(id) {
                console.log(id);
            }
        }
        , mounted(){
                console.log('App Mounted');
                if (localStorage.getItem('EmployeeData'))
                this.ourEmployee = JSON.parse(localStorage.getItem('EmployeeData'));
        }
        
    }
</script>
<style scoped>
    
</style>