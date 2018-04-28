<template>
  <div class="col-12 col-md-9">
    <!-- login first -->
    <div class="shares" v-for="post in posts">
      <div class="profile-bar">
        <img :src="post.IMG" class="img-fluid" width="75" height="75" alt="">
        <router-link :to="`/${post.kullaniciAdi}`"><strong>{{post.adSoyad}}</strong></router-link>
        <em v-date-show="post.post_created_at"></em>
        <div class="float-right">
          <div class="dropdown">
            <button class="btn-coupon-status" type="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item facebook" href="#"><i class="fab fa-facebook"></i> Facebook'ta Paylaş</a>
              <a class="dropdown-item twitter" href="#"><i class="fab fa-twitter"></i> Twitter'da Paylaş</a>
            </div>
          </div>
        </div>
      </div>
      <static-content v-if="post.paylasim_tipi===1" :post-content="post.paylasim_id"/>
      <coupon-content v-if="post.paylasim_tipi===2" :coupon-id="post.paylasim_id"/>
      <re-post v-if="post.paylasim_tipi===3" :post-id="post.paylasim_id"/>
    </div>
    <spinner v-if="isLoading"/>

    <a class="btn-load-more" @click="loadMore">DAHA FAZLA YÜKLE</a>
  </div>
</template>

<script>
  import StaticContent from "@/components/Common/FeedComponents/StaticContent";
  import CouponContent from "@/components/Common/FeedComponents/CouponContent";
  import Spinner from "@/components/Common/Spinner";
  import CommentedOn from "@/components/Common/FeedComponents/CommentedOn";
  import RePost from "@/components/Common/FeedComponents/RePost";

  export default {
    components: {
      RePost,
      CommentedOn,
      Spinner,
      StaticContent,
      CouponContent
    },
    name: "user-feed",
    props:[
      "userName"
    ],
    data() {
      return {
        isLoading: false,
        page: 0,
        posts:{}
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("posts/getUserFeed", {username:this.userName,page: this.page}).then(res => {
        this.posts = res.data.data.data;
        this.isLoading = false;
      });
    },
    methods:{
      loadMore(){
        this.page++;
        this.isLoading = true;
        this.$store.dispatch("posts/getUserFeed", {username:this.userName,page: this.page}).then(res => {
          res.data.data.data.forEach(item=>{
            this.posts.push(item);
          });
          this.isLoading = false;
        })
      },
      humanReadableActivity(type){
        if(type === "kupon"){
          return "bir kupon paylaştı"
        }else if(type==="post"){
          return "bir gönderi paylaştı"
        }else if(type==="postOnWall"){
          return "başka bir gönderiyi duvarında yayınladı"
        }else if(type==="comment"){
          return "bir gönderiye yorum yaptı"
        }
      }
    }
  }
</script>

<style scoped>

</style>
