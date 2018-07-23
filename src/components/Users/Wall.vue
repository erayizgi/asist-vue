<template>
	<div v-if="!isLoading">
		<profile-head :user-name="user.kullaniciAdi"/>
		<!-- send user message modal -->

		<section id="user-profile-menu-bar">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-8 col-md-9">
						<ul class="profile-menu clearfix">
							<li :class="`${(feed)? 'active':''}`">
								<a href="javascript:void(0)" @click="showFeed">TÜM GÖNDERİLER <i
										class="fa fa-chevron-down"></i></a>
							</li>
							<li :class="`${(coupon)? 'active':''}`">
								<a href="javascript:void(0)" @click="showCoupon">PAYLAŞTIĞI KUPONLAR <i
										class="fa fa-chevron-right"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section id="home-content">
			<div class="container">
				<div class="row">
					<user-feed :user-name="user.kullaniciAdi" v-if="feed && !isSingleFeed"/>
					<coupon-feed :user-name="user.kullaniciAdi" v-if="coupon && !isSingleFeed"/>
					<single-feed :user-name="user.kullaniciAdi" v-if="isSingleFeed"/>
					<div class="col-12 col-sm-4 col-md-3" >
            <div class="task-list" v-if="amI">
              <h3 class="title">YAPILACAKLAR LİSTESİ</h3>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" :style="`width: ${calculateDutyProgress()}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{calculateDutyProgress().toFixed(2)}}%</div>
              </div>
              <ul>
                <li class="clearfix" v-for="mission in missions">
                  <a href="#" class="task">{{mission.duty.gorev_adi}}</a>
                  <span class="status done" v-if="mission.tamamlandi===1"><i class="fas fa-check"></i></span>
                  <span class="status" v-if="mission.tamamlandi===0"></span>
                </li>
              </ul>
            </div>
						<follow-suggestions/>
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
	import SingleFeed from "./Wall/SingleFeed";

	export default {
		components: {
			SingleFeed,
			FollowSuggestions,
			CouponFeed,
			UserFeed,
			ProfileHead
		},
		name: "wall",
    props:[
      "user_name"
    ],
		data() {
			return {
				feed: true,
				coupon: false,
        isLoading:true,
        user:null
			}
		},
    created(){
		  if(this.$store.state.users.user){
        this.$store.dispatch("common/getActiveDuty").then(()=>{
          this.$store.dispatch("common/getMissions",this.$store.state.common.activeDuty).then();
        })
      }
      this.$store.dispatch("users/getUser",this.$route.params.user_name).then((res)=>{
        this.user = res.data.data.data;
        this.isLoading = false;

      });
    },
		methods: {
			showFeed() {
				this.coupon = false;
				this.feed = true;
			},
			showCoupon() {
				this.feed = false;
				this.coupon = true;
			},
			showActive() {

			},
      calculateDutyProgress(){
			  if(this.$store.state.common.activeMissions.length > 0){
          let progress = 0;
          this.$store.state.common.activeMissions.forEach(item=>{
            if(item.tamamlandi === 1){
              progress++;
            }
          });
          return (progress/this.$store.state.common.activeMissions.length)*100;
        }else{
			    return 0;
        }

      }
		},

		computed:{
			isSingleFeed(){
				return (this.$route.params.id);
			},
      missions(){
			  return this.$store.state.common.activeMissions;
      },
      amI(){
			  if(this.$store.state.users.user){
          return (this.$store.state.users.user.kullaniciAdi === this.$route.params.user_name)
        }else{
			    return false
        }
      },
		},
	}
</script>

<style scoped>

</style>
