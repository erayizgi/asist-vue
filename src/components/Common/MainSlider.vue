<template>
  <section id="home-slider">
    <div class="container">

      <div class="carousel slide" data-ride="carousel" id="headline-slide">

        <div class="carousel-inner"  v-if="!isLoading">
          <slick ref="slick" :options="slickOptions">

            <div class="row nomargin slide carousel-item " v-for="slide in slides">
              <!--- slide image -->
              <div class="col-12 col-md-6 slider-image">
                <img :src="slide.image" class="img-fluid"/>
                <div class="slide-text">
                  <a href="#">{{slide.text}}</a>
                </div>
              </div>
              <!--- slide content -->
              <div class="col-12 col-md-6 slider-content">
                <div class="match clearfix">
                  <div class="team">
                    <img :src="slide.home_logo" class="img-fluid" style="width:150px;" alt="">
                    <strong>MUN</strong>
                  </div>
                  <div class="countdown">
                    <em>vs.</em>

                  </div>
                  <div class="team">
                    <img :src="slide.away_logo" class="img-fluid" style="width:150px;" alt="">
                    <strong>ARS</strong>
                  </div>
                </div>
                <div class="bets clearfix">
                    <span>
                        <em>1</em>
                        <strong>{{slide.odd_1}}</strong>
                    </span>
                  <span class="green">
                        <em>X</em>
                        <strong>{{slide.odd_x}}</strong>
                    </span>
                  <span>
                        <em>2</em>
                        <strong>{{slide.odd_2}}</strong>
                    </span>
                </div>
              </div>
            </div>

          </slick>
          <div class="row">
            <div class="col-12 clearfix">
              <ol class="carousel-indicators navigation">
              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import slick from 'vue-slick';

  export default {
    name: "main-slider",
    data() {
      return {
        isLoading:true,
        slickOptions: {
          arrows: false,
          rows: 1,
          dots:true,
          dotsClass:'carousel-indicators navigation',
          slidesToShow: 1, // if mobile 1
          slidesToScroll: 1,
          infinite: true,
        }
      }
    },
    components: {
      slick
    },
    beforeMount(){
      this.$store.dispatch("common/getMainSlider").then(()=>{
        this.isLoading = false;
      });
    },
    computed:{
      slides(){
        if(this.$store.state.common.mainSlider.length > 0 ){
          return this.$store.state.common.mainSlider;
        }
      },
    },
    methods:{
      days(date){
        let date1 = new Date();
        let date2 = new Date(date);
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
      },
      hours(date){
        let date1 = new Date();
        let date2 = new Date(date);
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        let diffDays = Math.ceil((timeDiff / (1000 * 3600))%24);
        return diffDays;
      },
      minutes(date){
        let date1 = new Date();
        let date2 = new Date(date);
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        console.log(timeDiff);
        let diffDays = Math.ceil((timeDiff / (1000*60))%60);
        return diffDays;
      }
    }
  }
</script>

<style scoped>

</style>
