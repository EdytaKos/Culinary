<template>
  <div id="signin">
    <br />
    <br />
    <Login />
  </div>
</template>

<script>
import Login from "../components/Logowanie/Login";
export default {
  name: "SignIn",
  components: {
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