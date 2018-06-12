<template>
  <div class="comments">
    <ol>
      <li v-for="comment in list" class="comm-bg">
        <h5>{{comment.body}}</h5>
        <button @click="deleteComment(comment)">Delete Comment</button>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'Tasks',
    data() {
      return {
      }
    },
    props: {
      list: {
        type: Array,
        required: true
      }
    },
    computed: {},
    methods: {
      deleteComment(comment) {
        this.$store.dispatch('deleteComment', comment)
      }
    }
  }
</script>

<style>
  .comm-bg{
    background-color:rgba(100,100,100,0.5);
    border: groove;
    margin: 0.5rem;
    padding: 0.5rem;
  }
</style>