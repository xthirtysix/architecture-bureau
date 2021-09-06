import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Viewer from "v-viewer";
import { VLazyImagePlugin } from "v-lazy-image";
import "viewerjs/dist/viewer.css";

Vue.use(Viewer).use(VLazyImagePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
