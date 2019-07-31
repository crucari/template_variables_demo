// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import List from "./List";

Vue.config.productionTip = false;

Vue.component("pass", {
  render() {
    return this.$scopedSlots.default(this.$attrs);
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { List },
  template: "<List/>"
});
