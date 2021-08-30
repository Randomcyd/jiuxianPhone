import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

//设置开始进入页面的时候滚动条在最顶端
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
