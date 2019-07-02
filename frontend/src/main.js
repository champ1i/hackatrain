import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router.js";
import store from "./store.js";
import apolloProvider from './apollo'

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
