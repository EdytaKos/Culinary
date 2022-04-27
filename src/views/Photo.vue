<template>
  <div id="photo">
    <Photo />
  </div>
</template>

<script>
import Photo from "../components/Photo/Photo";
export default {
  name: "Photo",
  components: {
    Photo,
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