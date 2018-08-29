<template>
  <router-view></router-view>
</template>

<style>
  #keep main .container {
    height: 660px;
  }

  .text {
    font-weight: 400;
  }
  .add-note {
    padding: 2px 16px;
  }
  .add-note-btn {
    padding-left: 0;
  }
  @media screen and (min-width: 768px) {
    .notes-card {
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 16px;
    }  
  }
</style>