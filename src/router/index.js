import Vue from "vue";
import VueRouter from "vue-router";
//import createWebHistory from "vue-router";

import SignIn from "../views/SignIn";
import Content from "../components/Content";
import Registration from "../views/Registration";
import AfterSearching from "../components/AfterSearching/AfterSearching";
import TodoList from "../components/TodoList";
import Photo from "../components/Photo/Photo";
import Video from "../components/Video/Video";
import Rozrywka from "../components/Rozrywka/Rozrywka";
import TodoApp from "../components/TodoApp";
Vue.use(VueRouter);
export const routes = [
  {
    path: "/signin",
    name: "Zaloguj się",
    component: SignIn
  },
  {
    path: "/",
    name: "Culinary.pl",
    component: Content
  },
  {
    path: "wyszukiwanie",
    name: "Culinary.pl",
    component: TodoList
  },
  {
    path: "/signup",
    name: "Zarejestruj się",
    component: Registration
  },
  {
    path: "/ph",
    name: "Photo",
    component: Photo
  },
  {
    path: "/vid",
    name: "Video",
    component: Video
  },
  {
    path: "/searchingpage",
    name: "Searchingpage",
    component: AfterSearching
  },
  {
    path: "/r",
    name: "Rozrywka",
    component: Rozrywka
  },
  {
    path: "/t",
    name: "TodoApp",
    component: TodoApp
  }
];

export const router = new VueRouter({
  routes
});
export default router;
