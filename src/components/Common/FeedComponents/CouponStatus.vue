<template>
  <!--(this.rePost === true)? "footer" : "result"-->
  <div class="footer" v-if="this.rePost">
    <div class="row nomargin">
      <div class="col-8 col-md-9 col-lg-9 information">
        <div class="row nomargin">
          <div class="col-12 col-md-6 nopadding">
            <div>Toplam Oran: <strong>{{totalBet}}</strong></div>
            <div>Sistem: <strong>Kombine</strong></div>
          </div>
          <div class="col-12 col-md-6 nopadding">
            <div>Misli: <strong>{{status.misli}}</strong></div>
            <div>Toplam Kazanç: <strong>{{status.kazanc}} TL</strong></div>
          </div>
        </div>
      </div>
      <div :class="couponStatus(status.kupon_sonucu)">
        <div v-if="status.kupon_sonucu =='KAZANDI'"><i class="fas fa-check"></i> KAZANDI</div>
        <div v-if="status.kupon_sonucu =='KAZANDI'">{{status.kesinKazanc}} TL</div>
        {{(status.kupon_sonucu=='DEVAMEDIYOR')? "DEVAM EDİYOR" : ""}}
        {{(status.kupon_sonucu=='KAYBETTI')? "KAYBETTİ" : ""}}
      </div>
    </div>
  </div>
  <div class="result" style="margin-bottom: 5px;" v-else>
    <div class="row nomargin">
      <div class="col-8 col-md-9 col-lg-9 nopadding">
        <div class="row nomargin">
          <div class="col-12 col-sm-6 col-md-3 nopadding">Toplam Oran: <strong>{{totalBet}}</strong></div>
          <div class="col-12 col-sm-6 col-md-3 nopadding">Sistem: <strong>Kombine</strong></div>
          <div class="col-12 col-sm-6 col-md-3 nopadding">Misli: <strong>{{status.misli}}</strong></div>
          <div class="col-12 col-sm-6 col-md-3 nopadding">Toplam Kazanç: <strong>{{status.kazanc}}TL</strong></div>
        </div>
      </div>
      <div :class="couponStatus(status.kupon_sonucu)">
        <div v-if="status.kupon_sonucu =='KAZANDI'"><i class="fas fa-check"></i> KAZANDI</div>
        <div v-if="status.kupon_sonucu =='KAZANDI'">{{status.kesinKazanc}} TL</div>
        {{(status.kupon_sonucu=='DEVAMEDIYOR')? "DEVAM EDİYOR" : ""}}
        {{(status.kupon_sonucu=='KAYBETTI')? "KAYBETTİ" : ""}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "coupon-status",
    props: [
      "status",
      "rePost",
      "games"
    ],
    data(){
      return {
        totalBet: 1
      }
    },
    created(){
      this.games.forEach((item)=>{
        this.totalBet *= parseFloat(item.oran);
      });
      this.totalBet = this.totalBet.toFixed(2);
    },
    methods:{
      couponStatus(status){
        if(status === "DEVAMEDIYOR"){
          return "col-4 col-md-3 col-lg-3 clearfix nopadding sum continues"
        }else if(status === "KAYBETTI"){
          return "col-4 col-md-3 col-lg-3 clearfix nopadding sum lost"
        }else{
          return "col-4 col-md-3 col-lg-3 clearfix nopadding sum won"
        }
      },

    }
  }
</script>

<style scoped>

</style>
