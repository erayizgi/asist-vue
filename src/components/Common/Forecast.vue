<template>
    <section class="commented-matches">
        <div class="container">
            <div class="row">

                <!-- MATCH LIST -->
                <div class="col-12 col-sm-8 col-md-9">

                    <h1 class="page-title with-border">YORUM YAPILAN MAÇLAR</h1>

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col" width="30">KOD</th>
                            <th scope="col">LİG</th>
                            <th scope="col">EV SAHİBİ - KONUK TAKIM</th>
                            <th scope="col" width="60">İNCELE</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="!isLoading" v-for="forecast in setForecast">
                            <td scope="row">{{forecast.event_oid}}</td>
                            <td>{{ forecast.league_name }}</td>
                            <td><a href="do-comment.html">{{ forecast.home }} - {{ forecast.away }}</a></td>
                            <td>
                                <router-link :to="`/forecast/${forecast.identifier_id}`" class="btn btn-sm btn-info">Yorum Yap</router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <a class="btn-load-more" @click="loadMore">DAHA FAZLA YÜKLE</a>
                </div>

                <div class="col-12 col-sm-4 col-md-3">
                    <follow-suggestions/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FollowSuggestions from "./FollowSuggestions";
    export default {
        name: "Forecast",
        components: {FollowSuggestions},
        data(){
            return {
                setForecast: null,
                isLoading: false,
                page: 0
            };
        },

        created(){
            this.isLoading = true;

            this.$store.dispatch("common/getForecast", {limit: 10, page: 0}).then((res) => {
                this.setForecast = res.data.data.data;
                this.isLoading = false;
            })
        },

        methods: {
            loadMore(){
                this.page++;
                this.isLoading = true;
                this.$store.dispatch("common/getForecast", {limit: 10, page: this.page}).then(res => {
                    this.isLoading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
