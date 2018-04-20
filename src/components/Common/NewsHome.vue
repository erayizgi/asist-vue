<template>
  <section id="news">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-9 nopadding" v-if="!isLoading">

          <!-- main news slider -->
          <div class="news-slider carousel slide" id="news-slider" data-ride="carousel">
            <div class="carousel-inner">
              <slick  ref="slick" :options="slickOptions">
                <div class="slide carousel-item" v-for="n in news">
                  <img :src="'http://facetahmin.e-panelim.com/assets/images/'+n.haberGorsel" class="img-fluid" style="width:100%!important;" alt="">
                </div>
              </slick>

            </div>
            <ol class="carousel-indicators navigation">
            </ol>
          </div>

          <!-- sub news slider -->
          <div id="news_sub_slide">
            <div class="slides clearfix slick-initialized slick-slider"><button class="btn-prev slick-arrow" type="button" style=""><i class="fas fa-caret-left"></i></button>
              <!--single slide-->
              <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 4845px; transform: translate3d(-855px, 0px, 0px);"><div class="single-slide slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="0">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 1</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="0">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 2</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="0">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 3</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 4</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 1</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 2</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 3</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 4</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div><div class="single-slide slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" tabindex="-1" style="width: 255px;">
                <div class="content">
                  <a href="#" tabindex="-1">
                    <img src="/static/out_source/news.png" class="img-fluid" alt="">
                    <strong>Avcı: Hız kesmeden deva... 5</strong>
                    <p>Valencia'nın Mestalla Stadı'nda Barcelona'yı konuk ettiği yarı final rövanş müsabakasının ilk yarısı golsüz eşitlikle tamamlandı.</p>
                  </a>
                </div>
              </div></div></div>
              <!--single slide-->

              <!--single slide-->

              <!--single slide-->

              <!--single slide-->

              <!--single slide-->

              <!--single slide-->

              <button class="btn-next slick-arrow" type="button" style=""><i class="fas fa-caret-right"></i></button></div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
          <div class="columns">
            <h3 class="title">KÖŞE YAZILARI</h3>
            <ul>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">9 Kasım NBA Maçları Yorumları</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
              <li class="clearfix">
                <img src="/static/out_source/avatar-news.png" alt="" class="user-thumbnail">
                <div>
                  <a href="#" class="columnist">WATCHMEN</a>
                  <a href="#" class="article">NBA 12 Kasım Analizleri</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section></template>

<script>
  import Slick from 'vue-slick';

  export default {
    name: "news-home",
    components: {
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
          adaptiveHeight: true,
        }
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("common/getNews").then(() => {
        this.isLoading = false;
      });
      this.$store.dispatch("common/getVideoNews").then(() => {
        this.isLoading = false;
      })
    },
    computed: {
      news() {
        return this.$store.state.common.news;
      }
    }
  }
</script>

<style scoped>

</style>
