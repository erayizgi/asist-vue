<template>
	<div class="container" id="user-list">
		<spinner v-if="isLoading" />
		<div class="row mb-15">
			<div class="col-12">
				<h1 class="title with-border">KULLANICI ARA</h1>
				<p class="text-muted" >Arama Sonucu</p>
			</div>
		</div>
		<div class="row mb-15">
			<div class="alert alert-warning" v-if="datas.length == 0" style="width: 100%">
				<strong>Sonuç Yok!</strong> <br> Aradığınız bilgilere ait böyle bir kullanıcı bulunamadı.
			</div>
			<!-- single user -->
			<div class="col-12 col-md-6"  v-for="data in datas"  style="cursor: pointer" @click="profile(data.kullaniciAdi)">
				<div class="user-card clearfix" style="min-height: 100px!important">
					<div class="avatar float-left">
						<img :src="data.IMG" style="width:60px;height:60px;">

					</div>
					<div class="info float-right">
						<div class="clearfix user">
							<strong class="float-left">{{ data.adSoyad}}</strong>
						</div>
						<span class="about">{{ data.kullaniciHakkinda }}</span>

					</div>
				</div>
			</div>
			<!-- single user -->
		</div>
		<div class="row">

		</div>
	</div>
</template>

<script>

	import Spinner from "../Common/Spinner";
	export default {
		name: "Search",
		components: {Spinner},
		methods: {
			profile(user){
				this.$router.push('/'+user)
			},
			searchUser() {
				this.searchDisabled = true;
				this.$store.dispatch("users/searchUser", {username: this.$route.params.username}).then(res => {
					this.datas = res.data.data.data;
				});
			},
		},
		created() {
			this.$store.dispatch("users/searchUser", {username: this.$route.params.username}).then(res => {
				this.datas = res.data.data.data;
			});
		},
		computed: {},
		data() {
			return {
				uname: null,
				datas: null,
				isLoading: false,
				searchDisabled: false,
			}
		},

	}

</script>
