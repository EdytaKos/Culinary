<template>
  <div class="collapse navbar-collapse" id="mainmenu">
    <ul class="navbar-nav offset-sm-1">
      <li class="nav-item dropdown">
        <a class="nav-link" href="#"> + Dodaj Żarciofotę</a>
      </li>
      <li class="nav-item">
        <router-link to="/signin" class="nav-link"> Zaloguj się</router-link>
      </li>
      <li class="nav-item"><a class="nav-link"> Zarejestruj się</a></li>
      <li><div id="zegar" class="offset-md-2"></div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
style>