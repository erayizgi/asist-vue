import axios from 'axios';
import Vue from 'vue';
 let apiUrl = "http://asist.test/";
//let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
	namespaced: true,
	state: {
		streams: [],
		chat: []
	},
	getters: {},
	actions: {
		getStreams(context, payload) {
			axios.get(apiUrl + "/streams?order_by=-yayinlanmaTarihi", {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			}).then(res => {
				context.commit("setStreams", res.data.data);
			})
		},
		chat(context, payload) {
			axios.get(apiUrl + "/streams/chat/" + payload + "?order_by=-ID").then(res => {
				context.commit("setChat", res.data.data);
			})
		},
		sendMessage(context, payload) {
			return axios.post(apiUrl + "/streams/chat/", payload, {
				headers: {Authorization: "Bearer " + localStorage.getItem("token")}
			}).then(() => {
				context.dispatch("chat", payload.yayinID);
			})
		}
	},
	mutations: {
		setStreams(state, data) {
			Vue.set(state, "streams", data.data);
		},

		setChat(state, data) {
			Vue.set(state, "chat", data.data);
			if (data.data.length > state.chat.length) {
			}
		}
	}
}
