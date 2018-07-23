<template>
    <footer>
        <div class="container">
            <div class="row logo">
                <div class="col-12 nopadding">
                    <img src="/static/images/logo-footer-asistanaliz.png" alt="">
                </div>
            </div>
            <div class="row menu">
                <div class="col-8 col-sm-6 col-md-6 nopadding">
                    <ul class="row footer-menu">
                        <li  v-for="page in pages" class="col-md-6">
                            <router-link :to="`/pages/${page.URL}`">{{page.sayfaBaslik}}</router-link>
                        </li>
                    </ul>
                </div>
                <!--
                <div class="col-6 col-sm-4 col-md-2 nopadding">
                    <ul class="footer-menu">
                        <li><a href="javascript:void(0)">Sıkça Sorulan Sorular</a></li>
                        <li><a href="javascript:void(0)">Mobil Uygulama</a></li>
                        <li><a href="javascript:void(0)">Biten Transferler</a></li>
                        <li><a href="javascript:void(0)">Şikayet ve Önerileriniz</a></li>
                        <li><a href="javascript:void(0)">Üyelik/Gizlilik Sözleşmesi</a></li>
                    </ul>
                </div>
                -->
            </div>
            <div class="row social-icons">
                <div class="col-12">
                    <a href="#"><img src="/static/images/icon-footer-facebook.png" alt=""></a>
                    <a href="#"><img src="/static/images/icon-footer-twitter.png" alt=""></a>
                    <a href="#"><img src="/static/images/icon-footer-instagram.png" alt=""></a>
                </div>
            </div>
            <div class="row store-icons">
                <div class="col-12">
                    <a href="#"><img src="/static/images/apple-store.png" alt=""></a>
                    <a href="#"><img src="/static/images/google-play.png" alt=""></a>
                </div>
            </div>
            <div class="row warning">
                <div class="col-12 clearfix">
                    <img src="/static/images/icon-footer-age-restriction.png" class="float-left" alt="">
                    <p>AsistAnaliz.com’a sadece 18 yaşından büyükler üye olabilir.</p>
                    <p>Sitede editörler ve kullanıcılar tarafından paylaşılan bilgiler kesinlik içermez.</p>
                    <p>Oluşabilecek hatalardan ve maddi/manevi zararlardan AsistAnaliz sorumlu tutulamaz.</p>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "app-footer",

        data() {
            return {
                isLoading: false
            }
        },

        created() {
            this.isLoading = true;

            if(this.$store.state.common.pages.length === 0){
                this.$store.dispatch("common/getFooterPages").then((res) => {});
            }
        },

        computed:{
            pages(){
                return this.$store.state.common.pages;
            }
        }
    }
</script>

<style scoped>

</style>
