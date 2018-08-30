<template>
  <v-content>
    <v-container fluid full-height class="grey lighten-4">
      <v-layout row wrap>
        <v-flex xs12 sm6 md12 class="notes-card">
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{note.title}}</h3>
                <p>{{note.description}}</p>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      note () {
        return this.$store.getters.loadedNote(this.id)
      }
    }
  }
</script>