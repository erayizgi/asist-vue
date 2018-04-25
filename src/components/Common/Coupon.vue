<template>
  <section id="second-page-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 content nopadding">

          <!-- FILTER -->
          <div class="filter clearfix">
            <select name="" class="form-control filter-date">
              <option value="">Tarih</option>
            </select>
            <select name="" class="form-control filter-league">
              <option value="">Ligler</option>
            </select>
            <div class="custom-checkbox">
              <span class="football"></span>
              <input type="checkbox" name="filter_football" class="d-none">
            </div>
            <div class="custom-checkbox">
              <span class="basketball"></span>
              <input type="checkbox" name="filter_football" class="d-none">
            </div>
          </div>

          <!-- MATCH LIST -->
          <div class="match-list">
            <match v-for="(game,index) in games" :game="game" :key="index"/>
          </div>

        </div>
        <div class="col-md-4 nopadding">
          <div class="coupon" id="user-coupon">
            <a href="#user-coupon" class="btn-close float-right"><i class="fas fa-times"></i></a>
            <div class="coupon-title">KUPON YAP</div>
            <div class="coupon-items">
              <div class="wrapper">
                <!--single item-->
                <div class="item clearfix">
                  <div class="football float-left">&nbsp;</div>
                  <div class="data float-left">
                    <div class="clearfix"><a href="javascript:void(0)" class="remove-match"><i class="fa fa-times"></i></a>
                    </div>
                    <div class="clearfix">
                      <div class="code">242 C2-B</div>
                      <div class="time"><i class="fa fa-clock-o"></i>18:00</div>
                    </div>
                    <strong class="teams">Manchester United <span>VS</span> Arsenal</strong>
                    <div class="bet clearfix"><span>Maç Sonucu: 1</span> <em>5.00</em></div>
                  </div>
                </div>
                <!--single item-->
                <div class="item clearfix">
                  <div class="football float-left">&nbsp;</div>
                  <div class="data float-left">
                    <div class="clearfix"><a href="javascript:void(0)" class="remove-match"><i class="fa fa-times"></i></a>
                    </div>
                    <div class="clearfix">
                      <div class="code">242 C2-B</div>
                      <div class="time"><i class="fa fa-clock-o"></i>18:00</div>
                    </div>
                    <strong class="teams">Manchester United <span>VS</span> Arsenal</strong>
                    <div class="bet clearfix"><span>Maç Sonucu: 1</span> <em>5.00</em></div>
                  </div>
                </div>
                <!--single item-->
                <div class="item clearfix">
                  <div class="football float-left">&nbsp;</div>
                  <div class="data float-left">
                    <div class="clearfix"><a href="javascript:void(0)" class="remove-match"><i class="fa fa-times"></i></a>
                    </div>
                    <div class="clearfix">
                      <div class="code">242 C2-B</div>
                      <div class="time"><i class="fa fa-clock-o"></i>18:00</div>
                    </div>
                    <strong class="teams">Manchester United <span>VS</span> Arsenal</strong>
                    <div class="bet clearfix"><span>Maç Sonucu: 1</span> <em>5.00</em></div>
                  </div>
                </div>
                <!--single item-->
                <div class="item clearfix">
                  <div class="football float-left">&nbsp;</div>
                  <div class="data float-left">
                    <div class="clearfix"><a href="javascript:void(0)" class="remove-match"><i class="fa fa-times"></i></a>
                    </div>
                    <div class="clearfix">
                      <div class="code">242 C2-B</div>
                      <div class="time"><i class="fa fa-clock-o"></i>18:00</div>
                    </div>
                    <strong class="teams">Manchester United <span>VS</span> Arsenal</strong>
                    <div class="bet clearfix"><span>Maç Sonucu: 1</span> <em>5.00</em></div>
                  </div>
                </div>
              </div>
              <div class="coupon-rate clearfix" id="c-rate">
                <span>Oran: <strong>2.00</strong></span>
                <input type="text" name="times" class="rate-times form-control" value="" placeholder="Misli">
              </div>
              <div class="coupon-rate clearfix" id="est-gain" style="display: none;">
                <span>Tahmini Kazanç: <strong>0.00</strong></span>
              </div>
              <div class="description">
                <strong>AÇIKLAMA</strong>
                <textarea name="comment" class="form-control"></textarea>
              </div>
              <div class="btn-share">
                <a href="#">KUPONU PAYLAŞ</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import Match from './Matches/Match';
  export default {
    components:{
      Match
    },
    name: "coupon",
    created() {
      this.$store.dispatch("common/getMatches").then();
    },
    computed:{
      games(){
        return this.$store.state.common.matches;
      }
    }
  }
</script>

<style scoped>

</style>
