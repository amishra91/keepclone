<template>
  <v-dialog width="350" persistent v-model="deleteNote">
    <v-btn flat color="red" slot="activator">Delete</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Delete note</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <h3>Are you sure?</h3>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat color="red" v-on:click="deleteThisNote">Yes</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="green" v-on:click="deleteNote = false">No</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['note'],
    data () {
      return {
        deleteNote: false
      }
    },
    methods: {
      deleteThisNote () {
        this.deleteNote = false
        id: this.note.id
        this.$store.dispatch('deleteNote', {
          id: this.note.id
        })
      }
    }
  }
</script>