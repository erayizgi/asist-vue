<template>

	<section id="newspage">

		<div class="header">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1 class="title">HABERLER</h1>
					</div>
				</div>
			</div>
		</div>
		<spinner v-if="isLoading"></spinner>
		<div class="container newsdet">
			<div class="row">
				<!-- news content -->

				<div class="col-12 col-md-8 col-lg-9 news-detail">
					<div class="top clearfix">
						<div class="float-left" v-date-show="details.yayinlanmaTarihi"></div>
						<div class="float-right clearfix">
							<button style="height: 37px;" class="btn-facebook"><i class="fab fa-facebook-f"></i>
							</button>
							<button style="height: 37px;" class="btn-twitter"><i class="fab fa-twitter"></i></button>
							<button style="height: 37px;" class="btn-google-plus"><i class="fab fa-google-plus-g"></i>
							</button>
							<button style="height: 37px;" class="btn-pinterest"><i class="fab fa-pinterest-p"></i>
							</button>
						</div>
					</div>
					<div class="news">
						<img :src="checkCdn(details.haberGorsel)" alt="" style="width: 100%"
						     class="img-fluid news-image">
						<h1 class="title">{{details.haberBaslik}}</h1>
						<span class="excerpt">{{details.haberOzet}}</span>
						<p v-html="details.haberAciklama"></p>
					</div>
					<div class="ad-720">
						<img src="out_source/ad-728.png" class="img-fluid" alt="">
					</div>
				</div>
				<!-- right column -->
				<div class="col-12 col-md-4 col-lg-3">
					<h4 class="title with-border">Köşe Yazıları</h4>
					<ul class="news-list">
						<!--single news-->
						<li v-for="side in sideNews">
							<a :href="`/news/${side.URL}`" class="clearfix" v-if="!isLoading">
								<img :src="side.IMG" alt="" style="width: 50px; border: 2px solid #ddd"
								     class="rounded-circle">
								{{side.haberBaslik}}
							</a>
						</li>
						<!--single news-->
					</ul>
					<div class="ad-250">
						<img src="out_source/ad-250.png" class="img-fluid" alt="">
					</div>
					<div class="ad-250">
						<img src="out_source/ad-250-2.png" class="img-fluid" alt="">
					</div>
				</div>
			</div>
			<div class="row news-bottom">
				<div class="col-12">
					<h3 class="title with-border">Benzer Haberler</h3>
				</div>
				<!-- single item -->
				<div class="col-3 col-sm-6 col-lg-3 item" v-for="b in bottom">
					<router-link :to="`/news/${b.URL}`">
						<img :src="checkCdn(b.haberGorsel)" class="img-fluid" alt="">
						<strong>{{b.haberBaslik}}</strong>

					</router-link>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
	import Spinner from "./Spinner";

	export default {
		name: "NewsDetail",
		components: {Spinner},
		data() {
			return {
				details: null,
				bottom: null,
				isLoading: false
			}
		},

		created() {
			this.isLoading = true;

			//TODO:Chain

			// Details
			this.$store.dispatch("common/getNewsDetail", {slug: this.$route.params.slug}).then((res) => {
				this.details = res.data.data.data;
				this.isLoading = false;
			});

			// Side News
			this.$store.dispatch("common/getSideNews", {limit: 5}).then();

			// Bottom News
			this.$store.dispatch("common/getNewsPage", {limit: 5, page: 1}).then((res) => {
				this.bottom = res.data.data.data;
			});
		},

		computed: {
			sideNews() {
				return this.$store.state.common.sideNews;
			}
		},

		methods: {
			checkCdn(url) {
				if (url.indexOf("http://res") >= 0) {
					return url;
				} else {
					console.log(url);
					return "http://facetahmin.e-panelim.com/assets/images/" + url;
				}
			},
		}
	}

</script>

<style scoped>

</style>
