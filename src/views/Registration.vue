<template>
  <div id="signin">
    <br />
    <br />
    <Signup />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Signup from "../components/Signup";
export default {
  name: "Registration ",
  components: {
    Signup,
  },
};
</script>

<style>
#signin {
  text-align: center;
  margin-top: 60px;
}
</style>