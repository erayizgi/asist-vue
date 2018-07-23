<template>
	<section id="todo-home">
		<div class="container task-detail-wrapper">
			<div class="row">
				<profile-nav/>
				<div class="col-12 col-sm-8 col-md-9 task-detail">
					<h4 class="sub-title">GENEL HESAP AYARLARI</h4>
					<div class="row nomargin">
						<div class="form-group col-12">
							<label>Yeni Parola</label>
							<input class="form-control" type="password" name="pass" v-model="password_x">
						</div>
						<div class="form-group col-12">
							<label>Parola Tekrarı</label>
							<input class="form-control" type="password" name="repass" v-model="password_y">
						</div>
					</div>
					<button class="btn btn-primary btn-block" @click="updatePassword()">BİLGİLERİ KAYDET</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import ProfileNav from "./Profile/ProfileNav";
	export default {
		name: "Reset",
		components: {ProfileNav},

		data(){
			return {
				isLoading : false,
				password_x: "",
				password_y: ""
			}
		},

		created(){
			if(!this.$store.state.users.isLogged){
				if(!localStorage.getItem("token")){
					this.$router.push("/");
				}
			}else{
				this.userData = this.$store.state.users.user;
			}
		},

		computed:{
			isLogged(){
				return this.$store.state.users.isLogged
			}
		},

		methods:{
			updatePassword(){
				this.$store.dispatch('users/reset', {password: this.password_x}).then((res) => {
					this.$swal({title: 'Hata', text: 'Parolanız Başarılı Bir Şekilde Değiştirildi!', type: 'warning'})
				}).catch(err => {
					this.$swal({title: 'Hata', text: err.response.data.message, type: 'warning'});
				});

				/*
				if(this.password_x == this.password_y){
					this.$store.dispatch("users/passwordReset", {password: this.password_x}).then((res) => {
						console.log(res);
					}).catch(err => {
						this.isLoading = false;
						console.log(res);
					});
				}else{
					this.$swal({title: 'Hata', text: 'Lütfen Paroların Eşit Olduğundan Emin Olunuz!', type: 'warning'})
				}
				*/
			}
		}
	}
</script>

<style scoped>

</style>