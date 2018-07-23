<template>
  <div>
    <div v-if="!isLoading">
      <div class="text-content">
        <div class="wrapper"  v-if="post.durum">
          <h5 class="pcontent">{{post.durum}}</h5>
        </div>
      </div>
      <div class="content-quotation">
        <div class="wrapper" >
          <div class="coupon">
            <div class="header" >
              <img :src="innerPost.IMG" alt="">
              <router-link style="color: #FFF!important"  :to="`${innerPost.kullaniciAdi}`">{{innerPost.adSoyad}}</router-link>
              <em v-date-show="innerPost.created_at"></em>
            </div>
            <div class="body">
              <static-content v-if="innerPost.paylasim_tipi===1" :post-content="innerPost.paylasim_id" :re-post="true"/>
              <coupon-content v-if="innerPost.paylasim_tipi===2" :coupon-id="innerPost.durum" :re-post="true"/>
            </div>


          </div>
        </div>
      </div>
    </div>
    <interactions :post-id="post.paylasim_id" :type="1" v-if="!isLoading"/>

    <spinner v-else/>
  </div>
</template>

<script>
  import StaticContent from './StaticContent';
  import CouponContent from './CouponContent';
  import Spinner from "../Spinner";
  import Interactions from '../Interactions';

  export default {
    name: "re-post",
    components: {
      Spinner,
      StaticContent,
      CouponContent,
      Interactions
    },
    data() {
      return {
        isLoading: true,
        post: {},
        innerPost:{}
      }
    },
    mounted() {
        $(document).ready(function() {
            $(".pcontent").shorten({
                "showChars" : 300,
                "moreText"	: '<strong style="color: #fc115d">Devamını Gör</strong>',
                "lessText"	: '<strong style="color: #fc115d">Daha Az Göster</strong>',
            });
        });
    },
    props: [
      "postId"
    ],
    created() {
      this.$store.dispatch("posts/getPost", this.postId)
        .then(res => {
          this.post = res.data.data;
          this.$store.dispatch("posts/getPost",this.post.paylasilan_gonderi).then(res=>{
            this.innerPost = res.data.data;
            this.isLoading = false;
          });
        })
    }

  }
</script>

<style scoped>

</style>
