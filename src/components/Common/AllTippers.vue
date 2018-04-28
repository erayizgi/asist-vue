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
			<div class="col-12 col-md-6"  v-for="tipper in tippers" >
				<div class="user-card clearfix" style="min-height: 165px!important">
					<div class="avatar float-left">
						<img :src="tipper.IMG" style="width:60px;height:60px;">

					</div>
					<div class="info float-right">
						<div class="clearfix user">
							<strong class="float-left">{{ tipper.adSoyad}}</strong>
							<span class="pull-right">Takip et karısını sik</span>
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
		</div>
	</div>
</template>

<script>
	export default {
		name: "AllTippers",
		data(){
			return {
				isLoading: false
			}
		},
		methods: {

		},

		computed: {
            tippers(){
            	return this.$store.state.common.tippers;
            }
		},

		created() {
			this.isLoading = true;
			this.$store.dispatch("common/getTippers").then((res) => {});
		},
	}
</script>

<style scoped>

</style>