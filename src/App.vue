<template>
  <div id="app">
    <header>
      <nav class="navbar-dark navbar bg-black navbar-expand-md">
        <router-link to="/" class="nav-link">Culinary.pl </router-link>
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
              <a class="nav-link" href="#"
                ><router-link to="/ph"> Dodaj Żarciofotę</router-link></a
              >
            </li>
            <li class="nav-item">
              <router-link to="/signin" class="nav-link"
                >Zaloguj się</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">
                Zarejestruj się</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <TodoList />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AfterSearching from "./components/AfterSearching/AfterSearching";
import TodoList from "./components/TodoList";
import Photo from "./components/Photo/Photo";
import Video from "./components/Video/Video";
import Rozrywka from "./components/Rozrywka/Rozrywka";
import TodoApp from "./components/TodoApp";
import Topdf from "./components/Topdf";

export default {
  name: "App",
  components: {
    Header,
    Content,
    TodoList,
    TodoApp,
    Footer,
    AfterSearching,
    Photo,
    Video,
    Rozrywka,
    Topdf,
  },
};
</script>

<style>
#app {
  text-align: center;
  background-image: url("./assets/imageP.jpg");
}
</style>
© 2022 GitHub, Inc.
Terms