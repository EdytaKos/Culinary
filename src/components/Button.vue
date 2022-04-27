<template>
  <button @click="onClick()" class="add_b">Dodaj</button>
</template>

<script>
export default {
  name: "B_Add",
  methods: {
    onClick() {},
  },
};
</script>

<style scoped>
.add_b {
  display: inline-block;
  background: rgb(206, 137, 47);
  color: rgba(255, 255, 255, 0.925);
  font-size: 18px;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
}
</style>