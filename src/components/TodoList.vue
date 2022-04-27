<template >
  <div id="allsearch">
    <h1 id="h1recipes">Wyszukaj przepisu</h1>
    <p id="instruction">
      Wpisz nazwę składnika, z którym przepisów chcesz wyszukać, a następnie
      wybierz klawisz ENTER.
    </p>
    <div id="searching">
      <form
        action="/recipes"
        method="post"
        data-test="form"
        @submit.prevent="addTodo"
      >
        <input
          id="wyszukiwanie"
          type="text"
          class="todo-input"
          placeholder="Wpisz nazwę składnika"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />

        <router-link to="searchingpage"
          ><button
            class="btn btn-outline-success mb-4"
            id="sbutton"
            type="submit"
          >
            SZUKAJ
          </button></router-link
        >
      </form>
    </div>
    <div
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="todo-item"
      data-test="todo"
    >
      <div data-test="todo" class="todo-item-left">
        <div
          v-if="!todo.editing"
          @dblclick="editTodo(todo)"
          class="todo-item-label"
        >
          {{ todo.title }}
        </div>
        <input
          v-else
          class="todo-item-edit"
          type="text"
          v-model="todo.title"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
          v-focus
        />
      </div>

      <div class="removeitem" @click="removeTodo(index)">&times;</div>
    </div>
    <p id="secondinstruction">
      Aby edytować kliknij dwa razy po czym naciśnij ENTER.
    </p>
    <router-link id="x" to="/" class="close">Home </router-link>
  </div>
</template>

<script>
import AfterSearching from "./AfterSearching/AfterSearching";
export default {
  name: "todo-list",
  components: {
    AfterSearching,
  },
  data() {
    return {
      newTodo: "",
      beforeBeforeCache: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "jajka",
          completed: false,
          editing: false,
        },

        {
          id: 2,
          title: "mleko",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    editTodo(todo) {
      todo.editing = true;
      this.beforeBeforeCache = todo.title;
    },

    cancelEdit(todo) {
      todo.title = this.beforeBeforeCache;
      todo.editing = false;
    },

    doneEdit(todo) {
      if (todo.title.trim().length === 0) {
        todo.title = this.beforeBeforeCache;
      }
      todo.editing = false;
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
#allsearch {
  border: 1px solid white;
  background: #cbf2bd;
  padding: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

#h1recipes {
  text-align: center;
  padding-left: 15px;
}

#searching {
  display: inline-block;
  width: 70%;
}

#instruction,
#secondinstruction {
  text-align: center;
  font-size: 14px;
}

#sbutton {
  align-items: center;
  text-align: center;
  padding: 3.5px;
  margin-left: 5px;
  margin-top: 20px;
  height: 35px;
}
.todo-input {
  align-item: center;
  padding: 10px, 18px;
  font-size: 18px;
  margin-bottom: 16px;
  width: 70%;
}

.todo-input:focus {
  outline: 1px solid greenyellow;
}

.todo-item {
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
}

.removeitem {
  cursor: pointer;
  margin-left: 12px;
}
.removeitem:hover {
  color: black;
}

.todo-item-left {
  display: flex;
  align-items: center;
}

.todo-item-label {
  padding: 10px;
  margin-left: 12px;
  border: 1px solid white;
}

.todo-item-edit {
  padding: 10px;
  margin-left: 12px;
  border: 1px solid #ccc;
  width: 100%;
}
.todo-item-edit:focus {
  outline: 1px solid greenyellow;
}

#x,
#comeback {
  text-decoration: none;
  color: green;
  background: #cbf2bd;
  padding: 10px;
  margin-bottom: 30px;
}
</style>
