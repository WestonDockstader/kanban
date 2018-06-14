<template>
  <div id="app" class="work">
    <h1 class="title">KANBAN VUE</h1>
  
    <router-view/>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: { 
    }
  }
</script>

<style>
  body {
    font-family: 'Teko', cursive;
    background-image: url("../alex-iby-387646-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
    color: rgb(240, 255, 107);
  }
  
  .title{
    font-size: 4rem;
    background: lightgray;
    display: inline-block;
    height: 4rem;
    width: 15rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  .title-img {
    transform: rotate(180deg);
    height: 2rem;
  }

  .title-font {
    font-family: 'Verdana';
    height: 3rem;
  }
</style>