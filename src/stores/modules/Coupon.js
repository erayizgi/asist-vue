import Vue from 'vue';
import axios from 'axios';
// let apiUrl = "http://asist.test/";
let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default{
  namespaced:true,
  state:{
    coupon:[],
    totalOdd : 0,
    mbs:3
  },
  getters:{},
  actions:{
    addToCoupon(context,payload){
      context.commit("addGame",payload);
      context.commit("calculateTotal");
      context.commit("updateMBS");
    },
    remove(context,payload){
      context.commit("remove",payload);
      context.commit("calculateTotal");
      context.commit("updateMBS");
    },
    save(context,payload){
      return axios.post(apiUrl + "coupon/send",payload,{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      }).then(()=>{
        context.commit("clear");
      });
    }
  },
  mutations:{
    calculateTotal(state){
      let total = 1;
      state.coupon.forEach(item=>{
        total *= item.odd;
      });
      Vue.set(state,"totalOdd",total);
    },
    addGame(state,data){
      let coupon = state.coupon;
      coupon.push(data);
      Vue.set(state,"coupon",coupon);

    },
    remove(state,data){
      let index = -1;
      state.coupon.forEach((item,key)=>{
        if(item.odd_option_id === data){
          index = key;
        }
      });
      let coupon = state.coupon;
      coupon.splice(index,1);
      Vue.set(state,"mbs",1);

      coupon.forEach(item =>{
        if(state.mbs < item.event.mbc){
          Vue.set(state,"mbs",item.event.mbc);
        }
      });
      Vue.set(state,"coupon",coupon);
    },
    updateMBS(state){
      state.coupon.forEach(item =>{
        if(state.mbs < item.event.mbc){
          Vue.set(state,"mbs",item.event.mbc);
        }
      })
    },
    clear(state){
      Vue.set(state,"coupon",[]);
      Vue.set(state,"totalOdd",0);
      Vue.set(state,"mbs",3);
    }

  }
}
