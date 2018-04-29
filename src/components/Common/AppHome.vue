<template>
  <div id="home-asist-wrapper" v-if="!isLoading">
    <top-games v-if="!isLogged"/>
    <top-predictors v-if="!isLogged"/>
    <main-slider v-if="!isLogged"/>
    <div class="container" v-if="!isLogged">
      <div class="row">
        <coupons-home v-if="!isLogged"/>
      </div>
    </div>
    <section id="sub-section" class="d-none d-md-block" v-if="!isLogged">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <h2 class="title">Lorem ipsum dolor sit amet,</h2>
            <p>consectetur adipiscing elit. Quisque at ullamcorper massa.</p>
          </div>
        </div>
      </div>
    </section>
    <news-home v-if="!isLogged"/>
    <user-bar v-if="isLogged"/>
    <logged-wrapper v-if="isLogged"/>
  </div>
  <spinner v-else/>
</template>

<script>
  import TopGames from './TopGames';
  import TopPredictors from "./TopPredictors";
  import UserBar from "../Users/UserBar";
  import LoggedWrapper from "./LoggedWrapper";
  import MainSlider from "./MainSlider";
  import CouponsHome from "./CouponsHome";
  import NewsHome from "./NewsHome";
  import Spinner from "./Spinner";

  export default {
    name: "app-home",
    components: {
      Spinner,
      NewsHome,
      CouponsHome,
      MainSlider,
      LoggedWrapper,
      UserBar,
      TopPredictors,
      TopGames
    },
    data(){
      return {
        isLoading:true
      }
    },
    created() {
      this.isLoading = false;
    },
    computed: {
      isLogged() {

        return this.$store.state.users.isLogged;
      }
    }
  }
</script>

<style scoped>

</style>
