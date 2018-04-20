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
            <div class="header">
              <img :src="post.IMG" alt="">
              <router-link :to="`${post.kullaniciAdi}`">{{post.adSoyad}}</router-link>
              <em v-date-show="post.created_at"></em>
            </div>
            <div class="body">
              <static-content v-if="post.paylasim_tipi===1" :post-content="post.paylasim_id"/>
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
