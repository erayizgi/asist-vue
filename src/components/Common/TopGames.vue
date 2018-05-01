<template>
  <section id="top-games-area-mobile" class="clearfix">
    <!-- tab buttons -->

    <div class="top-games-tab container-fluid" role="tablist">
      <div class="row">
        <!-- single tab button -->
        <div class="col-6 col-bi-12 item football nopadding">
          <a data-target="football-tab-mobile" href="javascript:;" class="tab-link active align-items-center"><i
            class="fas fa-futbol"></i></a>
        </div>
        <!-- single tab button -->
        <div class="col-6 col-bi-12 item basketball nopadding">
          <a data-target="basketball-tab-mobile" href="javascript:;" class="tab-link"><i
            class="fas fa-basketball-ball"></i></a>
        </div>
      </div>
    </div>
    <!-- tab list -->
    <div class="top-games-tab-item-list" role="tabpanel">
      <!-- single tab -->
      <div class="top-games-tab-items clearfix tab-pane show" id="football-tab-mobile" v-if="football">
        <slick ref="slick" :options="slickOptions">
          <div class="item float-left" v-for="f in football">
            <div class="score">
              <div class="team">
                <img :src="f.home_logo" alt="" class="team-image" style="width: 60px!important; height: 70px!important;">
                <div class="team-code">{{f.home_name}}</div>
              </div>
              <div class="date"><i>vs.</i><span v-date-show="f.created_at"></span></div>
              <div class="team">
                <img :src="f.away_logo" alt="" class="team-image" style="width: 60px!important; height: 70px!important;">
                <div class="team-code">{{f.away_name}}</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>{{ f.odd_1 }}</strong></span>
              <span class="draw"><i>X</i> <strong>{{ f.odd_x }}</strong></span>
              <span class="away"><i>2</i> <strong>{{ f.odd_2 }}</strong></span>
            </div>
          </div>
        </slick>
      </div>


      <!--single tab-->
      <div class="top-games-tab-items clearfix tab-pane" id="basketball-tab-mobile">
        <slick ref="basket" :options="slickOptions">
        <!-- single game -->
        <div class="item float-left" v-for="b in basketball">
          <div class="score">
            <div class="team">
              <img :src="b.home_logo" alt=""
                   class="team-image" style="width: 60px!important; height: 70px!important;">
              <div class="team-code">{{b.home_name}}</div>
            </div>
            <div class="date"><i>vs.</i><span v-date-show="b.created_at"></span></div>
            <div class="team">
              <img :src="b.away_logo" alt=""
                   class="team-image" style="width: 60px!important; height: 70px!important;">
              <div class="team-code">{{b.away_name}}</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>{{ b.odd_1 }}</strong></span>
            <span class="draw"><i>X</i> <strong>{{ b.odd_x }}</strong></span>
            <span class="away"><i>2</i> <strong>{{ b.odd_2 }}</strong></span>
          </div>
        </div>
        </slick>
      </div>
    </div>
  </section>
</template>

<script>
  //import Flickity from 'vue-flickity';
  import slick from 'vue-slick';

  export default {
    name: "top-games",
    data() {
      return {
        slickOptions: {
          arrows: true,
          rows: 1,
          slidesToShow: 1, // if mobile 1
          slidesToScroll: 1,
          infinite: true,
          prevArrow: '<button class="btn-prev" type="button"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button class="btn-next" type="button"><i class="fas fa-chevron-right"></i></button>',
          mobileFirst: true,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 5,
              }
            },
          ]
        },

        football: null,
        basketball: null,
        isLoading : null,
      }
    },

    created(){
        this.isLoading = true;

        this.$store.dispatch("common/getTopGames", {category: 1}).then((res) => {
           this.football = res.data.data.data;
        });

        this.$store.dispatch("common/getTopGames", {category: 2}).then((res) => {
            this.basketball = res.data.data.data;
        })
    },

    components: {
      slick
      //Flickity
    },
    mounted() {
      $(document).ready(() => {
        $('.tab-link').on('click', function () {
          $(".tab-pane").removeClass("show");
          $(".tab-link").removeClass("active");
          $(this).addClass("active");
          $('#' + $(this).attr("data-target")).addClass("show");
        });
      });
    }
  }
</script>

<style scoped>

</style>
