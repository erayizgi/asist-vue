<template>
  <div>
    <div v-if="!isLoading">
      <div class="text-content">
        <div class="wrapper">
          {{post.yorum}}
        </div>
      </div>
      <div class="content-quotation">
        <div class="wrapper">
          <div class="coupon">
            <div class="header" v-if="post">
              <img :src="post.IMG" alt="">
              <router-link :to="`${post.kullaniciAdi}`" class="text-white">{{post.adSoyad}}</router-link>
              <router-link :to="`/${post.kullaniciAdi}/posts/${post.paylasim_id}`" class="text-white">
                <em v-date-show="post.created_at"></em>
              </router-link>
            </div>
            <div class="body">
              <static-content v-if="post.paylasim_tipi===1" :post-content="post.durum" :image-content="post.resim" :re-post="true"/>
              <coupon-content v-if="post.paylasim_tipi===2" :coupon-id="post.durum" :re-post="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <spinner v-else/>
  </div>
</template>

<script>
  import StaticContent from './StaticContent';
  import CouponContent from './CouponContent';
  import Spinner from "../Spinner";
  export default {
    name: "commented-on",
    components: {
      Spinner,
      StaticContent,
      CouponContent
    },
    data(){
      return {
        isLoading:true,
        post:{}
      }
    },
    props:[
      "commentId"
    ],
    created(){
      this.$store.dispatch("posts/getPostFromComment",this.commentId)
        .then(res =>{
          this.post = res.data.data;
          this.isLoading = false;
        })
    }
  }
</script>

<style scoped>

</style>
