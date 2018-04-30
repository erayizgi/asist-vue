<template>
  <section class="inbox">
    <div class="container">
      <div class="row">
        <div class="col">&nbsp;</div>
        <div class="col-12 col-sm-8 col-md-9">
          <h1 class="page-title with-border">ÖZEL MESAJLARIM</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3">
          <ul class="inbox-navigator">
            <li>
              <router-link to="/message/inbox">Gelen Kutusu</router-link>
            </li>
            <li  class="active">
              <router-link to="/message/sent">Gönderilenler</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-8 col-md-9">
          <div class="messages" v-if="messages">

            <!--single message -->
            <router-link :to="`/message/inbox/${msg.conversation.conversation_id}`" class="message clearfix" v-for="msg in messages">
              <div class="avatar float-left">
                <img :src="msg.conversation.receiver.IMG" alt="">
              </div>
              <div class="info float-left">
                <span class="user subject">{{msg.conversation.receiver.adSoyad}}</span>
                <span class="content">{{msg.message[0].content}}</span>
                <span class="time" v-date-show="msg.conversation.updated_at"></span>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "outbox",
    data(){
		  return{
		    messages:null
      }
    },
    created(){
		  this.$store.dispatch("users/outbox").then(res=>{
		    this.messages = res.data.data.conversations;
      })
    }
	}
</script>

<style scoped>

</style>
