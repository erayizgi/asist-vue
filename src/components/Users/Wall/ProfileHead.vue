<template>
  <section id="profile-bar">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-9">
          <div class="row">
            <div class="col-12 user">
              <img :src="user.data.IMG" alt="" class="avatar">
              <strong>{{user.data.adSoyad}}</strong>
              <span>%62.62</span>
              <div class="wons">
                <strong>KAZANDIĞI LİGLER</strong>
                <div class="badge">
                  <i class="fas fa-trophy"></i>
                  <span>5</span>
                </div>
              </div>
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
              <span>KUPON <strong>214</strong></span>
              <span>KAZANAN <strong>134</strong></span>
              <span>KAYBEDEN <strong>80</strong></span>
            </div>
          </div>
        </div>
        <follow :follower="this.$store.state.users.user.kullaniciAdi" :following="user.data.kullaniciAdi"
                v-if="this.$store.state.users.isLogged"/>
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
        user: {}
      }
    },
    created() {
      this.$store.dispatch("users/getUser", this.userName).then(res => {
        this.user = res.data.data;
      })
    }
  }
</script>

<style scoped>

</style>
