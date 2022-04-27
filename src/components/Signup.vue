<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6" id="signup">
        <router-link to="/" class="close">X</router-link>
        <h1>Rejestracja</h1>
        <form>
          <br />
          <div class="mb-3">
            <input
              type="text"
              class="form-control input_t"
              placeholder="Nazwa Użytkownika"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control input_t"
              placeholder="Email"
            />
          </div>
          <br />
          <div class="mb-3">
            <input
              type="password"
              class="form-control input_t"
              id="exampleInputPassword1"
              placeholder="Hasło"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control input_t"
              placeholder="Potwierdź hasło"
            />
          </div>
          <div class="mb-3 form-check">
            <label for="bday">Data urodzenia</label><br />
            <input type="date" name="bday" />
          </div>
          <br />
          <div class="mb-3 form-check">
            <div class="form-check">
              <p>Stopień zaawansowania w gotowaniu:</p>
              <input type="radio" name="clevel" value="Amator" />
              <label for="amator">Amator</label>
              <input type="radio" name="clevel" value="Przeciętniak" />
              <label for="przecietniak">Przeciętniak</label>
              <input type="radio" name="clevel" value="Kuchmistrz" />
              <label for="kuchmistrz">Kuchmistrz</label>
            </div>
          </div>
          <button type="submit" class="btn btn-success button">
            Zarejestruj się
          </button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style scoped>
#signup {
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
input[type="radio"] {
  margin-left: 15px;
  margin-right: 5px;
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