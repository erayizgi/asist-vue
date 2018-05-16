<template>
	<section id="profile-bar" v-if="user">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-9">
					<div class="row">
						<div class="col-12 user">
              <router-link :to="`/${user.data.kullaniciAdi}`">
							  <img :src="user.data.IMG" alt="" class="avatar">
              </router-link>
							  <strong>{{user.data.adSoyad}}</strong>
						</div>
					</div>
					<div class="row">
						<div class="col-12 user-stats clearfix">
              <span>TAKİPÇİ
                <router-link :to="`/${user.data.kullaniciAdi}/followers`">
                  <strong>{{user.followers}}</strong>
                </router-link>
              </span>
							<span>TAKİP <strong>{{user.following}}</strong></span>
							<span>KUPON <strong>{{user.coupons}}</strong></span>
							<span>KAZANAN <strong>{{user.won}}</strong></span>
							<span>KAYBEDEN <strong>{{user.lose}}</strong></span>
						</div>
					</div>
				</div>
				<follow v-if="this.$store.state.users.isLogged && this.$store.state.users.user.kullaniciAdi != this.userName" :follower="this.$store.state.users.user.kullaniciAdi" :following="user.data.kullaniciAdi"/>
			</div>
		</div>
	</section>
</template>

<script>
	import Follow from "../Profile/Follow";

	export default {
		components: {Follow},
		name: "profile-head",
		props: [
			"userName"
		],
		data() {
			return {
				user: null,
				isLoading: true
			}
		},
		created() {
			this.isLoading = true;
			this.$store.dispatch("users/getUser", this.userName).then(res => {
				this.user = res.data.data;
				this.isLoading = false;
			})

			console.log(this.$store.state.users.user.kullaniciAdi);
			console.log(this.userName);
		},
		methods:{
		}
	}
</script>

<style scoped>

</style>
