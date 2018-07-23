<template>
  <section class="inbox">
    <div class="container">
      <div class="row">
        <div class="col">&nbsp;</div>
        <div class="col-12 col-sm-8 col-md-9">
          <h1 class="page-title with-border">{{conversation.sender.adSoyad}} ile olan konuşmanız</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3">
          <ul class="inbox-navigator">
            <li class="active">
              <router-link to="/message/inbox">Gelen Kutusu</router-link>
            </li>
            <li>
              <router-link to="/message/sent">Gönderilenler</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-8 col-md-9">
          <div class="user-chat">

            <!-- single message -->
            <div class="message clearfix" v-for="msg in messages">
              <div class="avatar float-left">
                <router-link :to="`/${msg.sender.kullaniciAdi}`">
                  <img :src="msg.sender.IMG" alt="">
                </router-link>
              </div>
              <div>
                <strong>{{msg.sender.adSoyad}}</strong> <em v-date-show="msg.created_at"></em>
                <span>
                  {{msg.content}}
                </span>
              </div>
            </div>

            <!-- reply -->
            <div class="reply clearfix">
              <div class="form-group">
                <textarea name="message" id="" cols="20" rows="5" class="form-control" v-model="message"
                          placeholder="Mesajınızı yazın..."></textarea>
              </div>
              <button class="btn btn-aa-dark float-right" @click="reply">Mesaj Gönder</button>
            </div>
          </div>
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Önceki</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Sonraki</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "conversation",
    data() {
      return {
        conversation: null,
        messages: null,
        message: ""
      }
    },
    created() {
      this.$store.dispatch("users/getConversation", this.$route.params.conversation_id).then(msg => {
        this.messages = msg.data.data.conversations.message;
        this.conversation = msg.data.data.conversations.conversation;
      })
    },
    methods: {
      reply() {
        this.$store.dispatch("users/reply", {conversation_id: this.conversation.conversation_id, message: this.message})
          .then(res => {
            return this.$store.dispatch("users/getConversation", this.conversation.conversation_id);
          })
          .then(res => {
            this.messages = res.data.data.conversations.message;
            this.conversation = res.data.data.conversations.conversation;
            this.message = "";
          })
          .catch(err => {
            alert(err);
          })
      }
    }
  }
</script>

<style scoped>

</style>
