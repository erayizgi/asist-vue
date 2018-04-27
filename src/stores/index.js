import Vue from 'vue';
import Vuex from 'vuex';
import Users from './modules/Users';
import Posts from './modules/Posts';
import Comments from "./modules/Comments";
import Streams from "./modules/Streams";
import Common from "./modules/Common";
import Coupon from "./modules/Coupon";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    users:Users,
    posts:Posts,
    comments:Comments,
    streams:Streams,
    common: Common,
    coupon: Coupon,
  }
});
export default store;
