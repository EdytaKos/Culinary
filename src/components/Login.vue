<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6" id="login">
        <router-link to="/" class="close">X</router-link>
        <h1>Logowanie</h1>
        <form @click.prevent="Submit()">
          <br />
          <div class="mb-3">
            <input
              type="email"
              class="form-control input_t"
              aria-describedby="emailHelp"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control input_t"
              placeholder="Hasło"
              v-model="haslo"
            />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" />
            <label class="form-check-label" for="exampleCheck1">
              Zapapamiętaj mnie</label
            >
          </div>
          <button type="submit" class="btn btn-success button">
            Zaloguj się
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      haslo: "",
    };
  },
  methods: {
    async Submit() {},
  },
};
</script>


<style scoped>
#login {
  background: rgb(37, 35, 35);
  color: white;
  padding: 35px;
  font-size: 20px;
}
.input_t {
  font-size: 18px;
  border-radius: 5px;
  margin-right: 20px;
  margin-right: 20px;
  height: 6vh;
  background-color: rgb(235, 235, 235);
}
.button {
  display: inline-block;
  font-size: 18px;
  padding: 10px 45px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  color: white;
}
.close {
  margin-right: 10px;
  color: white;
}
</style>