<template>
  <div class="content">
    <table class="share-table table">
      <tbody>
      <tr v-for="game in ggames">
        <td>
          <strong>{{game.evsahibi}} - {{game.deplasman}}</strong>
          <em v-game-date="game.mac_tarihi"></em>
        </td>
        <td>{{game.bet}}</td>
        <td>
          <span>{{game.oran}}</span>
        </td>
        <td>
          <span :class="gameStatus(game.durum)"><i :class="gameStatusIcon(game.durum)"></i></span>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "coupon-detail",
    props: [
      'games'
    ],
    computed:{
      ggames(){
        return this.games;
      }
    },
    methods:{
      gameStatus(status){
        if(status===0) {
          return "continues"
        }else if(status ===2){
          return "win"
        }else{
          return "lose"
        }
      },
      gameStatusIcon(status){
        if(status===0) {
          return ""
        }else if(status === 1){
          return "fas fa-times"
        }else{
          return "fas fa-check"
        }
      }
    }
  }
</script>

<style scoped>

</style>
