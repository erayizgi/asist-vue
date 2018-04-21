import axios from 'axios';
import Vue from 'vue';
let apiUrl = "http://asist.test/";
// let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
  namespaced:true,
  state:{
    mainSlider:[],
    coupons:[],
    news:[],
    sideNews:[],
    videos:[]
  },
  getters:{},
  actions:{
    getMainSlider(context,payload){
      return axios.get(apiUrl+"/sliders/header").then(res=>{
        context.commit("setMainSlider",res.data.data);
      })
    },
    getHomeCoupons(context,payload){
      return axios.get(apiUrl + "/home/coupons?limit=5").then(res=>{
        context.commit("setCoupons",res.data.data);
      })
    },
    getNews(context,payload){
      return axios.get(apiUrl + "/news/?limit=10&order_by=-ID").then(res=>{
        context.commit("setNews",res.data.data);
      })
    },
    getSideNews(context){
      return axios.get(apiUrl+"/news/side?limit=10&order_by=-ID").then(res=>{
        context.commit("setSideNews",res.data.data)
      })
    },
    getVideoNews(context){
      return axios.get(apiUrl+"/sliders/video").then(res=>{
        context.commit("setVideos",res.data.data);
      })
    }
  },
  mutations:{
    setMainSlider(state,data){
      Vue.set(state,"mainSlider",data.data);
    },
    setCoupons(state,data){
      Vue.set(state,"coupons",data.data);
    },
    setNews(state,data){
      Vue.set(state,"news",data.data);
    },
    setSideNews(state,data){
      Vue.set(state,"sideNews",data.data);
    },
    setVideos(state,data){
      Vue.set(state,"videos",data.data);
    }
  }
}
