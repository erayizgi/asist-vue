import axios from 'axios';
import Vue from 'vue';

let apiUrl = "http://asist.test/";
// let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
    namespaced: true,
    state: {
        mainSlider: [],
        coupons: [],
        news: [],
        sideNews: [],
        videos: [],
        matches: []
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

        getSideNews(context) {
            return axios.get(apiUrl + "news/side?limit=10&order_by=-ID").then(res => {
                context.commit("setSideNews", res.data.data)
            })
        },
        getVideoNews(context) {
            return axios.get(apiUrl + "sliders/video").then(res => {
                context.commit("setVideos", res.data.data);
            })
        },
        getMatches(context, payload) {
            return axios.get(apiUrl + "coupon/events").then(res => {
                context.commit("setMatches", res);
            })
        },
        getOddOptions(context, payload) {
            return axios.get(apiUrl + "coupon/odds/" + payload, {
                headers: {Authorization: "Bearer " + localStorage.getItem("token")}
            }).then(res => {
                context.commit("setOdds", {match_id: payload, odds: res.data.data});
            })
        },

        getForecast(context, payload) {
            return axios.get(apiUrl + "forecast?limit=" + payload.limit);
        },

        getForecastDetail(context, payload) {
            return axios.get(apiUrl + "forecast/" + payload.slug);
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

        getPages(context, payload){
            return axios.get(apiUrl + "pages");
        },

        getPageDetail(context, payload){
            return axios.get(apiUrl + "pages/" + payload.slug);
        }

    },
    mutations: {
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
        }
    }
}
