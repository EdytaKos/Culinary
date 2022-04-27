<template>
  <div>
    <a href="https://www.pinterest.com/"> pinterest </a>
    <img :src="logo" />
  </div>
</template>

<script>
export default {
  name: "Icons",
  data: function () {
    return {
      logo: "./assets/facebook.png",
    };
  },
};
</script>

<style scoped>
</style>