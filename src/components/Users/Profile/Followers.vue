<template>
  <div>
    <profile-head :user-name="this.$route.params.user_name"/>
    <div class="container" id="user-list">
      <div class="row mb-15">
        <div class="col-12">
          <h1 class="title with-border">Takipçiler</h1>
        </div>
      </div>
      <div class="row mb-15">
        <!-- single user -->
        <div class="col-12 col-md-6" style="height:170px!important;" v-for="usr in followers">
          <div class="user-card clearfix">
            <div class="avatar float-left">
              <img :src="usr.data.IMG" alt="" style="width:60px;height:60px;">
            </div>
            <div class="info float-right">
              <div class="clearfix user">
                <router-link :to="`/${usr.data.kullaniciAdi}`">
                  <strong class="float-left">{{usr.data.adSoyad}}</strong>
                </router-link>
                <div class="float-right">
                  <follow :follower="user.kullaniciAdi" :t-class="'col-12 profile-buttons'" :following="usr.data.kullaniciAdi"/>
                </div>
              </div>
              <span class="about">{{usr.data.kullaniciHakkinda}}</span>
              <div class="stats">
                <router-link :to="`/${usr.data.kullaniciAdi}/followers`">
                  <strong>{{usr.followers}}</strong> TAKİPÇİLER
                </router-link>
                <a href="#"><strong>{{usr.following}}</strong> TAKİP EDİLEN</a>
                <a href="#"><strong>{{usr.posts}}</strong> PAYLAŞIM</a>
                <a href="#"><strong>{{usr.comments}}</strong> YORUM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-15">
        <a class="btn-load-more" @click="loadMore">DAHA FAZLA YÜKLE</a>
      </div>
      <spinner v-if="isLoading" />

    </div>
  </div>
</template>

<script>
  import ProfileHead from "../Wall/ProfileHead";
  import Follow from "./Follow";
  import Spinner from "../../Common/Spinner";

  export default {
    components: {
      Spinner,
      Follow,
      ProfileHead
    },
    name: "followers",
    data() {
      return {
        followers: [],
        isLoading:false,
        count:null,
        page:0
      }
    },
    created() {
      this.isLoading =true;
      this.$store.dispatch("users/getFollowers", {username:this.$route.params.user_name,page:this.page}).then(res => {
        this.count = 0;
        let length = res.data.data.data.length;
        res.data.data.data.forEach((item,key) => {
          this.$store.dispatch("users/getUser",item.kullaniciAdi).then(res=>{
            this.followers.push(res.data.data);
            this.count++;
          });

        });
        this.isLoading = false;
      })
    },
    computed:{
      user() {
        if(this.$store.state.users.isLogged){
          return this.$store.state.users.user;
        }else{
          return false;
        }
      }
    },
    methods:{
      loadMore(){
        this.isLoading = true;
        this.$store.dispatch("users/getFollowers", {username:this.$route.params.user_name,page:this.page}).then(res => {
          this.count = 0;
          this.page++;

          let length = res.data.data.data.length;

          res.data.data.data.forEach((item,key) => {
            this.$store.dispatch("users/getUser",item.kullaniciAdi).then(res=>{
              this.followers.push(res.data.data);
              this.count++;
            });

          });
          this.isLoading = false;
        })
      }
    }
  }
</script>

<style scoped>

</style>
