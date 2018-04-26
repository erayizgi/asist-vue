<template>
    <section id="todo-home">
        <div class="container task-detail-wrapper">
            <spinner v-if="isLoading"></spinner>
            <div class="row">
                <div class="col-12 col-sm-4 col-md-3">
                    <ul class="subpage-list-menu">
                        <li v-for="list in pages">
                            <router-link :to="`/pages/${list.URL}`">{{list.sayfaBaslik}}</router-link>
                        </li>
                        <!--<li class="active"><a href="profil-3.html">Profil Resmi İşlemleri</a></li>-->
                    </ul>
                </div>
                <div class="col-12 col-sm-8 col-md-9 task-detail">
                    <h4 class="sub-title">{{ page.sayfaBaslik }}</h4>
                    <div class="row nomargin">
                        <p v-html="page.sayfaAciklama"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Spinner from "./Spinner";
    export default {
        name: "Pages",
        components: {Spinner},
        data() {
            return {
                page: null,
                pages: null,
                isLoading: false
            }
        },

        created() {
            this.isLoading = true;

            this.$store.dispatch("common/getPages").then((res) => {
                this.pages = res.data.data.data;
                this.isLoading = false;
            });

            this.$store.dispatch("common/getPageDetail", {slug: this.$route.params.slug}).then((res) => {

                this.page = res.data.data.data;
                this.isLoading = false;
            });
        },


    }
</script>

<style scoped>

</style>