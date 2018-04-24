import axios from 'axios';
import Vue from 'vue';
let apiUrl = "http://asist.test/";
// let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
  namespaced: true,
  state: {
    isLogged: false,
    token: null,
    user: null,
    stats: null,
    feed: [],
    following:[],
    followers:[],
    notifications:[],
    initFeed: false,
    notificationUpdated:null,
    messages:null
  },
  getters: {},
  actions: {
    login(context, payload) {
      return axios.post(apiUrl + "oauth/token", {
        grant_type: 'password',
        client_id: 4,
        client_secret: 'il2S7TKG2WSONWCezigH3rUnBcI7EvfNB8CJQFVi',
        username: payload.email,
        password: payload.password
      }).then(response => {
        context.commit("setToken", response.data.access_token);
        localStorage.setItem('token', response.data.access_token);
      });
    },
    register(context, payload) {
      return axios.post(apiUrl + "users", payload)
    },
    setToken(context, payload) {
      context.commit("setToken", payload);
    },
    setError(context, payload) {
      context.commit("setError", null);
    },
    me(context, payload) {
      return axios.get(apiUrl + "users/me", {
        headers: {Authorization: "Bearer " + payload}
      }).then(response => {
        context.commit("setUser", response.data.data.data);
        return response.data.data.data;
      });
    },
    updateProfile(context, payload) {
      return axios.patch(apiUrl + "users", payload,
        {headers: {Authorization: "Bearer " + this.state.users.token}}
      ).then(response => {
        context.commit("setUser", response.data.data);
      })
    },
    logout(context) {
      context.commit("logout");
    },
    updateAvatar(context, payload) {
      return axios.patch(apiUrl + "users/image", {type: 'avatar', url: payload},
        {headers: {Authorization: "Bearer " + this.state.users.token}}).then(response => {
        context.commit('setUserAvatar', payload);
      })
    },
    updateCover(context, payload) {
      return axios.patch(apiUrl + "users/image", {type: 'cover', url: payload},
        {headers: {Authorization: "Bearer " + this.state.users.token}}).then(response => {
        context.commit('setUserCover', payload);
      })
    },
    getMyStatistics(context) {
      return axios.get(apiUrl + 'users/me/statistics', {headers: {Authorization: "Bearer " + this.state.users.token}})
        .then(response => {
          context.commit("setUserStatistics", response.data.data)
        });
    },
    feed(context, page) {
      return axios.get(apiUrl + 'users/activities?order_by=-islem_tarihi&offset='+(page*20),
        {headers: {Authorization: "Bearer " + this.state.users.token}})
        .then(response => {
          context.commit("setFeed", response.data.data);
        })
    },
    getUser(context, payload){
      return axios.get(apiUrl + "users/"+payload);
    },
    getFollowing(context, payload){
      axios.get(apiUrl + "users/"+payload+"/following").then(res=>{
        context.commit("setFollowing",res.data.data);
      })
    },
    getFollowers(context, payload){
      return axios.get(apiUrl + "users/"+payload.username+"/followers?order_by=+takipEdenID&offset="+payload.page*20)
    },
    follow(context,payload){
      return axios.post(apiUrl + "follow",payload,{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    unfollow(context,payload){
      return axios.post(apiUrl + "unfollow",payload,{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    notifications(context,payload){
      axios.get(apiUrl + "notifications",{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      }).then(res=>{
        console.log("noti",res);
        context.commit("setNotification",res.data.data.data);
      })
    },
    readNotification(context,payload){
      return axios.patch(apiUrl + "notifications",{bildirim_id:payload},{
        headers: {Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    createConversation(context,payload){
      return axios.post(apiUrl + "message/create",payload,{
        headers:{Authorization: "Bearer "+ localStorage.getItem("token")}
      })
    },
    getUnreadMessages(context,payload){
      return axios.get(apiUrl + "message/inbox?order_by=-created_at",{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      }).then(res=>{
        context.commit("setMessages",res.data);
      })
    },
    outbox(context,payload){
      return axios.get(apiUrl + "message/outbox?order_by=-created_at",{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    getConversation(context,payload){
      return axios.get(apiUrl + "message/read/"+payload,{
        headers: {Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    reply(context,payload){
      return axios.post(apiUrl + "message/reply",payload,{
        headers:{Authorization : "Bearer "+localStorage.getItem("token")}
      })
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
      state.isLogged = true;
    },
    setError(state, error) {
      state.error = error;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isLogged = false;
      localStorage.removeItem("token");

    },
    setUserAvatar(state, url) {
      state.user.IMG = url;
    },
    setUserCover(state, url) {
      state.user.coverIMG = url;
    },
    setUserStatistics(state, stats) {
      state.stats = stats;
    },
    setFeed(state, feed) {
      if(state.initFeed===true){
        state.feed = [];
      }
      feed.forEach((item) => {
        state.feed.push(item);
      });
      //state.feed =feed;
    },
    setFollowing(state,data){
      Vue.set(state,"following",data);
    },
    setNotification(state,data){
      Vue.set(state,"notifications",data);
      // Vue.set(state,"notificationUpdated",)
    },
    setMessages(state,data){
      Vue.set(state,"messages",data.data.conversations);
    }
  }
}
