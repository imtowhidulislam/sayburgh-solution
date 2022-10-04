<template>
    <v-app-bar 
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <v-icon min-width="100">
            mdi-webhook
          </v-icon>
      </div>

      <v-spacer></v-spacer>
      
        <v-btn class="primary darken-3 mr-4" v-for="link in links" :key="link.text" router :to="link.route">
          <span class="mr-2">{{link.text}}</span>
          <v-icon>{{link.icon}}</v-icon>
        </v-btn>
      
    </v-app-bar>
</template>

<script>
  export default {
    data(){
      return {
        links: [
          // {icon: 'mdi-employee', text: "emp form", route: ""},
          // {icon: 'mdi-account-lock-open', text: "admin form", route: ""},
          {icon: 'mdi-account', text: "Employee", route: "/"},
          {icon: 'mdi-account-lock-open', text: "Admin", route: "/admin"}
        ]
      }
    }
  }
</script>
<style scoped>
    
</style>