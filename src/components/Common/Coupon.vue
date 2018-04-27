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
              <div class="wrapper" v-if="!hasCoupon">
                <div class="item clearfix">
                  <h4 class="text-center">Kuponunuzda Hiç Maç Bulunmamaktadır</h4>
                </div>
              </div>
              <div class="wrapper" v-if="hasCoupon">
                <!--single item-->
                <div class="item clearfix" v-for="matches in coupon">
                  <div class="football float-left">&nbsp;</div>
                  <div class="data float-left">
                    <div class="clearfix">
                      <a href="javascript:void(0)" @click="removeMatch(matches.odd_option_id)" class="remove-match">
                        <i class="fa fa-times"></i>
                      </a>
                    </div>
                    <div class="clearfix">
                      <div class="code">{{matches.event.event_oid}} {{matches.event.league_code}}</div>
                      <div class="time">{{matches.event.start_date}}</div>
                    </div>
                    <strong class="teams">{{matches.event.home}} <span>VS</span> {{matches.event.away}}</strong>
                    <div class="bet clearfix">
                      <span>{{matches.odd_type}}: {{matches.odd_option}}</span>
                      <em>{{matches.odd}}</em>
                    </div>
                  </div>
                </div>

              </div>
              <div class="coupon-rate clearfix" id="c-rate">
                <span>Oran: <strong>{{totalOdd}}</strong></span>
                <input type="text" name="times" class="rate-times form-control" value="" placeholder="Misli"
                       v-model="misli">
              </div>
              <div class="coupon-rate clearfix" id="est-gain">
                <span>Tahmini Kazanç: <strong>{{(totalOdd * misli).toFixed(2)}}</strong></span>
              </div>
              <div class="description">
                <strong>AÇIKLAMA</strong>
                <textarea name="comment" class="form-control" v-model="comment"></textarea>
              </div>
              <div class="btn-share">
                <a href="javascript:;" @click="save">KUPONU PAYLAŞ</a>
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
    components: {
      Match
    },
    name: "coupon",
    data() {
      return {
        misli: 3,
        comment: ''
      }
    },
    created() {
      this.$store.dispatch("common/getMatches").then();
    },
    computed: {
      games() {
        return this.$store.state.common.matches;
      },
      hasCoupon() {
        return (this.$store.state.coupon.coupon.length > 0);
      },
      coupon() {
        return this.$store.state.coupon.coupon;
      },
      totalOdd() {
        return this.$store.state.coupon.totalOdd.toFixed(2);
      }
    },
    methods: {
      removeMatch(odd_option_id) {
        this.$store.dispatch("coupon/remove", odd_option_id).then(() => {
        });
      },
      save() {
        if (this.$store.state.coupon.coupon.length > 3) {
          if (this.misli >= this.$store.state.coupon.mbs) {
            this.$store.dispatch("coupon/save").then();
          } else {
            this.$swal({title: "Hata", text: "Kupon için 3 misliden az girilemez.", type: "error"});
          }
        } else {
          this.$swal({
            title: "Hata",
            text: "Kupon paylaşmak için minimum " + this.$store.state.coupon.mbs + " maç seçmek zorundasınız",
            type: "error"
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
