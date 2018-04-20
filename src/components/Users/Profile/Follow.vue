<template>
  <div :class="tClass">
    <a href="javascript:void(0)" class="btn-follow" v-if="!isFollowing && !isLoading" @click="follow"
       :disabled="isLoading">
      <i class="fa fa-plus"></i>TAKİP ET
    </a>
    <button :class="followingClass" @mouseover="mouseOv" @mouseleave="mouseOu" v-if="isFollowing && !isLoading"
            @click="unfollow" v-html="followingContent" :disabled="isLoading"></button>
    <spinner v-if="isLoading"/>
    <a v-if="tClass===undefined" href="javascript:void(0)" class="btn-send-message" data-toggle="modal" data-target="#new_user_message">
      <i class="fa fa-envelope"></i>MESAJ GÖNDER
    </a>
  </div>
</template>

<script>
  import Spinner from "../../Common/Spinner";

  export default {
    components: {Spinner},
    name: "follow",
    props: [
      "follower",
      "following",
      "tClass"
    ],
    data() {
      return {
        isLoading: false,
        // isFollowing: false,
        isFollowingHover: false,
        followingUser: null,
        followingClass: "btn-following",
        followingContent: '<i class="fa fa-check"></i> TAKİP EDİLİYOR'
      }
    },
    created() {
      //this.isLoading = true;
      if(this.tClass === undefined){
        this.tClass = 'col-12 col-sm-3 profile-buttons';
      }
    },
    computed: {
      isFollowing() {
        this.isLoading = true;
        if (this.$store.state.users.following.length > 0) {
          let following = this.$store.state.users.following;
          following = following.filter(item => {
            return (item.kullaniciAdi === this.following);
          });
          if (following.length > 0) {
            this.followingUser = following[0];
            this.isLoading = false;
            return true;
          } else {
            this.isLoading = false;
            return false;
          }
        }else{
          this.isLoading = false;
        }
      }
    },
    methods: {
      follow() {
        this.isLoading = true;
        if (this.$store.state.users.isLogged) {
          this.$store.dispatch("users/follow", {kullanici_id: this.following}).then(res => {
            this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {
              this.isLoading = false;
            })
          })
        } else {
          this.isLoading = false;
          this.$swal({title: "Dikkat!", type: "warning", text: "Takip edebilmek için giriş yapmış olmalısınız"});
        }
      },
      unfollow() {
        this.isLoading = true;
        if (this.$store.state.users.isLogged) {
          this.$store.dispatch("users/unfollow", {kullanici_id: this.following}).then(res => {
            this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {
              this.isLoading = false;
            })
          })
        } else {
          this.isLoading = false;
          this.$swal({title: "Dikkat!", type: "warning", text: "Takip edebilmek için giriş yapmış olmalısınız"});
        }
      },
      mouseOv() {
        this.followingContent = '<i class="fa fa-times"></i> TAKİBİ BIRAK';
        this.followingClass = 'btn-unfollow hover';
      },
      mouseOu() {
        this.followingContent = '<i class="fa fa-check"></i> TAKİP EDİLİYOR';
        this.followingClass = 'btn-following';
      }
    },

  }
</script>

<style scoped>

</style>
