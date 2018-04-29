<template>

	<div class="col-12 col-md-9">
		<!-- login first -->
		<div class="shares" v-for="post in posts">
			<div class="profile-bar">
				<img :src="post.IMG" class="img-fluid" width="75" height="75" alt="">
				<router-link :to="`/${post.kullaniciAdi}`"><strong>{{post.adSoyad}}</strong></router-link>
				<em v-date-show="post.post_created_at"></em>
				<div class="float-right">
					<div class="dropdown">
						<button class="btn-coupon-status" type="button" data-toggle="dropdown" aria-haspopup="true"
						        aria-expanded="false">
							<i class="fas fa-ellipsis-h"></i>
						</button>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item facebook" target="_blank" href="#">
								<i class="fab fa-facebook"></i> Facebook'ta Paylaş
							</a>
							<a class="dropdown-item twitter" target="_blank" href="#">
								<i class="fab fa-twitter"></i> Twitter'da Paylaş
							</a>
							<a class="dropdown-item delete" target="_blank" href="javascript:;"
							   @click="deletePost(post.post_id)"
							   v-if="user.kullaniciAdi == post.kullaniciAdi">
								<i class="fas fa-times"></i> Paylaşımı Sil
							</a>
						</div>
					</div>
				</div>
			</div>
			<static-content v-if="post.paylasim_tipi===1" :post-content="post.paylasim_id"/>
			<coupon-content v-if="post.paylasim_tipi===2" :coupon-id="post.paylasim_id"/>
			<re-post v-if="post.paylasim_tipi===3" :post-id="post.paylasim_id"/>
		</div>
		<spinner v-if="isLoading"/>

	</div>

</template>

<script>
	import StaticContent from "../../Common/FeedComponents/StaticContent";
	import CouponContent from "../../Common/FeedComponents/CouponContent";
	import RePost from "../../Common/FeedComponents/RePost";
	import Spinner from "../../Common/Spinner";

	export default {
		name: "SingleFeed",
		components: {Spinner, RePost, CouponContent, StaticContent},
		props: [
			"userName"
		],
		data() {
			return {
				isLoading: false,
				page: 0,
				posts: {}
			}
		},
		created() {
			this.isLoading = true;
			this.$store.dispatch("posts/getUserSingleFeed", {username:this.userName,slug: this.$route.params.id}).then(res => {
				this.posts = res.data.data.data;
				this.isLoading = false;
			});
		},
		computed: {
			user() {
				return this.$store.state.users.user;
			}
		},
		methods: {
			humanReadableActivity(type) {
				if (type === "kupon") {
					return "bir kupon paylaştı"
				} else if (type === "post") {
					return "bir gönderi paylaştı"
				} else if (type === "postOnWall") {
					return "başka bir gönderiyi duvarında yayınladı"
				} else if (type === "comment") {
					return "bir gönderiye yorum yaptı"
				}
			},
			deletePost(post) {
				this.isLoading = true;

				this.$store.dispatch("posts/deletePost", post).then(res => {
					this.$store.dispatch("posts/getUserFeed", {username: this.userName, page: this.page}).then(res => {
						this.posts = res.data.data.data;
						this.isLoading = false;
					});
				}).catch(err => {
					this.isLoading = false;
					this.$swal({title: 'Hata!', text: 'ata', type: 'warning'});
				});
			}
		}
	}
	</script>