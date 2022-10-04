<template>
  <div class="d-flex items-center justify-center">
    <form class="form_container">
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
   
  
  </template>

  <script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
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
props : {
  // mutateData
},
    data: () => ({
      name: '',
      email: '',
      phone: '',
      // checkbox: false,

      Employee : []
    }),

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
      submit () {
        console.log('sumbit');
        const newEmployee = {
          name : this.name,
          email : this.email,
          phone : this.phone,
          id: new Date().getTime().toString()
        }
        this.Employee = [...this.Employee, newEmployee],
        this.$emit('MyEmployee', newEmployee)
        this.name = "",
        this.email = "",
        this.phone = ""
      },
      
    },
   /*  mounted(){
      console.log('App Mounted');
        if (localStorage.getItem('EmployeeData'))
            this.Employee = JSON.parse(localStorage.getItem('EmployeeData'));
    },
   */
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
  .form_container{
    /* max-width: 800px; */
    background-color: #ffaacc;
    padding: 2rem;
    border-radius: .5rem;
  }
  </style>