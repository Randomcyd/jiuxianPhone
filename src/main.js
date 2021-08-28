import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios'
import { Swipe, SwipeItem,Icon } from 'vant';
import 'vant/lib/icon/local.css';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
