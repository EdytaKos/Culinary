<template>
  <div class="container">
    <div class="row">
      <div id="options" class="col-md-12 offset-sm-4">
        <router-link id="x" to="/" class="close">Zamknij </router-link>
        <router-link id="comeback" to="wyszukiwanie">Wróć</router-link>
      </div>

      <div class="col-md-12"><h3>Znalezione przepisy</h3></div>
      <p>
        Wybierz <i>Zamknij</i> aby powrócić do strony głownej lub
        <i>Wróć</i> aby zmienić składniki wyszukiwania.
      </p>
    </div>
    <div class="main">
      <div class="row">
        <!--
            <div class="col-md-6">
              <router-link id="x" to="/" class="close">Zamknij</router-link>
            </div>  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AfterSearching",
};
</script>


<style scoped>
.container {
  border: 1px solid white;
  background: #cbf2bd;
  padding: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.main {
  display: grid;
  grid-template-columns: repeat(4, minmax);
  gap: 10px;
  margin-top: 20px;
}
#options {
  margin-bottom: 20px;
}
#x,
#comeback {
  text-decoration: none;
  color: green;
  background: #cbf2bd;
  padding: 10px;
  margin-bottom: 30px;
}
</style>