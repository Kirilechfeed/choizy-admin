import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import StudentsCard from "@/components/students/StudentsCard.vue";
import CareersList from "@/components/owerview/CareersList.vue";
import InfoClass from "@/components/listStudent/InfoClass.vue";
import PrevueBoard from "@/components/PrevueBoard.vue";
import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: PrevueBoard,
    },
    {
      path: "/overview",
      component: CareersList,
    },
    {
      path: "/students",
      component: StudentsCard,
    },
    {
      path: "/students/class/:id",
      component: InfoClass,
    },
  ],
});

export default router;
