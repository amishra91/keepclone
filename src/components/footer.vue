<template>
  <v-layout row wrap class="main-footer">
    <v-flex xs12>
      <footer class="main-footer">
        Made by <a href="https://www.linkedin.com/in/abhishek-mishra-875aa159/" target="_blank" class="linkedin-link">Abhishek Mishra</a>
        <span>
          <a class="github-button" href="https://github.com/amishra91" aria-label="Follow @amishra91 on GitHub">Follow @amishra91</a>  
        </span>
        <span>
          <a class="github-button" href="https://github.com/amishra91/keepclone" data-icon="octicon-star" aria-label="Star amishra91/keepclone on GitHub">Star</a>
        </span>
      </footer>    
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return{}
    }
  }
</script>

<style>
.main-footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 12px 0 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
  width: 100%;
  z-index: 99;
}
.linkedin-link {
  color: #fff;
  font-weight: bold;
  color: #1976d2;
}
</style>