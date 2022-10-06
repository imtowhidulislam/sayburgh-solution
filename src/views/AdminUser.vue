<template>
    <div class="parents">
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
        <div class="flex_card mt-8">
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

            <v-container class="my-12" >
                <v-layout>
                    <v-card  class="flex_card1" width="100%">
                        <v-list>
                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                            >
                                <v-list-item-icon>
                                <v-icon
                                    v-if="item.icon"
                                    color="blue"
                                >
                                    mdi-star
                                </v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item-content>
                                
                                <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-layout>
            </v-container>
        </div>
        <Footer app class="footer"/>
    </div>
</template>
<script>
    import Footer from '@/components/Footer.vue'
    import AdminForm from '@/components/AdminForm.vue'
    import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        name : "Admin",
        // name: "EmployeeForm",
        mixins: [validationMixin],
    
        components: { Footer, AdminForm },
        data() {
            return {
                items: [
                    { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                    { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                    { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                    { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                    { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                ],
                toggleForm : false
            }
        },
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
        methods:{
            toggle() {
                this.toggleForm = !this.toggleForm
            },
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
        }
    }
</script>
<style scoped>
    .flex_card{
        /* display: flex; */
        /* flex-direction: column; */
        /* height: 80vh; */
        /* border: 2px solid blue; */
        
    }
    .parents{
        /* position: relative; */
    }
    .footer{
        position: absolute;
        left: 0%;
        bottom: 0%;
        width: 100%;
    }
</style>
