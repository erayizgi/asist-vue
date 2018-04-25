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
      <div class="top-games-tab-items clearfix tab-pane show" id="football-tab-mobile">
        <slick ref="slick" :options="slickOptions">
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <!-- single game -->
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <!-- single game -->
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <!-- single game -->
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <!-- single game -->
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
          <!-- single game -->
          <div class="item float-left">
            <div class="score">
              <div class="team">
                <img src="static/out_source/parcalona.png" alt="" class="team-image">
                <div class="team-code">FCB</div>
              </div>
              <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
              <div class="team">
                <img src="static/out_source/real-madrid.png" alt="" class="team-image">
                <div class="team-code">MAD</div>
              </div>
            </div>
            <div class="bets clearfix">
              <span class="home"><i>1</i> <strong>2.5</strong></span>
              <span class="draw"><i>X</i> <strong>3.10</strong></span>
              <span class="away"><i>2</i> <strong>2.5</strong></span>
            </div>
          </div>
        </slick>
      </div>


      <!--single tab-->
      <div class="top-games-tab-items clearfix tab-pane" id="basketball-tab-mobile">
        <!-- single game -->
        <div class="item float-left">
          <div class="score">
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/real-madrid.png" alt=""
                   class="team-image">
              <div class="team-code">MAD</div>
            </div>
            <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/parcalona.png" alt=""
                   class="team-image">
              <div class="team-code">FCB</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>2.5</strong></span>
            <span class="draw"><i>X</i> <strong>3.10</strong></span>
            <span class="away"><i>2</i> <strong>2.5</strong></span>
          </div>
        </div>
        <!-- single game -->
        <div class="item float-left">
          <div class="score">
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/parcalona.png" alt=""
                   class="team-image">
              <div class="team-code">FCB</div>
            </div>
            <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/real-madrid.png" alt=""
                   class="team-image">
              <div class="team-code">MAD</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>2.5</strong></span>
            <span class="draw"><i>X</i> <strong>3.10</strong></span>
            <span class="away"><i>2</i> <strong>2.5</strong></span>
          </div>
        </div>
        <!-- single game -->
        <div class="item float-left">
          <div class="score">
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/parcalona.png" alt=""
                   class="team-image">
              <div class="team-code">FCB</div>
            </div>
            <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/real-madrid.png" alt=""
                   class="team-image">
              <div class="team-code">MAD</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>2.5</strong></span>
            <span class="draw"><i>X</i> <strong>3.10</strong></span>
            <span class="away"><i>2</i> <strong>2.5</strong></span>
          </div>
        </div>
        <!-- single game -->
        <div class="item float-left">
          <div class="score">
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/parcalona.png" alt=""
                   class="team-image">
              <div class="team-code">FCB</div>
            </div>
            <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/real-madrid.png" alt=""
                   class="team-image">
              <div class="team-code">MAD</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>2.5</strong></span>
            <span class="draw"><i>X</i> <strong>3.10</strong></span>
            <span class="away"><i>2</i> <strong>2.5</strong></span>
          </div>
        </div>
        <!-- single game -->
        <div class="item float-left">
          <div class="score">
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/parcalona.png" alt=""
                   class="team-image">
              <div class="team-code">FCB</div>
            </div>
            <div class="date"><i>vs.</i><span>12 : 00 : 10</span></div>
            <div class="team">
              <img src="http://medyarapor.teknosoft.info/2018/test/static/out_source/real-madrid.png" alt=""
                   class="team-image">
              <div class="team-code">MAD</div>
            </div>
          </div>
          <div class="bets clearfix">
            <span class="home"><i>1</i> <strong>2.5</strong></span>
            <span class="draw"><i>X</i> <strong>3.10</strong></span>
            <span class="away"><i>2</i> <strong>2.5</strong></span>
          </div>
        </div>
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
        }
      }
    },
    components: {
      slick
      //Flickity
    },
    mounted() {
      $(document).ready(() => {
        $('.tab-link').on('click', function () {
          $(".tab-pane").removeClass("show");
          $('#' + $(this).attr("data-target")).addClass("show");
        });
      });
    }
  }
</script>

<style scoped>

</style>
