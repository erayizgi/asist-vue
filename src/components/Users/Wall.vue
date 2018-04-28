<template>
  <div>
    <profile-head :user-name="this.$route.params.user_name"/>
    <!-- send user message modal -->

    <section id="user-profile-menu-bar">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-9">
            <ul class="profile-menu clearfix">
              <li :class="`${(feed)? 'active':''}`">
                <a href="javascript:void(0)" @click="showFeed">TÜM GÖNDERİLER <i class="fa fa-chevron-down"></i></a>
              </li>
              <li :class="`${(coupon)? 'active':''}`">
                <a href="javascript:void(0)" @click="showCoupon">PAYLAŞTIĞI KUPONLAR <i class="fa fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="home-content">
      <div class="container">
        <div class="row">
          <user-feed :user-name="this.$route.params.user_name" v-if="feed"/>
          <coupon-feed :user-name="this.$route.params.user_name" v-if="coupon"/>
          <div class="col-12 col-sm-4 col-md-3">

	          <follow-suggestions/>

            <div class="follow" style="display: none">
              <h3 class="title">TAKİP ÖNERİLERİ</h3>
              <ul>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ProfileHead from "./Wall/ProfileHead";
  import UserFeed from "./Wall/UserFeed";
  import CouponFeed from "./Wall/CouponFeed";
  import FollowSuggestions from "../Common/FollowSuggestions";

  export default {
    components: {
	    FollowSuggestions,
      CouponFeed,
      UserFeed,
      ProfileHead
    },
    name: "wall",

	  data(){
    	return {
		    feed: true,
		    coupon: false,

	    }
	  },

	  methods:{
    	showFeed(){
            this.coupon = false;
            this.feed = true;
	    },

	    showCoupon(){
    		this.feed = false;
    		this.coupon = true;
	    },

	    showActive(){

	    }
	  }
  }
</script>

<style scoped>

</style>
