<template>
  <div class="main">
    <Topdf />
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="secondtodo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>


<script>
import Topdf from "./Topdf";
export default {
  name: "TodoApp",

  data() {
    return {
      newTodo: "",
      before: "",
      todos: [
        {
          id: 1,
          text: "Lista zakupów",
          completed: false,
        },
      ],
    };
  },
  components: {
    Topdf,
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>

<style scoped>
.main {
  border: 1px solid white;
  background: #cbf2bd;
  padding: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.completed {
  text-decoration: line-through;
}
</style>