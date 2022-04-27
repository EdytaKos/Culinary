<template>
  <div id="main">
    <router-link id="back" to="/" class="close">Home </router-link>

    <h3 id="wybierz">Wybierz</h3>
    <ul id="alllinks">
      <li>
        <a class="linki" href="#"
          ><router-link to="/vid" target="-blank">Zrób zdjęcie</router-link></a
        >
      </li>
      <li><a class="linki" href="#">Dysk Google</a></li>
      <li><a class="linki" href="#">To urządzenie</a></li>
    </ul>
    <Button />
  </div>
</template>

<script>
import Button from "../Button";
export default {
  name: "Photo",
  components: {
    Button,
  },
};
</script>

<style>
#main {
  background: rgb(37, 35, 35);
  color: white;
  padding: 30px;
  border-radius: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  margin-top: 30px;
}
#alllinks {
  list-style-type: none;
  text-align: center;
}

#wybierz {
  text-align: center;
  padding-left: 3vh;
  letter-spacing: 2px;
}

.linki {
  text-decoration: none;
  color: white;
}

.linki:hover {
  color: green;
}

#back {
  background: rgb(37, 35, 35);
  color: white;
  text-decoration: none;
  color: green;
  text-align: right;
}
</style>