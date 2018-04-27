import Vue from 'vue';
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
      Vue.set(state,"coupon",coupon);
    },
    updateMBS(state){
      state.coupon.forEach(item =>{
        if(state.mbs < item.event.mbc){
          Vue.set(state,"mbs",item.event.mbc);
        }
      })
    }

  }
}
