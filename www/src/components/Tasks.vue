<template>
    <div class="tasks">
        <ul>
            <li v-for="task in list" class="task-bg">
                <h3 class="task-body">{{task.body}}</h3>
                <select v-model="selected" @change="moveTask(task)">
                    <option disabled value="">Move to list:</option>
                    <option v-for="list in lists" v-if="task.parentId!=list._id" v-bind:value="list._id">{{list.title}}</option>
                </select>
                <button @click="deleteTask(task)">Delete this task</button>
                <div v-if="comments[task._id]">
                    <comments :list="comments[task._id]"></comments>
                </div>
                <form @submit.prevent="createComment(task)" :key="task._id">
                    <input type="text" name="body" v-model="comment.body" placeholder="Add a comment">
                    <button type="submit">Add Comment</button>
                </form>
            </li>
        </ul>
    </div>
</template>

<script>
    import comments from './Comments.vue'
    export default {
        name: 'Tasks',
        data() {
            return {
                comment: {
                    body: '',
                    parentId: ''
                },
                selected: ''
            }
        },
        components: {
            comments
        },
        mounted() {
            this.$store.dispatch('fetchComments')
        },
        props: {
            list: {
                type: Array,
                required: true
            },
            lists: {
                type: Array,
                required: true
            }

        },
        computed: {
            comments() {
                return this.$store.state.comments
            }
        },
        methods: {
            deleteTask(task) {
                this.$store.dispatch('deleteTask', task)
            },
            createComment(task) {
                this.comment.parentId = task._id
                this.$store.dispatch('createComment', this.comment)
                this.comment = { body: '', parentId: '' }
            },
            moveTask(task) {
                task.parentId = this.selected
                this.$store.dispatch('moveTask', task)
                this.selected = ''
            }
        }
    }

</script>

<style>
    .task-body {
        text-decoration: underline dashed
    }
    .task-bg{
        background-color: rgba(224, 211, 211, 0.5);
        margin: 1rem 1rem 1rem 1rem;
        padding: 1rem 1rem 1rem 1rem;
    }
</style>