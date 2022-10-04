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
        <AdminForm v-if="toggleForm" />

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
    export default {
        name : "Admin",
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
        methods:{
            toggle() {
                this.toggleForm = !this.toggleForm
            }
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
