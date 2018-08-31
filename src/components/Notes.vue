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
            <v-form class="add-note" v-on:submit.prevent="onCreateNote">
              <img :src="image" class="resp-img">
              <v-text-field v-model="title" label="Title"></v-text-field>
              <v-textarea box v-model="description" label="Note"></v-textarea>
              
              <input type="file" style="display: none;" ref="imageInput" accept="image/*" v-on:change="imagePicked">
              <v-card-actions>
                <v-btn raised class="primary" v-on:click="addImage">Add Image</v-btn>
                <v-spacer></v-spacer>
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
        <v-flex xs12 sm6 md4 v-for="(note) in notes" :key="note.id" class="notes-card mb-5">
          <v-card>
            <img :src="note.image" class="resp-img">
            <v-card-title primary-title>
              <div>
                <h3 class="mb-0">{{note.title}}</h3>
                <p class="note-desc">{{note.description}}</p>
              </div>
            </v-card-title>

            <v-card-actions>
              <delete-note :note="note"></delete-note>
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
        description: '',
        image: ''
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
          description: this.description,
          image: this.image
        }
        this.$store.dispatch('createNote', noteData)
        this.title = ''
        this.description = '',
        this.image = ''
      },
      addImage () {
        this.$refs.imageInput.click()
      },
      imagePicked (event) {
        const file = event.target.files
        let fileName = file[0].name

        if(fileName.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.image = fileReader.result
        })
        fileReader.readAsDataURL(file[0])
        this.image = file[0]
      }
    }
  }
</script>