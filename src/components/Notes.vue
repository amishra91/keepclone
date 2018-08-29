<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark></v-divider>
          <v-list-tile v-else :key="i">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Google&nbsp;<span class="text">Keep</span></span>
      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4" v-if="!notes">
        <v-layout justify-center align-center>
          <v-icon>lightbulb</v-icon>
          <h3>Notes you add appear here</h3>
        </v-layout>
      </v-container>

      <v-container fluid class="grey lighten-4">
        <v-layout justify-center align-center>
          <v-flex md6>
            <v-card>
              <v-form class="add-note" ref="addNoteRef" lazy-validation>
                <v-text-field v-model="newNote.title" :rules="inputRule" label="Title" required></v-text-field>
                <v-textarea box v-model="newNote.desc" :rules="inputRule" label="Description" required></v-textarea>
                <v-card-actions>
                  <v-btn flat color="green" v-on:click="addNote" class="add-note-btn">Add to notes</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid full-height class="grey lighten-4">
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 v-for="(note, i) in notes" class="notes-card">
            <v-card :key="i">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{note.title}}</h3>
                  <p>{{note.desc}}</p>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="red" v-on:click="deleteNote(note)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

  <script>
/* eslint-disable */
  export default {
    data(){
      return {
        drawer: null,
        newNote: {},
        notes: [],
        items: [
          { 
            icon: 'lightbulb_outline',
            text: 'Notes'
          }
        ],
        inputRule: [
          v => !!v || 'This field is required'
        ]
      }
    },
    methods: {
      addNote(){
        if(this.$refs.addNoteRef.validate()) {
          this.notes.push({
            title: this.newNote.title,
            desc: this.newNote.desc
          });  
        }
      },
      deleteNote(note){
        this.notes.splice(this.notes.indexOf(note), 1);
      }
    }
  }
</script>