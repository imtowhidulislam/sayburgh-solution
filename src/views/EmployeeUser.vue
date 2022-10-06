<template>
    <div>
    <div class="my-12">
        <v-row class="ml-4 mt-4">
          <v-col
            cols="12"
            sm="4"
            md="4"
          >
            <v-btn
            @click="toggle"
              label="primary"
              color="primary"
              hide-details
            >Toggle Form</v-btn>
           
          </v-col>
        </v-row>
        <div class="form">

        <form class="form_container" v-if="toggleForm">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :error-messages="emailErrors"
      label="Phone"
      required
      @input="$v.phoen.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    
   <!--  <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox> -->

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <!-- <v-btn @click="clear">
      clear
    </v-btn> -->
        </form>
    </div>

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
                v-for="em in Employee" :key="em.id"
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
    // import EmployeeForm from "@/components/EmployeeForm.vue";
    import Footer from '@/components/Footer.vue';
    import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        components : {
    Footer
},
        name: "EmployeeForm",
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(20) },
            email: { required, email },
            select: { required },
            /* checkbox: {
                checked (val) {
                return val
                },
            }, */
            },
        data() {
            return {
                Employee :[],
                updateEmployee : {
                    name : "",
                    email: "",
                    phone: ""
                },
                toggleForm : false,
                editEmp : null
            }
        },
        computed: {
        /*  checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        }, */
    /*    selectErrors () {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        }, */
        
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
        },
        methods: {
            submit() {
                 const newEmployee = {
                    name : this.name,
                    email : this.email,
                    phone : this.phone,
                    id: +new Date().getTime().toString()
                 }
                 const editEmployee = {
                    name : this.name,
                    email : this.email,
                    phone : this.phone,
                    id: this.editEmp
                 }

                 if(this.editEmp === null) {
                    this.Employee = [...this.Employee , newEmployee]
                    this.name = "",
                    this.email = "",
                    this.phone = ""
                }else{
                    this.Employee = editEmployee,
                    this.name = "",
                    this.email = "",
                    this.phone = ""
                    this.editEmp = null
                 }
            },
            remove(id) {
                const filterEmp = this.Employee.filter(em => {
                    return em.id !== id
                })
                this.Employee = filterEmp
                // localStorage.removeItem("EmployeeData")
                console.log(filterEmp);
            },
            edit(ids) {
                const [...b] = this.Employee.filter(fi => {
                    const a = fi.id === ids;
                    return a
                })
                const {name, id , email, phone} = b[0]
                this.updateEmployee.name = name
                this.updateEmployee.email = email 
                this.updateEmployee.phone = phone
            },
            toggle(){
                this.toggleForm = !this.toggleForm
            } 
        }
        , mounted(){
                if (localStorage.getItem('EmployeeData'))
                this.Employee = JSON.parse(localStorage.getItem('EmployeeData'));
        },

        watch:{
        Employee:{
            handler(){
            localStorage.setItem('EmployeeData', JSON.stringify(this.Employee))
            },
            deep:true
        }
    }

}
</script>
<style scoped>
    .form{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_container{
    max-width: 800px;
    background-color: #ffaacc;
    padding: 2rem;
    border-radius: .5rem;
  }
</style>