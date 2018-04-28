<template>
  <section id="second-page-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 content nopadding">

          <!-- FILTER -->
          <div class="filter clearfix">
            <select name="" class="form-control filter-date" @change="updateMatches" v-model="selectedDate">
              <option value="">Tümü</option>
              <option :value="date" v-for="date in matchDates">{{date}}</option>
            </select>
            <select name="" class="form-control filter-league" v-model="selectedLeague" @change="updateMatches">
              <option value="">Tümü</option>
              <option :value="league.league_code" v-for="league in leagues">{{league.league_code}} -
                {{league.league_name}}
              </option>
            </select>
            <div :class="`custom-checkbox ${(football==='active')? 'active':''}`" @click="deActivateFootball">
              <span class="football"></span>
              <input type="checkbox" name="filter_football" class="d-none">
            </div>
            <div :class="`custom-checkbox ${(basketball==='active')? 'active':''}`" @click="deActivateBasketball">
              <span class="basketball"></span>
              <input type="checkbox" name="filter_football" class="d-none">
            </div>
          </div>

          <!-- MATCH LIST -->
          <div class="match-list" v-if="!isLoading">
            <match v-for="(game,index) in games" :game="game" :key="index"/>
          </div>
          <spinner v-else/>

        </div>
        <div class="col-md-4 nopadding">
          <div class="coupon" id="user-coupon">
            <div style="background:#36243f;padding:15px;">
              <img :src="user.IMG" alt="" class="avatar"
                   style="width:80px;height:80px;border-radius:100%;float:left;margin-right:15px;">
              <h4 class="text-white pull-left mt-2">{{user.adSoyad}}</h4>
              <h5 class="text-white" style="font-weight: 900;width:70%!important;" v-if="stats">{{stats.balance}}
                AP</h5>
            </div>
            <div class="coupon-title">
              <div class="clearfix"></div>
              KUPON YAP
            </div>
            <div class="coupon-items">
              <div class="wrapper" v-if="!hasCoupon">
                <div class="item clearfix">
                  <h4 class="text-center">Kuponunuzda Hiç Maç Bulunmamaktadır</h4>
                </div>
              </div>
              <div class="wrapper" v-if="hasCoupon">
                <!--single item-->
                <div class="item clearfix" v-for="matches in coupon" v-if="!isLoading">
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
                <spinner v-if="isLoading"/>
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
                <a href="javascript:;" @click="save" v-if="!isLoading">KUPONU PAYLAŞ</a>
                <spinner v-if="isLoading"/>
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
  import Spinner from "./Spinner";
  import moment from 'moment';

  export default {
    components: {
      Spinner,
      Match
    },
    name: "coupon",
    data() {
      return {
        misli: 3,
        comment: '',
        isLoading: false,
        dates: [],
        selectedDate: '',
        selectedLeague: '',
        football: 'active',
        basketball: 'active',
      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("common/getMatches").then(() => {
        this.isLoading = false;
      });

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
      },
      user() {
        return this.$store.state.users.user;
      },
      stats() {
        return this.$store.state.users.stats;
      },
      matchDates() {
        return this.$store.state.common.matchDates;
      },
      leagues() {
        return this.$store.state.common.leagues;
      }
    },
    methods: {
      deActivateBasketball(){
        if(this.basketball === "active"){
          this.basketball = "deactive";
        }else{
          this.basketball = "active";
        }
        this.updateMatches();
      },
      deActivateFootball(){
        if(this.football === "active"){
          this.football = "deactive";
        }else{
          this.football = "active";
        }
        this.updateMatches();
      },
      updateMatches() {
        let payload = {};
        this.isLoading = true;
        if (this.selectedDate) {
          let selected = moment(this.selectedDate, "DD-MM-YYYY");
          let nextDay = moment(selected).add(1, "d");
          console.log(selected.format("DD-MM-YYYY") + " -- " + nextDay.format("DD-MM-YYYY"));
          payload.tarih = selected.unix() + "|" + nextDay.unix();
        }
        if (this.selectedLeague) {
          payload.league = this.selectedLeague;
        }
        if(this.football !== 'active' || this.basketball !== 'active'){
          if(this.football === 'active'){
            payload.type = "football";
          }
          if (this.basketball=== 'active') {
            payload.type = "basketball";
          }
        }
        this.$store.dispatch("common/getMatches", payload).then(()=>{
          this.isLoading = false;
        });
      },
      removeMatch(odd_option_id) {
        this.$store.dispatch("coupon/remove", odd_option_id).then(() => {
        });
      },
      save() {
        if (this.$store.state.coupon.coupon.length >= this.$store.state.coupon.mbs) {
          if (this.misli >= 3) {
            let data = {
              coupon: {
                misli: this.misli,
                aciklama: this.comment
              },
              events: []
            };
            this.$store.state.coupon.coupon.forEach(item => {
              let event = {
                odd: item.odd,
                home: item.event.home,
                away: item.event.away,
                odd_type: item.odd_type,
                odd_option: item.odd_option,
                odd_option_id: item.odd_option_id,
                event_id: item.event.event_id
              };
              data.events.push(event);
            });
            let balance = 0;
            this.isLoading = true;
            this.$store.dispatch("users/checkBalance").then(res => {
              balance = res.data.data.balance;
              if (balance >= this.misli) {
                this.$swal({
                  title: "Kuponu Paylaş",
                  text: "Kuponu paylaşmak istediğinizden emin misiniz? Bu işlem sonucunda Asist Puan bakiyenizden " + this.misli + " puan düşülecektir",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Paylaş",
                  cancelButtonText: "İptal"
                }).then(confirm => {
                  this.$store.dispatch("coupon/save", data).then(() => {
                    this.$store.dispatch("users/updateBalance").then(() => {

                      this.isLoading = false;
                      this.$swal({
                        title: "Başarılı",
                        text: "Kuponunuz başarıyla paylaşıldı",
                        type: "success"
                      });
                    })
                  });
                })

              } else {
                this.$swal({
                  title: "Hata",
                  text: "Kupon paylaşmak için yeterli Asist Puan'ınız bulunmamaktadır",
                  type: "error"
                });
                this.isLoading = false;

              }
            });

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
