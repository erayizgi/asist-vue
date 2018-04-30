import axios from 'axios';

 // let apiUrl = "http://asist.test/";
let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
	namespaced: true,
	state: {},
	getters: {},
	actions: {
		createPost(context, payload) {
			return axios.post(apiUrl + "posts", payload, {headers: {Authorization: "Bearer " + localStorage.getItem("token")}})
		},
		couponDetail(context, payload) {
			return axios.get(apiUrl + "posts/couponDetail/" + payload, {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			})
		},
		getPost(context, payload) {
			return axios.get(apiUrl + "posts/" + payload);
		},
		getPostFromComment(context, payload) {
			return axios.get(apiUrl + "posts/comment/" + payload)
		},
		couponStatus(context, payload) {
			return axios.get(apiUrl + "posts/couponStatus/" + payload)
		},
		getUserFeed(context, payload) {
			return axios.get(apiUrl + "posts/feed/" + payload.username + "/?offset=" + payload.page * 10 + "&limit=10");
		},
		getUserSingleFeed(context, payload) {
			return axios.get(apiUrl + "posts/feed/"+ payload.username + "?where=tb_paylasimlar.paylasim_id|" + payload.slug);
		},
		getUserCoupon(context, payload) {
			return axios.get(apiUrl + "posts/feed/" + payload.username + "/?offset=" + payload.page * 10 + "&limit=10&where=paylasim_tipi|2");
		},
		getLikeCount(context, payload) {
			return axios.get(apiUrl + "posts/" + payload + "/like_count");
		},
		deletePost(context, payload) {
			return axios.delete(apiUrl + "posts/delete/" + payload, {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			})
		},
		like(context, payload) {
			return axios.post(apiUrl + "posts/like", payload, {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			})
		},
		hasLiked(context, payload) {
			return axios.get(apiUrl + "posts/" + payload + "/liked", {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			})
		},
		showLikers(context, payload) {
			return axios.get(apiUrl + "posts/" + payload + "/likers")
		}

	},
	mutations: {}
}
