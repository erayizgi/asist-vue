<template>
    <div>
      <!--single match-->
      <div class="match clearfix" @click="showOptions">
        <div class="football"><i class="fas fa-futbol"></i></div>
        <div class="code">{{game.event_oid}} </div>
        <div class="time"><i class="far fa-clock"></i><br> {{game.start_date}}</div>
        <div class="code"><span data-toggle="tooltip" :title="game.league_name">{{game.league_code}}</span></div>
        <div class="teams">{{game.home}}<span>vs</span> {{game.away}}</div>
        <div class="btn-add" v-if="!hasClicked"><span>24</span><i class="fa fa-plus-circle"></i></div>
        <div class="btn-remove" v-else><span>24</span><i class="fa fa-minus-circle"></i></div>
      </div>
      <!-- match detail -->
      <div class="match-detail clearfix" v-if="hasClicked">
        <div class="bets clearfix" v-for="odd in game.odds">
          <strong>{{odd.odd_type}}</strong>
          <span class="user-bet" v-for="options in odd.options"><em>{{options.odd_option}}</em> {{options.odd}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import moment from 'moment';
	export default {
		name: "match",
    props:[
      "game"
    ],
    data(){
		  return {
		    options:null,
        hasClicked:false,
      }
    },
    methods:{
		  showOptions(){
		    this.hasClicked = !this.hasClicked;
		    this.$store.dispatch("common/getOddOptions",this.game.event_id).then();
      }
    },

	}
</script>

<style scoped>

</style>
