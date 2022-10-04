<template>
    <div>
    <div class="my-12">
        <EmployeeForm @MyEmployee="getEmployee($data)" :mutateData="updateEmployee"/>
        <h2 class="text-center mt-8">Our Employees</h2>
        <v-container grid-list-md
>
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
    <Footer />
</div>

</template>

<script>
    import EmployeeForm from "@/components/EmployeeForm.vue";
    import Footer from '@/components/Footer.vue';
    export default {
        components : {
    EmployeeForm,
    Footer
},
        data() {
            return {
                ourEmployee :[],
                updateEmployee : {
                    name : "",
                    email: "",
                    phone: ""
                }
            }
        },
        methods: {
            getEmployee(data) {
                this.ourEmployee = [...this.ourEmployee, data]
                console.log(ourEmployee);
            },
            remove(id) {
                const filterEmp = this.ourEmployee.filter(em => {
                    return em.id !== id
                })
                this.ourEmployee = filterEmp
                // localStorage.removeItem("EmployeeData")
                console.log(filterEmp);
            },
            edit(ids) {
                const [...b] = this.ourEmployee.filter(fi => {
                    const a = fi.id === ids;
                    return a
                })
                const {name, id , email, phone} = b[0]
                this.updateEmployee.name = name
                this.updateEmployee.email = email 
                this.updateEmployee.phone = phone
            }
        }
        , mounted(){
                if (localStorage.getItem('EmployeeData'))
                this.ourEmployee = JSON.parse(localStorage.getItem('EmployeeData'));
        }
        
    }
</script>
<style scoped>
    
</style>