<template>
  <v-content>
    <v-container fluid fill-height class="grey lighten-4" v-if="!notes">
      <v-layout justify-center align-center>
        <v-icon>lightbulb</v-icon>
        <h3>Notes you add appear here</h3>
      </v-layout>
    </v-container>

    <v-container fluid full-height class="grey lighten-4">
      <v-layout justify-center align-center mb-5>
        <v-flex md6>
          <v-card>
            <v-form class="add-note" @submit.prevent="onCreateNote">
              <v-text-field v-model="title" label="Title"></v-text-field>
              <v-textarea box v-model="description" label="Note"></v-textarea>
              <v-card-actions>
                <v-btn type="submit" :disabled="!formIsValid" :loading="loading" class="add-note-btn primary">Create note
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap v-if="loading">
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
        </v-flex>
      </v-layout>
        <v-layout row wrap v-else>
        <v-flex xs12 sm6 md3 v-for="(note) in notes" :key="note.id" class="notes-card">
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{note.title}}</h3>
                <p>{{note.description}}</p>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="red">Delete</v-btn>
              <v-spacer></v-spacer>
              <edit-note :note="note"></edit-note>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: ''
      }
    },
    computed: {
      notes () {
        return this.$store.getters.loadedNotes
      },
      formIsValid () {
        return this.title !== '' && this.description !== ''
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onCreateNote () {
        if(!this.formIsValid) {
          return
        }
        const noteData = {
          title: this.title,
          description: this.description
        }
        this.$store.dispatch('createNote', noteData)
      }
    }
  }
</script>