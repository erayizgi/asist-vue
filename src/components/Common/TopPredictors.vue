<template>
    <section id="best-predictors-of-week" class="container-fluid d-none d-md-block">
        <div class="row seven-cols">
            <div class="col-md-7th best-predictor-title-bg">
                <div class="best-predictor-title"><img src="static/images/icon-cup.png" alt=""> Bu haftanın en iyi
                    tahmincileri
                </div>
            </div>
            <!-- single predictor -->
            <div class="col-md-7th" v-for="predictor in predictors">
                <div class="predictor clearfix">
                    <div class="predictor-avatar float-left">
                        <img :src="predictor.IMG" alt="" style="width: 70px!important; height: 70px!important">
                    </div>
                    <div class="predictor-detail float-left">
                        <span>{{ predictor.kullaniciAdi}}</span>
                        <strong>%{{ score(predictor.yuzde)}}</strong>
                        <follow v-if="isLogged" :follower="user.kullaniciAdi" :following="predictor.kullaniciAdi"/>
                        <a v-if="!isLogged" href="javascript:;" @click="followUser">Takip Et</a>
                        <!-- <follow :follower="user.kullaniciAdi" :t-class="'col-12 profile-buttons'" :following="usr.data.kullaniciAdi"/> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Follow from "../Users/Profile/Follow";

    export default {
        name: "top-predictors",
        components: {Follow},
        data() {
            return {
                predictors: null
            }
        },

        methods: {
            followUser() {
                this.$swal({title: 'Hata', text: 'Kullanıcı Takip Etmek için Giriş Yapmalısınız!', type: 'warning'});
            },

            score(score){
              return  parseFloat(score).toFixed(2);
            },
        },

        computed: {
            user() {
                return this.$store.state.users.user;
            },
            isLogged() {
                return this.$store.state.users.isLogged;
            }
        },

        created() {
            this.isLoading = true;

            this.$store.dispatch("common/getTopPredictors").then((res) => {
                this.predictors = res.data.data;
            });
        },
    }
</script>

<style scoped>

</style>
