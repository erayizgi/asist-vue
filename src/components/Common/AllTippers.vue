<template>
	<div class="container" id="user-list">
		<div class="row mb-15">
			<div class="col-12">
				<h1 class="title with-border">TÜM TAHMİNCİLERİMİZ</h1>
				<p class="text-muted">Sektörün en başarılı tahmincileri..</p>
			</div>
		</div>
		<div class="row mb-15">
			<!-- single user -->
			<div class="col-12 col-md-6"  v-for="tipper in tippers" @click="profile(tipper.kullaniciAdi)" style="cursor: pointer">
				<div class="user-card clearfix" style="min-height: 165px!important">
					<div class="avatar float-left">
						<img :src="tipper.IMG" style="width:60px;height:60px;">

					</div>
					<div class="info float-right">
						<div class="clearfix user">
							<strong class="float-left">{{ tipper.adSoyad}}</strong>
							<follow v-if="isLogged" :t-class="'col-4 profile-buttons pull-right'" :follower="user.kullaniciAdi" :following="tipper.kullaniciAdi"/>
						</div>
						<span class="about">{{ tipper.kullaniciHakkinda }}</span>
						<div class="stats">
							<a href="#"><strong>{{tipper.followers}}</strong> TAKİPÇİLER</a>
							<a href="#"><strong>{{tipper.following}}</strong> TAKİP EDİLEN</a>
							<a href="#"><strong>{{tipper.won}}</strong> KAZANAN KUPON</a>
							<a href="#"><strong>{{ tipper.lose }}</strong> KUPON</a>
						</div>
					</div>
				</div>
			</div>
			<!-- single user -->
		</div>
		<div class="row">
			<div class="col-12">
				<a href="#" class="btn-load-more">DAHA FAZLA YÜKLE</a>
			</div>
			<spinner v-if="isLoading" />
		</div>
	</div>
</template>

<script>
	import Follow from "../Users/Profile/Follow";
	import Spinner from "./Spinner";

	export default {
		name: "AllTippers",
		components: {Spinner, Follow},
		data(){
			return {
				isLoading: false
			}
		},
		methods: {
			profile(user){
				this.$router.push(user)
			},
		},

		computed: {
			user() {
				return this.$store.state.users.user;
			},
			isLogged() {
				return this.$store.state.users.isLogged;
			},
			tippers() {
				return this.$store.state.common.tippers;
			}
		},

		created() {
			this.isLoading = true;
			this.$store.dispatch("common/getTippers").then((res) => {
				this.isLoading = false;
			});
		},
	}
</script>

<style scoped>

</style>