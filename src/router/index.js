import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Item from '../views/Item.vue';
import Cart from '../views/Cart.vue';
import Type from '../views/Type.vue';
import Login from '../views/Login.vue';
import Cate from '../views/Cate.vue';
import Order from '../views/Order.vue';
import CartOrder from '../views/Cartorder.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/item',
    name: 'Item',
    component: Item,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/type',
    name: 'Type',
    component: Type,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cate',
    name: 'Cate',
    component: Cate,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/cartorder',
    name: 'CartOrder',
    component: CartOrder,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
