<template>
    <section id="newspage">

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">HABERLER</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="teams-carousel">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div id="teams-carousel">
                            <div class="items">
                                <a href="#"><img src="out_source/icon-galatasaray.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-besiktas.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-kayserispor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-trabzonspor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-galatasaray.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-besiktas.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-kayserispor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-trabzonspor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-galatasaray.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-besiktas.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-kayserispor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-trabzonspor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-galatasaray.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-besiktas.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-kayserispor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-trabzonspor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-galatasaray.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-besiktas.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-kayserispor.png" alt=""></a>
                                <a href="#"><img src="out_source/icon-trabzonspor.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MAIN NEWS SLIDER -->
        <div class="slider">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-nopadding-md-down">
                        <div id="newspage_main_news_slider" class="carousel slide clearfix" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#newspage_main_news_slider" data-slide-to="0" class="active">01</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="1">02</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="2">03</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="3">04</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="4">05</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="5">06</li>
                                <li data-target="#newspage_main_news_slider" data-slide-to="6">07</li>
                            </ol>
                            <div class="carousel-inner slides" v-if="!isLoading">
                                <!-- single slide -->
                                <div :class="sliderActive(index)" v-for="(slider, index) in sliders">
                                    <router-link :to="`/news/${slider.URL}`">
                                        <img :src="'http://facetahmin.e-panelim.com/assets/images/'+slider.haberGorsel" class="img-fluid" alt="">
                                        <strong>{{slider.haberBaslik}}</strong>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- NEWS -->
        <div class="container">
            <div class="row">
                <!-- single news -->
                <div :class="subSlidersFirst(index)" v-for="(subSlider, index) in subSliders">
                    <router-link :to="`/news/${subSlider.URL}`">
                        <img :src="'http://facetahmin.e-panelim.com/assets/images/'+subSlider.haberGorsel" alt="" class="img-fluid">
                        <div>
                            <strong>{{subSlider.haberBaslik}}</strong>
                            <span class="d-none d-sm-block">{{subSlider.haberBaslik}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- VIDEOS -->
        <div class="videos">
            <div class="container">
                <div class="row">
                    <div class="col-12 header clearfix">
                        <span class="title"><i class="fas fa-video"></i> Video</span>
                        <a href="#" class="float-right">Video Haber Arşivi</a>
                    </div>
                </div>
                <div class="row items">
                    <!-- single news -->
                    <div class="col-12 col-md-4 news" v-for="(video, index) in videos">
                        <a href="javascript:;" data-toggle="modal" :data-target="'#show_video_'+index">
                            <img :src="video.image" alt="" class="img-fluid" style="width: 350px!important; height: 200px!important">
                            <strong>{{video.haberBaslik}}</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="(n, index) in videos" class="modal fade" :id="'show_video_'+index" tabindex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLongTitle">Video Önizlemesi</h4>
                    </div>
                    <div class="modal-body">
                        <div class="embed-responsive embed-responsive-16by9" v-html="n.text"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-aa-dark" data-dismiss="modal">Kapat</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- NEWS -->
        <div class="container news-area">
            <div class="row">
                <!-- single news -->
                <div class="col-12 col-sm-6 col-md-4 news" v-for="c in bottomNews">
                    <router-link :to="`/news/${c.URL}`">
                        <img :src="'http://facetahmin.e-panelim.com/assets/images/'+c.haberGorsel" alt="" class="img-fluid">
                        <strong>{{c.haberBaslik}}</strong>
                    </router-link>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "HomeNews",
        data(){
            return {
                sliders: null,
                subSliders: null,
                bottomNews: null,
                isLoading: false
            };
        },
        created(){
            this.isLoading = true;

            //TODO:Chain2

            // Sliders
            this.$store.dispatch("common/getNewsPage", {limit: 7, page: 0}).then((res) => {
                this.sliders = res.data.data.data;
                this.isLoading = false;
            });

            // SubSliders
            this.$store.dispatch("common/getNewsPage", {limit: 5, page: 1}).then((res) => {
                this.subSliders = res.data.data.data;
                this.isLoading = false;
            });


            this.$store.dispatch("common/getVideoNews").then(() => {
                // this.isLoading = false;
            })

            this.$store.dispatch("common/getNewsPage", {limit: 6, page: 2}).then((res) => {
                this.bottomNews = res.data.data.data;
            });


            //this.$store.dispatch("common/getSideNews").then();
        },
        computed: {
            videos() {
                return this.$store.state.common.videos;
            },
        },
        methods:{
            sliderActive(index){
                return (index===0)? 'slide carousel-item active': 'slide carousel-item';
            },
            subSlidersFirst(index){
                return (index === 0) ? 'col-12 col-md-8 news twice high' : 'col-12 col-md-4 news high';
            },

        }
    }
</script>

<style scoped>

</style>