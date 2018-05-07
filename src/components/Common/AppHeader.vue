<template>
	<header>
		<div class="top-menu container-fluid nopadding">
			<div class="row nomargin">
				<div class="logo col-12 col-md-4 nopadding">
					<router-link to="/"><img src="/static/images/logo.png" alt=""></router-link>
				</div>
				<div class="links col-12 col-md-8 nopadding" v-if="!isLogged">
					<div class="menu">
						<a href="#"><img src="static/images/google-play.png"></a>
						<a href="#"><img src="static/images/apple-store.png"></a>
						<a href="#" class="space"></a>
						<router-link to="/register">ÜYE OL <i class="fa fa-user-plus"></i></router-link>
						<router-link to="/login">GİRİŞ YAP <i class="fas fa-sign-in-alt"></i></router-link>
					</div>
				</div>
				<logged-user v-else/>
			</div>
		</div>
		<!-- mobile menu -->
		<nav class="d-bp1360-none ts-sticky-top">
			<div class="navbar mobile-menu">
				<!--<a class="navbar-brand" href="#">&nbsp;</a>-->
				<button class="navbar-toggler mt-1" type="button" data-slide="left" @click="expandMenu">
					<i class="fa fa-bars"></i>
				</button>
				<transition name="fade">
					<div class="navbar-mobile" id="navbarNav" v-if="menu">
						<div class="clearfix">
							<a class="btn-close float-right" @click="expandMenu" data-slide="left"><i
									class="fa fa-times"></i></a>
						</div>
						<ul class="navbar-nav">
							<li class="nav-item">
								<router-link to="/streaming"><i class="fas fa-rss-square"></i> YAYINLAR</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/tippers"><i class="fas fa-users"></i> TAHMİNCİLER</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/forecast"><i class="fas fa-bullseye"></i> TAHMİN</router-link>
							</li>
							<li class="nav-item">
								<a href="#"><i class="fas fa-chart-bar"></i> İSTATİSTİKLER</a>
							</li>
							<li class="nav-item">
								<router-link to="/news"><i class="far fa-newspaper"></i> HABERLER</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/duties"><i class="fas fa-list"></i> GÖREVLER</router-link>
							</li>
						</ul>
					</div>
				</transition>
			</div>
		</nav>
		<!-- MAIN MENU -->
		<nav class="d-bp1360-block ts-sticky-top">
			<div class="main-menu">
				<div class="navbar-wrapper-kek"></div>
				<div class="navbar-wrapper">
					<ul class="navbar-menu clearfix">
						<li class="navbar-menu-item">
							<a href="#"><i class="fas fa-rss-square"></i>ANASAYFA</a>
							<ul class="sub-menu-list" v-if="isLogged">
								<li class="cleafix">
									<a href="/"><i class="fas fa-microphone"></i><span>FEED</span></a>
								</li>
								<li class="cleafix">
									<router-link :to="`/${user.kullaniciAdi}`">DUVARIM</router-link>
								</li>
							</ul>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/streaming"><i class="fas fa-rss-square"></i> YAYINLAR</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/tippers"><i class="fas fa-users"></i> TAHMİNCİLER</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/news"><i class="far fa-newspaper"></i> HABERLER</router-link>
						</li>
						<li class="navbar-menu-item">
							<a href="#"><i class="fas fa-chart-bar"></i> İSTATİSTİKLER</a>
							<ul class="sub-menu-list">
								<li class="cleafix">
									<a href="#"><i class="fas fa-plus"></i><span>CANLI SKOR</span></a>
								</li>
							</ul>
						</li>

						<li class="navbar-menu-item">
							<router-link to="/forecast"><i class="fas fa-bullseye"></i> TAHMİN</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/duties"><i class="fas fa-list"></i> GÖREVLER</router-link>
						</li>

					</ul>
				</div>
				<!--
				<div class="navbar-wrapper">
					<ul class="navbar-menu clearfix">
						<li class="navbar-menu-item">
							<router-link to="/streaming"><i class="fas fa-rss-square"></i> YAYINLAR</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/tippers"><i class="fas fa-users"></i> TAHMİNCİLER</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/forecast"><i class="fas fa-bullseye"></i> TAHMİN</router-link>
						</li>
						<li class="navbar-menu-item">
							<a href="#"><i class="fas fa-chart-bar"></i> İSTATİSTİKLER</a>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/news"><i class="far fa-newspaper"></i> HABERLER</router-link>
						</li>
						<li class="navbar-menu-item">
							<router-link to="/duties"><i class="fas fa-list"></i> GÖREVLER</router-link>
						</li>
						<li class="space"></li>
						<li class="store"><a href="#"><img  src="static/images/google-play.png"></a></li>
						<li class="store"><a href="#"><img   src="static/images/apple-store.png"></a></li>
						<li class="space"></li>
						<li class="social"><a href="#"><img src="static/images/icon-facebook.png"></a></li>
						<li class="social"><a href="#"><img src="static/images/icon-twitter.png"></a></li>
						<li class="social"><a href="#"><img src="static/images/icon-instagram.png"></a></li>
					</ul>
				</div>
				-->
			</div>
			<div class="sub-menu clearfix" style="display:none"></div>
		</nav>
	</header>

</template>

<script>
	import LoggedUser from '../Users/LoggedUser';

	export default {
		components: {LoggedUser},
		name: "app-header",
		computed: {
			user() {
				return this.$store.state.users.user;
			},
			isLogged() {
				return this.$store.state.users.isLogged;
			}
		},
		data() {
			return {
				menu: false
			}
		},
		methods: {
			expandMenu() {
				this.menu = !this.menu;
			}
		}

	}
</script>

<style scoped>

</style>
