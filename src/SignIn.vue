<template>
  <div id="signin">
    <Head_login title="Witaj z powrotem!" />
    <br />
    <br />
    <Login />
  </div>
</template>

<script>
import Head_login from "./components/Logowanie/Head_login";
import Login from "./components/Logowanie/Login";

export default {
  name: "SignIn",
  components: {
    Head_login,
    Login,
  },
};
</script>

<style>
#app {
  font-family: Helvetica;
  text-align: center;
  margin-top: 60px;
}
</style>