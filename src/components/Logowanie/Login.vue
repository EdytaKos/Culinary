<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6" id="login">
        <router-link to="/" class="close">X</router-link>
        <h1>Logowanie</h1>
        <form>
          <br />
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Hasło"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Zapapamiętaj mnie</label
            >
          </div>
          <button type="submit" class="btn btn-primary btn btn-warning button">
            Zaloguj się
          </button>
        </form>
      </div>

      <div class="col-md-3"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
};
</script>


<style scoped>
#login {
  background: rgb(37, 35, 35);
  color: white;
  padding: 30px;
  border-radius: 10px;
}
.button {
  display: inline-block;
  font-size: 18px;
  padding: 10px 45px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background: orange;
}
.close {
  margin-right: 10px;
  color: white;
}
</style>