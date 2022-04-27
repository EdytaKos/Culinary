<template>
  <div id="rozrywka">
    <Rozrywka />
  </div>
</template>

<script>
import Rozrywka from "../components/Rozrywka/Rozrywka";
export default {
  name: "Rozrywka",
  components: {
    Rozrywka,
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