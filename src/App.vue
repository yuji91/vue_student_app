<template>
  <div>
    <h2>List of tasks</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done"
          v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="new task">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTaskName: ''
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  methods: {
    addTask () {
      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      this.newTaskName = ''
    },
    toggleTaskStatus (task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
