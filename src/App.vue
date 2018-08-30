<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="text">Keep</span></span>
      <v-spacer></v-spacer>
    </v-toolbar>

    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    data(){
      return{
        drawer: null,
        items: [
          { 
            icon: 'lightbulb_outline',
            text: 'Notes'
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    background: #f5f5f5;
  }
  #keep main .container {
    height: 660px;
  }

  .text {
    font-weight: 400;
  }
  .add-note {
    padding: 2px 16px;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 768px) {
    .notes-card {
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 16px;
    }  
  }
</style>