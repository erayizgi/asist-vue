<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from './components/Common/AppHeader';
  import TopGames from './components/Common/TopGames';
  import AppFooter from "./components/Common/AppFooter";

  export default {
    name: 'App',
    components: {
      AppFooter,
      AppHeader, TopGames},
    beforeMount() {
      if (this.$store.state.users.isLogged === false) {
        if (this.$store.state.users.token != null) {
          this.$store.dispatch("users/me", this.$store.state.users.token).then(res => {
            this.$store.state.users.isLogged = true;
            this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {

            });
          });
        } else {
          if (localStorage.getItem("token")) {
            this.$store.state.users.token = localStorage.getItem("token");
            this.$store.dispatch("users/me", localStorage.getItem("token")).then(res => {
              this.$store.state.users.isLogged = true;
              this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {

              });
            });

          }
        }
      }
    }
  }
</script>


