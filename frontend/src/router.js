import Vue from "vue";
import Router from "vue-router";
import TrainOverview from "./views/TrainOverview.vue";
import TrainSeats from "./views/TrainSeats.vue";
import ThankYou from "./views/ThankYou.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: TrainSeats
    },
    {
      path: "/train-seats",
      name: "train-seats",
      component: TrainOverview
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: ThankYou
    }
  ]
});
