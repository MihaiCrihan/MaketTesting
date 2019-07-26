import Vue from "vue";
import Router from "vue-router";
import fileUpload from "./views/fileUpload.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "fileUpload",
      component: fileUpload
    }
  ]
});
