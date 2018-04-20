<template>
  <div class="activities">
    <h3 class="title">ARKADAŞ AKTİVİTELERİ</h3>
    <ul>
      <!-- single activity -->
      <li class="clearfix" v-for="activity in activities">
        <img :src="activity.IMG" class="float-left" alt="">
        <div class="float-left">
          <a href="javascript:void(0)">{{activity.adSoyad}}</a>
          <strong>{{humanReadableActivity(activity.islem_turu)}}</strong>
          <span v-date-show="activity.islem_tarihi"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "activities",
      computed:{
        activities(){
          return this.$store.state.users.feed;
        }
      },
      methods:{
        humanReadableActivity(type){
          if(type === "kupon"){
            return "bir kupon paylaştı"
          }else if(type==="post"){
            return "bir gönderi paylaştı"
          }else if(type==="postOnWall"){
            return "başka bir gönderiyi duvarında yayınladı"
          }else if(type==="comment"){
            return "bir gönderiye yorum yaptı"
          }
        }
      }
    }
</script>

<style scoped>

</style>
