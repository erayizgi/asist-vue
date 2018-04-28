<template>
  <div>
    <!--single match-->
    <div class="match clearfix" @click="showOptions">
      <div :class="game.type"><i :class="`${(game.type==='football')? 'fas fa-futbol':'fas fa-basketball-ball'}`"></i></div>
      <div class="code">{{game.event_oid}}</div>
      <div class="time"><i class="far fa-clock"></i><br> {{game.start_date}}</div>
      <div class="code"><span data-toggle="tooltip" :title="game.league_name">{{game.league_code}}</span></div>
      <div class="teams">{{game.home}}<span>vs</span> {{game.away}}</div>
      <div class="btn-add" v-if="!hasClicked"><span class="badge badge-info">MBS: {{game.mbc}}</span></div>
      <div class="btn-remove" v-else><span class="badge badge-info">MBS: {{game.mbc}}</span></div>
    </div>
    <!-- match detail -->
    <div class="match-detail clearfix" v-if="hasClicked">
      <div class="bets clearfix" v-for="odd in game.odds">
        <strong>{{odd.odd_type}}</strong>
        <span :class="`user-bet ${(options.odd_option_id === selected)? 'active':''}`" v-for="options in odd.options"
              @click="addToCoupon(options,odd.odd_type)">
          <em>{{options.odd_option}}</em> {{options.odd}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: "match",
    props: [
      "game"
    ],
    data() {
      return {
        options: null,
        hasClicked: false,
        selected:0
      }
    },
    created(){
      if(this.$store.state.coupon.coupon.length > 0){
        this.$store.state.coupon.coupon.forEach(item => {
          if(item.event_id === this.game.event_id){
            this.selected = item.odd_option_id;
          }
        })
      }
    },
    methods: {
      showOptions() {
        this.hasClicked = !this.hasClicked;
        this.$store.dispatch("common/getOddOptions", this.game.event_id).then();
      },
      addToCoupon(options,odd_type) {
        if(options.odd_option_id === this.selected){
          this.removeFromCoupon(options.odd_option_id);
        }else{
          let matchingGames = this.$store.state.coupon.coupon.filter(item=>{
            return (item.event_id === this.game.event_id)? item : false;
          });
          if(matchingGames.length > 0){
            this.$swal({title:"Hata",text:"Kuponunuzda aynı maç için seçilmiş farklı bir tahmin bulunmaktadır.",type:"error"})
          }else{
            this.selected = options.odd_option_id;
            this.$store.dispatch("coupon/addToCoupon",{
              event_id:this.game.event_id,
              event:this.game,
              odd_option_id:options.odd_option_id,
              odd_option: options.odd_option,
              odd: options.odd,
              odd_type: odd_type
            }).then(()=>{

            });
          }
        }
      },
      removeFromCoupon(odd_option_id){
        this.$store.dispatch("coupon/remove",odd_option_id).then(()=>{
          this.selected = 0;
        });
      }
    },

  }
</script>

<style scoped>

</style>
