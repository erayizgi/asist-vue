<template>
  <div id="kupon">
    <coupon-detail :games="coupon.games" v-if="!isLoading && isLogged"/>
    <coupon-status :status="coupon.status" :games="coupon.games" :re-post="rePost" v-if="!isLoading && isLogged"/>
    <div class="content" v-if="isLoading">
      <div class="text-content">
        <div class="wrapper">
          <spinner/>
        </div>
      </div>
    </div>
    <div class="register-or-login-first" v-if="!isLogged">
      <img src="/static/images/icon-locked.png" class="img-fluid" alt="">
      KUPONU GÖRMEK İÇİN <strong>LÜTFEN GİRİŞ YAPIN YA DA ÜYE OLUN</strong>
    </div>
    <interactions :post-id="couponId" v-if="!rePost" :type="1"/>
  </div>
</template>

<script>
  import CouponDetail from "./CouponDetail";
  import Spinner from "../Spinner";
  import CouponStatus from "./CouponStatus";
  import Interactions from "../Interactions";

  export default {
    components: {
      Interactions,
      CouponStatus,
      Spinner,
      CouponDetail
    },
    name: "coupon-content",
    props: [
      "couponId",
      "rePost",
    ],
    data() {
      return {
        coupon: {},
        isLoading: false,
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("posts/getPost", this.couponId).then(res => {

        this.$store.dispatch("posts/couponDetail", res.data.data.durum).then(res => {
          // this.isLoading = false;
          this.coupon.games = res.data.data.data;
          return this.$store.dispatch("posts/couponStatus",this.coupon.games[0].kupon_id)
        }).then(res=>{
          this.coupon.status = res.data.data.data;
          this.isLoading = false;
        }).catch(err=>{
          this.isLoading = false;
        });

      });

    },
    computed: {
      coup() {
        return this.coupon;
      },
      isLogged(){
        return this.$store.state.users.isLogged;
      }
    }
  }
</script>

<style scoped>

</style>
