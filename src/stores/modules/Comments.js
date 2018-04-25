import axios from 'axios';

// let apiUrl = "http://asist.test/";
let apiUrl = "https://asistanaliz-192209.appspot.com/";

export default {
  namespaced:true,
  state:{},
  getters:{},
  actions:{
    getCommentsByPostId(context,payload){
      let limit = (payload.limit!==0)? "?limit="+payload.limit : null;
      let order = (payload.limit!==0)? "&order_by=-tb_paylasim_yorumlari.created_at" : "&order_by=+tb_paylasim_yorumlari.created_at";
      let offset = (payload.offset!==0)? "&offset="+payload.offset: null;
      return axios.get(apiUrl + "comments/"+payload.post+limit+offset+order,{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    comment(context,payload){
      return axios.post(apiUrl + "comments",payload,{
        headers:{Authorization: "Bearer "+localStorage.getItem("token")}
      })
    },
    deleteComment(context,payload){
      return axios.delete(apiUrl + "comments/"+payload,{
        headers:{Authorization: "Bearer "+ localStorage.getItem("token")}
      })
    }
  },
  mutations:{}
}
