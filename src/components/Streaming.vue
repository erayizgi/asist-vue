<template>
  <section id="streams">

    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="title">YAYINLAR</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="stream" v-if="activeStream">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 col-lg-9 nopadding">
            <div id="video" v-html="activeStream[0].yayinEmbedKodu" style="height:542px;">
              <!--<img src="out_source/stream-placeholder.png" class="img-fluid" alt="">-->
            </div>
            <div class="info clearfix">
              <h2 class="stream-title float-left">{{activeStream[0].yayinBasligi}}</h2>
              <span class="float-right">50 kişi izliyor</span>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3 nopadding">

            <!-- CHAT MOBILE BUTTON -->
            <div class="stream-mobile-button" @click="showChat">
              <i class="fas fa-comments"></i> Chat'e Katıl
            </div>

            <!-- CHAT AREA -->
            <div class="chat" id="stream_chat" v-show="chatOpen">
              <div class="chat-header clearfix" data-toggle="show" data-target="#stream_chat">
                Stream Chat
                <i class="fas fa-times float-right" @click="showChat"></i>
              </div>
              <div class="messages" id="stream_message_area" style="background: #ececec;">
                <!--single message -->
                <div class="message clearfix" v-for="msg in chat">
                  <div class="">
                    <img :src="msg.IMG" class="avatar" alt="">
                  </div>
                  <div class="">
                    <strong>{{msg.adSoyad}}</strong><br>
                    <em v-date-show="msg.created_at"></em><br>
                    {{msg.mesajAciklamasi}}
                  </div>
                </div>
              </div>
              <div class="send-message clearfix">
                <div class="clearfix">
                  <img :src="user.IMG" width="30" alt="" class="user-avatar float-left">
                  <div class="wrapper float-left">
                    <textarea name="message" v-on:keydown.enter.prevent="sendMessage" v-model="message"
                              v-bind:disabled="msgDisabled" placeholder="Bir şey söyle...">
                    </textarea>
                  </div>
                </div>
                <button class="btn btn-send-msg float-right" @click="sendMessage">Gönder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- single video news -->
        <div class="col-12 col-sm-6 col-md-4 video-news" v-for="(stream, index) in streams">
          <a href="javascript:;" data-toggle="modal" :data-target="'#show_video_'+index">
            <div class="image">
              <img src="/static/out_source/video.png" class="img-fluid" alt="">
              <i class="fas fa-play"></i>
            </div>
            <strong>{{stream.yayinBasligi}}</strong>
          </a>
        </div>

      </div>
      <div class="row">
        <div class="col-12">
          <a class="btn-load-more" href="#">DAHA FAZLA YÜKLE</a>
        </div>
      </div>
    </div>


    <div v-for="(stream, index) in streams" class="modal fade" :id="'show_video_'+index" tabindex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLongTitle">{{stream.yayinBasligi}}</h4>
          </div>
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9" v-html="stream.yayinEmbedKodu"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-aa-dark" data-dismiss="modal">Kapat</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "streaming",
    data() {
      return {
        activeStream: null,
        chatOpen: false,
        message: "",
        msgDisabled: false,
        chatChecker:null,
        scrollFixer:null
      }
    },
    created() {
      this.$store.dispatch("streams/getStreams").then();
      this.chatChecker = setInterval(() => {
        if (this.activeStream) {
          this.$store.dispatch("streams/chat", this.activeStream[0].ID).then();
          let container = this.$el.querySelector("#stream_message_area");
          container.scrollTop = container.scrollHeight;
        }
      }, 2000);
      this.scrollFixer = setInterval(() => {
        let container = this.$el.querySelector("#stream_message_area");
        container.scrollTop = container.scrollHeight;
      }, 500);
    },
    computed: {
      streams() {
        if (this.$store.state.streams.streams.length > 0) {
          this.activeStream = this.$store.state.streams.streams.filter(item => {
            if (item.canliYayin === 1) {
              // this.$store.dispatch("streams/chat",item.ID).then(res=>{
              //   return item;
              // });
              // TODO chat okuma endpointi geldiği zaman güncellenecek
              return item;
            }
          });
          return this.$store.state.streams.streams;
        }
      },
      chat() {
        return (this.$store.state.streams.chat.length > 0) ? this.$store.state.streams.chat : null;
      },
      user() {
        return this.$store.state.users.user;
      }
    },
    methods: {
      showChat() {
        this.chatOpen = !this.chatOpen;
      },
      sendMessage() {
        this.msgDisabled = true;
        this.$store.dispatch("streams/sendMessage", {yayinID: this.activeStream[0].ID, mesajAciklamasi: this.message})
          .then(() => {
            this.message = "";
            this.msgDisabled = false;
          })
          .catch(err => {
            this.msgDisabled = false;
          })
      }
    },
    beforeDestroy(){
      clearInterval(this.chatChecker);
      clearInterval(this.scrollFixer);
    }
  }
</script>

<style scoped>

</style>
