// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './stores';
import trDict from 'vee-validate/dist/locale/tr';
import Moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';
import VModal from 'vue-js-modal'

const VueInputMask = require('vue-inputmask').default;

Vue.use(VModal);
Vue.use(VueInputMask);

const config = {
  locale: 'tr',
  dictionary: {
    tr: trDict
  }
};
Moment.locale("tr");
Vue.use(VeeValidate, config);

Vue.directive("dateShow", {
    inserted: function (el,binding) {
      el.innerText = Moment(binding.value).fromNow(); // and set to the view
    }
  }
);
Vue.directive("gameDate", {
    inserted: function (el,binding) {
      el.innerText = Moment(binding.value).format("HH:MM DD-MM-YYYY"); // and set to the view
    }
  }
);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  components: {App},
  template: '<App/>'
});
