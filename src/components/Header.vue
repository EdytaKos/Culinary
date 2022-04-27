<template>
  <header>
    <nav class="navbar-dark navbar bg-black navbar-expand-md">
      <div id="zegar" class="offset-md-2"></div>
      <a class="navbar-brand offset-sm-1" href="#"> Culinary.pl </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainmenu"
        aria-controls="mainmenu"
        aria-expanded="false"
        aria-label="przełącznik"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainmenu">
        <ul class="navbar-nav offset-sm-1">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#"> + Dodaj Żarciofotę </a>

            >
          </li>
          <li class="nav-item">
            <router-link to="/signin" class="nav-link">
              Zaloguj się</router-link
            >
          </li>
          <li class="nav-item"><a class="nav-link"> Zarejestruj się</a></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </header>
</template>

<script>
import Photo from "./Photo/Photo";
export default {
  name: "Header",
  components: { Photo },
};
</script>

<style scoped>
header {
  margin-bottom: 50px;
}

li {
  color: grey;
  text-decoration: none;
}
</style>>