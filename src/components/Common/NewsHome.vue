<template>
  <section id="news">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9 nopadding">
          <!-- main news slider -->
          <div class="news-slider carousel slide" id="news-slider">
            <div class="carousel-inner" >
              <slick ref="slick" v-if="!isLoading" :options="slickOptions">
                <div class="slide carousel-item" v-for="(n, index) in videos">
                  <img :src="n.image" class="img-fluid" style="width:855px!important; height: 491px!important" alt="" data-toggle="modal" :data-target="'#show_video_'+index">

                </div>
              </slick>
              <spinner v-if="isLoading"/>
            </div>
            <ol class="carousel-indicators navigation">
            </ol>
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

          <!-- sub news slider -->
          <div id="news_sub_slide" v-if="!isLoading">
            <!--single slide-->
            <slick :options="subOptions" class="slides clearfix" ref="subNews">
              <div class="single-slide" v-for="n in news">
                <div class="content" style="width:263px!important;">
                  <router-link :to="`/news/${n.URL}`">
                    <img style="width: 263px!important; height:141px!important; ":src="n.haberGorsel" class="img-fluid" alt="">
                    <strong>{{n.haberBaslik}}</strong>
                    <p v-html="n.haberOzet"></p>
                  </router-link>
                </div>
              </div>

            </slick>

          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
          <div class="columns">
            <h3 class="title">KÖŞE YAZILARI</h3>
            <ul style="margin-top: 0px!important">
              <li class="clearfix" v-for="sn in sideNews">
	              <router-link :to="`/${sn.kullaniciAdi}`">
                <img :src="sn.IMG" alt="" class="user-thumbnail" style="border: 1px solid #DDD; width: 70px!important; height: 70px!important; border-radius: 100px!important">
	              </router-link>
                <div>
                  <router-link :to="`/${sn.kullaniciAdi}`" class="columnist">{{sn.adSoyad}}</router-link>
                  <router-link :to="`/news/${sn.URL}`" class="article">{{sn.haberBaslik}}</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Slick from 'vue-slick';
  import Spinner from "./Spinner";

  export default {
    name: "news-home",
    components: {
      Spinner,
      Slick
    },
    data() {
      return {
        isLoading: false,
        slickOptions: {
          arrows: false,
          rows: 1,
          dots: true,
          dotsClass: 'carousel-indicators navigation',
          slidesToShow: 1, // if mobile 1
          slidesToScroll: 1,
          infinite: true,
        },
        subOptions: {
          arrows: true,
          slidesToShow: 3,
          prevArrow: '<button class="btn-prev" type="button"><i class="fas fa-caret-left"></i></button>',
          nextArrow: '<button class="btn-next" type="button"><i class="fas fa-caret-right"></i></button>',
          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
        }
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("common/getNews").then(() => {
        this.$store.dispatch("common/getVideoNews").then(() => {
          this.isLoading = false;
        })
        // this.isLoading = false;
      });
      this.$store.dispatch("common/getSideNews", {limit: 7}).then();
    },
    computed: {
      news() {
        return this.$store.state.common.news;
      },
      videos() {
        return this.$store.state.common.videos;
      },
      sideNews(){
        return this.$store.state.common.sideNews;
      }
    }

  }
</script>

<style scoped>

</style>
