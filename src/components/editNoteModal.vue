<template>
  <v-dialog width="350" persistent v-model="editNote">
    <v-btn flat color="green" slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit note</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field label="Title" v-model="editedTitle"></v-text-field>
              <v-textarea box label="Note" v-model="editedDescription"></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat color="red" v-on:click="editNote = false">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="green" v-on:click="saveChanges">Save</v-btn>
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
        editNote: false,
        editedTitle: this.note.title,
        editedDescription: this.note.description
      }
    },
    methods: {
      saveChanges () {
        if(this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
          return
        }
        this.editNote = false
        this.$store.dispatch('updateNoteData', {
          id: this.note.id,
          description: this.editedDescription,
          title: this.editedTitle
        })
      }
    }
  }
</script>