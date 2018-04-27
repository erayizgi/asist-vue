<template>
  <div class="links col-12 col-md-8">
    <div class="al-menu clearfix">
      <!-- new coupon button -->
      <router-link to="/coupon" class="btn-new-coupon"><i class="fas fa-plus"></i>YENİ KUPON <span>YAP!</span></router-link>
      <!-- notifications -->
      <div class="dropdown float-left notify">
        <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bell"></i>
          <span class="badge" v-if="newNotifications.length > 0">{{newNotifications.length}}</span>
        </div>
        <div class="dropdown-menu dropdown-menu-right notification-menu">
          <div class="header">BİLDİRİMLER</div>
          <ul>
            <li v-for="not in notifications" v-if="notifications.length > 0">
              <router-link :to="`${not.bildirim_url}`"class="clearfix" @mouseover="read(not.bildirim_id)">
                <img :src="not.IMG" alt="" class="user-image">
                <span><strong>{{not.adSoyad}}</strong> {{readableNotification(not.bildirim_tipi)}}</span>
              </router-link>
            </li>
            <li v-if="notifications.length == 0">
              <div class="col-md-12">
                <h4>Okunmamış Bildiriminiz Bulunmamaktadır!</h4>
              </div>
            </li>
          </ul>
          <div class="footer">
            <a href="#">Tümü</a>
          </div>
        </div>
      </div>
      <!-- message notifications -->
      <div class="dropdown float-left msg-notify">
        <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-comment"></i>
        </div>
        <div class="dropdown-menu dropdown-menu-right notification-menu messages">
          <div class="header">MESAJLAR</div>
          <ul v-if="messages">
            <li v-for="msg in messages">
              <router-link :to="`/message/inbox/${msg.conversation.conversation_id}`" class="clearfix">
                <img :src="msg.conversation.sender.IMG" alt="" class="user-image">
                <span><strong>{{msg.conversation.sender.adSoyad}}</strong>
                  {{msg.message[0].content}}
                </span>
              </router-link>
            </li>
          </ul>
          <div class="footer">
            <router-link to="/message/inbox">Tümü</router-link>
          </div>
        </div>
      </div>
      <!-- user menu -->
      <div class="user-menu-al float-left" @mouseover="userMenuOver" @mouseleave="userMenuOut">

        <img v-bind:src="user.IMG" alt="">

        <div data-toggle="show" data-target="#login-after-menu" :onmouseover="userMenuOver" :onmouseout="userMenuOut">
          <div class="clearfix">
            <div class="float-left">
              <strong>{{user.adSoyad}}</strong>
              <span>{{stats.balance}} AP</span>
            </div>
            <div class="float-right">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <ul class="user-menu-list" id="login-after-menu" v-show="userMenuActive">
            <li>
              <router-link to="/user/profile">Profil</router-link>
            </li>
            <li><a href="javascript:void(0)">Kupon Yap</a></li>
            <li><a href="javascript:void(0)">Geçmiş Kuponlar</a></li>
            <li><a @click="logout">Çıkış</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "logged-user",
    methods: {
      userMenuOver() {
        this.userMenuActive = true;
      },
      userMenuOut() {
        this.userMenuActive = false;
      },
      logout() {
        this.$store.commit("users/logout");
        this.$router.push("/");
      },
      read(bildirim_id) {
        this.$store.dispatch("users/readNotification", bildirim_id).then(res => {
          this.$store.dispatch("users/notifications").then(res => {
          });
        });
      },
      readableNotification(type){
        if(type==="post"){
          return "bir gönderi paylaştı";
        }else if(type==="kupon"){
          return "bir kupon paylaştı";
        }else if(type==="postOnWall"){
          return "bir gönderiyi duvarında paylaştı";
        }else if(type==="pm"){
          return "sana bir mesaj gönderdi";
        }
      }
    },
    created() {
      this.$store.dispatch("users/notifications").then(res => {
        // setTimeout(this.notifications(), 2000);
      })
    },
    mounted() {
      // setInterval(()=>{
      //   this.$store.dispatch("users/notifications").then(res=>{
      //     // setTimeout(this.notifications(), 2000);
      //   })
      // },30000);
      // setInterval(()=>{
      this.$store.dispatch("users/getUnreadMessages").then(res => {
        // setTimeout(this.notifications(), 2000);
      })
      // },30000);
    },
    computed: {
      user() {
        return this.$store.state.users.user;
      },
      stats(){
        return this.$store.state.users.stats;
      },
      wonRate() {
        if (this.$store.state.users.stats != null) {
          return ((this.$store.state.users.stats.won / this.$store.state.users.stats.coupons) * 100).toFixed(2)
        } else {
          return "Yükleniyor..";
        }
      },
      notifications() {
        return this.$store.state.users.notifications;
      },
      newNotifications(){
        return this.$store.state.users.notifications.filter(item=>{
          return (item.okundu===0)? item: null;
        })
      },
      messages() {
        return this.$store.state.users.messages;
      }
    },
    data() {
      return {
        userMenuActive: false
      }
    },

  }
</script>

<style scoped>

</style>
