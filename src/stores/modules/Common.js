import axios from 'axios';
import Vue from 'vue';

// let apiUrl = "http://asist.test/";
let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
  namespaced: true,
  state: {
    mainSlider: [],
    coupons: [],
    news: [],
    sideNews: [],
    videos: [],
    matches: [],
    matchDates: [],
    leagues: [],
    pages: [],
    duties: [],
    activeDuty: null,
    activeMissions : []
  },
  getters: {},
  actions: {
    getMainSlider(context, payload) {
      return axios.get(apiUrl + "sliders/header").then(res => {
        context.commit("setMainSlider", res.data.data);
      })
    },
    getHomeCoupons(context, payload) {
      return axios.get(apiUrl + "home/coupons?limit=5").then(res => {
        context.commit("setCoupons", res.data.data);
      })
    },
    getNews(context, payload) {
      return axios.get(apiUrl + "news/?limit=10&order_by=-ID").then(res => {
        context.commit("setNews", res.data.data);
      })
    },

    getNewsPage(context, payload) {
      return axios.get(apiUrl + "news/?limit=" + payload.limit + "&offset=" + payload.page * 10 + "&order_by=-ID");
    },

    getNewsDetail(context, payload) {
      return axios.get(apiUrl + "news/" + payload.slug);
    },

    getSideNews(context, payload) {
      return axios.get(apiUrl + "news/side?limit=" + payload.limit + "&order_by=-ID").then(res => {
        context.commit("setSideNews", res.data.data)
      })
    },
    getVideoNews(context) {
      return axios.get(apiUrl + "sliders/video").then(res => {
        context.commit("setVideos", res.data.data);
      })
    },
    getMatches(context, payload) {
      if (payload === undefined) {
        return axios.get(apiUrl + "coupon/events?limit=20").then(res => {
          context.commit("setMatches", res);
          context.commit("setMatchDates", res.data.data.dates);
          context.commit("setLeagues", res.data.data.leagues);
        })
      } else {
        let params = "?";
        if (payload.league) {
          params += "where=league_code|" + payload.league;
          if (payload.type) {
            params += ",type|" + payload.type;
          } else {
            params += "&";
          }
        } else {
          if (payload.type) {
            params += "where=type|" + payload.type;
          }
        }
        if (payload.tarih) {
          params += "between=events.start_date||" + payload.tarih;
        }

        return axios.get(apiUrl + "coupon/events" + params).then(res => {
          context.commit("setMatches", res);
        })
      }
    },
    getOddOptions(context, payload) {
      return axios.get(apiUrl + "coupon/odds/" + payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      }).then(res => {
        context.commit("setOdds", {match_id: payload, odds: res.data.data});
      })
    },

    getForecast(context, payload) {
      return axios.get(apiUrl + "forecast?limit=" + payload.limit + "&offset=" + payload.page * 10);
    },

    getForecastDetail(context, payload) {
      return axios.get(apiUrl + "forecast/" + payload.slug + "?limit=10&offset=" + payload.offset);
    },

    saveForecast(context, payload) {
      return axios.post(apiUrl + "forecast", payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      });
    },

    checkForecast(context, payload) {
      return axios.post(apiUrl + "forecast/check", payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      });
    },

    commentForecast(context, payload) {
      return axios.post(apiUrl + "forecast/create", payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      });
    },

    deleteForecastComment(context, payload) {
      return axios.delete(apiUrl + "forecast/" + payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      })
    },

    getPages(context, payload) {
      return axios.get(apiUrl + "pages");
    },

    getFooterPages(context, payload) {
      return axios.get(apiUrl + "pages").then((res) => {
        context.commit("setPages", res.data.data.data);
      })
    },

    getPageDetail(context, payload) {
      return axios.get(apiUrl + "pages/" + payload.slug);
    },

    getNotificationsHome(context, payload) {
      return axios.get(apiUrl + "notifications/", {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      });
    },

    markAsReadNotifications(context, payload) {
      return axios.patch(apiUrl + "notifications/all", null, {
        headers: {Authorization: "Bearer " + localStorage.getItem("token")}
      });
    },

    getTopPredictors(context, payload) {
      return axios.get(apiUrl + "home/population");
    },

    getTopGames(context, payload) {
      return axios.get(apiUrl + "sliders/nav/" + payload.category);
    },

    getTippers(context, payload) {
      return axios.get(apiUrl + "users/tippers").then((res) => {
        context.commit("setTippers", res.data.data.data);
      })
    },
    getDuties(context, payload) {
      return axios.get(apiUrl + "duty/groups?order_by=-starting_at").then(res => {
        context.commit("setDuties", res.data.data.data);
        return res.data.data.data;
      });
    },
    assignDuty(context,payload){
      return axios.post(apiUrl + "duty/"+payload+"/assign",null,{
        headers: {Authorization: "Bearer "+localStorage.getItem("token")}
      }).then(res=>{
        context.commit("setActiveDuty",payload);
      })
    },
    getActiveDuty(context,payload){
      return axios.get(apiUrl + "duty/active",{
        headers: {Authorization: "Bearer "+localStorage.getItem("token")}
      }).then(res=>{
        context.commit("setActiveDuty",res.data.data.grup_id);
      });
    },
    getMissions(context,payload){
      return axios.get(apiUrl + "duty/"+payload+"/missions",{
        headers: {Authorization: "Bearer "+ localStorage.getItem("token")}
      }).then(res=>{
        context.commit("setActiveMissions",res.data.data);
      })
    }
  },
  mutations: {
    setPages(state, data) {
      Vue.set(state, "pages", data);
    },
    setTippers(state, data) {
      Vue.set(state, "tippers", data);
    },
    setMainSlider(state, data) {
      Vue.set(state, "mainSlider", data.data);
    },
    setCoupons(state, data) {
      Vue.set(state, "coupons", data.data);
    },
    setNews(state, data) {
      Vue.set(state, "news", data.data);
    },
    setSideNews(state, data) {
      Vue.set(state, "sideNews", data.data);
    },
    setVideos(state, data) {
      Vue.set(state, "videos", data.data);
    },
    setMatches(state, data) {
      Vue.set(state, "matches", data.data.data.data);
    },
    setOdds(state, data) {
      let it = state.matches.findIndex(item => {
        if (item.event_id === data.match_id)
          return item;

      });
      console.log("index", it);
      Vue.set(state.matches[it], "odds", data.odds);
    },
    setMatchDates(state, data) {
      Vue.set(state, "matchDates", data);
    },
    setLeagues(state, data) {
      Vue.set(state, "leagues", data);
    },
    setDuties(state,data){
      Vue.set(state,"duties",data);
    },
    setActiveDuty(state,data){
      Vue.set(state,"activeDuty",data);
    },
    setActiveMissions(state,data){
      Vue.set(state,"activeMissions",data);
    }
  }
}
