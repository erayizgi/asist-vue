<template>

	<section id="register">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-8 col-md-4" v-if="showLogin">
					<h2 class="title">GİRİŞ YAP</h2>
					<div class="login-form aa-form" v-if="!isLoading">
						<div v-bind:class="error.type" v-show="error.hasAny">
							<b>{{error.message}}</b>
						</div>
						<div class="form-group">
							<label>E-mail Adresiniz</label>
							<input v-validate="'required|email'" class="form-control"
							       :class="{'input': true, 'text-danger': errors.has('email') }" name="email"
							       type="text" v-model="email" placeholder="Email">
							<span v-show="errors.has('email')"
							      class="help text-danger">{{ errors.first('email') }}</span>
						</div>
						<div class="form-group">
							<label>Şifre</label>
							<input class="form-control" v-validate="'required|min:6'"
							       :class="{'input': true, 'text-danger': errors.has('password') }" type="password"
							       name="password" v-model="password"
							       @keydown.enter="login"
							>
							<span v-show="errors.has('password')" class="help text-danger">{{ errors.first('password') }}</span>
							<span @click="resetPassword(false)"
							      style="font-weight: bold; cursor: pointer; color: black!important;"
							      class="help text-danger float-right">Parolamı Unuttum</span>
						</div>
					</div>


					<div class="login-form aa-form" v-if="isLoading">
						<spinner/>
					</div>

					<div class="register-form-footer clearfix">
						<spinner v-if="isLoading"/>
						<button @click="login" class="float-right" v-if="!isLoading">GİRİŞ YAP <i
								class="fa fa-sign-in"></i></button>
					</div>

					<div class="login-with d-none d-md-block">
						<a href="" class="btn btn-block btn-social btn-facebook">
							<span class="fa fa-facebook-square"></span> Facebook ile giriş yap
						</a>
						<a href="" class="btn btn-block btn-social btn-google">
							<span class="fa fa-google-plus-square"></span> Google ile giriş yap
						</a>
					</div>
				</div>

				<div class="col-12 col-sm-8 col-md-4" v-if="!showLogin">
					<h2 class="title">PAROLAMI UNUTTUM</h2>
					<div class="login-form aa-form" v-if="!isLoading">
						<div v-bind:class="error.type" v-show="error.hasAny">
							<b>{{error.message}}</b>
						</div>
						<div class="form-group">
							<label>E-mail Adresiniz</label>
							<input v-validate="'required|email'" class="form-control"
							       :class="{'input': true, 'text-danger': errors.has('mail') }" name="email"
							       type="text" v-model="mail" placeholder="Email">
							<span v-show="errors.has('email')"
							      class="help text-danger">{{ errors.first('mail') }}</span>
							<span @click="resetPassword(true)"
							      style="font-weight: bold; cursor: pointer; color: black!important;"
							      class="help text-danger float-right">Parolamı Unuttum</span>

						</div>

					</div>
					<div class="register-form-footer clearfix">
						<spinner v-if="isLoading"/>
						<button @click="forgot" class="float-right" v-if="!isLoading">PAROLA SIFIRLA <i
								class="fa fa-sign-in"></i></button>
					</div>
				</div>

				<div class="col-12 col-sm-4 col-md-8 text-msg custom-padding d-none d-md-block">
					<h2>Eğer üye değilseniz <strong>hemen üye olun!</strong></h2>
				</div>
				<div class="col-12 subsection d-none d-md-block">
					<h3 class="title">Lorem ipsum dolor sit amet,</h3>
					<p>consectetur adipiscing elit. Quisque<br> at ullamcorper massa. </p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Spinner from '@/components/Common/Spinner';

	export default {
		name: "login",
		components: {Spinner},
		data() {
			return {
				error: {
					hasAny: false,
					message: '',
					type: ''
				},
				email: "",
				mail: "",
				password: "",
				isLoading: false,
				showLogin: true
			}
		},
		methods: {
			resetPassword(type) {
				this.showLogin = type;
			},
			forgot() {
				let data = {
					mail: this.mail.trim()
				};

				this.isLoading = true;

				this.$validator.validateAll().then(result => {
					if (result) {
						this.$store.dispatch("users/forgot", data).then(res => {
							this.isLoading = false;
							this.showLogin = true;
							this.$swal({title: 'Hata!', text: 'Parolanız SMS Olarak Size Gönderildi!', type: 'success'});
						}).catch(err => {
							this.isLoading = false;
							this.error.hasAny = true;
							this.error.message = "E-mail adresi yanlış";
							this.error.type = "alert alert-danger";
						});
					}
				});
			},
			login() {
				let data = {
					email: this.email.trim(),
					password: this.password.trim()
				};
				this.isLoading = true;
				this.$validator.validateAll().then(result => {
					if (result) {
						this.$store.dispatch("users/login", data).then(res => {
							this.$store.dispatch("users/me", this.$store.state.users.token).then(res => {
                this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {
                  this.isLoading = false;
                  this.$router.push("/");
                });
							})
						}).catch(err => {
							this.isLoading = false;
							this.error.hasAny = true;
							this.error.message = "E-mail adresi yada parolanız yanlış";
							this.error.type = "alert alert-danger";
						});
					}else{
					  this.isLoading = false;

          }
				});

			}
		}
	}
</script>

<style scoped>

</style>
