import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:'',//登录名
    cartNum:0, //购物车数量,
    cart:[],
    address:'',
  },
  mutations: {
    addCart(state,item){
      for (let pro of state.cart) {
        if(item.data.productPromo.advWords==pro.data.productPromo.advWords){
          pro.data.proTotal+=1;
          return;
        }
      }
      item.data.proTotal = 1;
      state.cart.push(item);
      state.cartNum = state.cart.length;
    },
    changeAdd(state,address){
      state.address = address;
      console.log(state.address);
    }
  },
  actions: {
    addItem(context,item){
      context.commit('addCart',item);
    },
    changeLocal(context,address){
      context.commit('changeAdd',address);
    }
  },
  modules: {
  },
});
