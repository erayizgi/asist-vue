<template>
  <div class="col-12 col-md-12" id="home-slider" style="background:none!important;">
    <!-- login first -->
    <div class="carousel slide" data-ride="carousel" id="headline-slide">

      <div class="carousel-inner" v-if="!isLoading">
        <slick ref="slick" :options="slickOptions">

          <div class="shares" v-for="post in coupons">
            <div class="profile-bar">
              <img :src="post.IMG" class="img-fluid" width="75" height="75" alt="">
              <router-link :to="`/${post.kullaniciAdi}`"><strong>{{post.adSoyad}}</strong></router-link>
              <em v-date-show="post.created_at"></em>
              <em>yaptığı kuponla <strong>{{post.kesinKazanc}} KAZANDI</strong> </em>
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
        </slick>
      </div>
      <div class="row">
        <div class="col-12 clearfix">
          <ul class="carousel-indicators navigation" style="padding-top:0!important;">
          </ul>
        </div>
      </div>
    </div>
    <!--<a class="btn-load-more" @click="loadMore">DAHA FAZLA YÜKLE</a>-->
  </div>

</template>

<script>
  import StaticContent from "@/components/Common/FeedComponents/StaticContent";
  import CouponContent from "@/components/Common/FeedComponents/CouponContent";
  import Spinner from "@/components/Common/Spinner";
  import CommentedOn from "@/components/Common/FeedComponents/CommentedOn";
  import RePost from "@/components/Common/FeedComponents/RePost";
  import Slick from 'vue-slick';

  export default {
    name: "coupons-home",
    components: {
      RePost,
      CommentedOn,
      Spinner,
      StaticContent,
      CouponContent,
      Slick
    },
    data() {
      return {
        isLoading: false,
        page: 0,
        posts: {},
        slickOptions: {
          arrows: false,
          rows: 1,
          dots: true,
          dotsClass: 'carousel-indicators navigation',
          slidesToShow: 1, // if mobile 1
          slidesToScroll: 1,
          infinite: true,
        }
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("common/getHomeCoupons").then(res => {
        this.isLoading = false;
      })
    },
    computed: {
      coupons() {
        return this.$store.state.common.coupons;
      },

    }
  }
</script>

<style scoped>

</style>
