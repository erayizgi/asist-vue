<template>
    <div class="follow">
        <h3 class="title">TAKİP ÖNERİLERİ</h3>
        <ul>
            <!-- single recommendation-->
            <li class="clearfix" v-for="tipper in tippers">
                <img :src="tipper.IMG" class="float-left" alt="">
                <div class="float-left">
                    <strong>{{ tipper.adSoyad }}</strong>
                    <follow :t-class="'col-12 profile-buttons '" :follower="user.kullaniciAdi" :following="tipper.kullaniciAdi"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Follow from "../Users/Profile/Follow";
    export default {
        name: "follow-suggestions",
        components: {Follow},
        data() {
            return {
                isLoading: false
            }
        },

        created() {
            this.isLoading = true;

            this.$store.dispatch("common/getTippers").then((res) => {

            });

        },


        computed: {
            user(){
                return this.$store.state.users.user;
            },
            tippers() {
                return this.$store.state.common.tippers;
            }
        }
    }
</script>

<style scoped>

</style>
