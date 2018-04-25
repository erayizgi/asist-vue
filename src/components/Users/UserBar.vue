<template>
  <section id="user-bar">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-5 col-md-4 col-lg-3">
          <div class="user">
            <router-link :to="`/${user.kullaniciAdi}`"><img class="avatar" :src="user.IMG" alt=""></router-link>
            <router-link :to="`/${user.kullaniciAdi}`"><strong>{{user.adSoyad}}</strong></router-link>
            <router-link to="/coupon" class="new-coupon"><img src="static/images/icon-new-coupon.png" alt="">KUPON YAP</router-link>
            <div class="bg-image" v-bind:style="`background-image:url('${user.IMG}')`"></div>
            <div class="bg-overlay"></div>
          </div>
          <div class="profile-stats clearfix" v-if="!statsLoading">
            <span class="float-left">
              TAKİPÇİ
              <router-link :to="`/${user.kullaniciAdi}/followers`">
                <strong>
                  {{stats.followers}}
                </strong>
              </router-link>
            </span>
            <span class="float-left">
                        TAKİP
                        <strong>{{stats.following}}</strong>
                    </span>
            <span class="float-left">
                        BAŞARI
                        <strong class="text-pink bold-condensed">%18.84</strong>
                    </span>
          </div>
          <div class="profile-stats clearfix" v-else>
            <spinner/>
          </div>
        </div>
        <div class="col-12 col-sm-7 col-md-8 col-lg-9 user-share-area">
          <div :class="error.type" v-if="error.hasAny">
            <h4>{{error.message}}</h4>
          </div>
          <span class="text">Fikirlerini ya da Fotoğraflarını Paylaş</span>
          <textarea name="comment" class="form-control" v-model="postText"
                    :placeholder="'Ne düşünüyorsun,'+user.adSoyad+'?'"></textarea>
          <div class="col-md-2 float-left" v-if="postResim">
            <img :src="postResim" alt="" style="width:100%;">
          </div>
          <div class="float-right">
            <label class="custom-file img-btn" style="padding:5px!important;">
              <i class="fas fa-image"></i>
              <input type="file" id="file" class="custom-file-input" style="display: none;" :disabled="pResimLoading"
                     v-on:change="upload($event.target.files,'postResim')">
              <div class="custom-file-control"></div>
            </label>
            <button class="share-btn" @click="createPost">PAYLAŞ</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Spinner from "../Common/Spinner";
  import axios from 'axios';

  export default {
    components: {Spinner},
    name: "user-bar",
    data() {
      return {
        statsLoading: false,
        postText: '',
        postResim: '',
        error: {
          hasAny: false,
          message: '',
          type: ''
        },
        pResimLoading: false,
        cloudinary: {
          uploadPreset: 'fjvux33a',
          apiKey: '732343936864494',
          cloudName: 'dcwytr9z9'
        },
      }
    },
    created() {
      this.statsLoading = true;
      this.$store.dispatch("users/getMyStatistics").then(res => {
        this.statsLoading = false;
      });
    },
    computed: {
      user() {
        return this.$store.state.users.user;
      },
      clUrl: function () {
        return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/upload`
      },
      stats() {
        return this.$store.state.users.stats;
      }
    },
    beforeDestroy() {
      if (this.postResim) {
        if (confirm("Yaptığınız değişiklikler henüz kaydedilmedi, sayfadan çıkmak istediğinize emin misiniz?")) {
          return true;//TODO resmi silme isteği yap
        } else {
          return false;
        }
      }
    },
    methods: {
      createPost() {
        let data = {
          paylasim_tipi: 1,
          /*
          durum: this.postText,
          resim: this.postResim,
          */
        };

        if (this.postText.length === 0 && this.postResim.length === 0) {
          this.$swal({title: "Dikkat!", text: "Yazı alanını ya da resim alanını boş bırakamazsınız", type: "warning"});
        } else {
          if (this.postText.length > 0) {
            data.durum = this.postText;
          } else {
            data.durum = ' ';
          }
          if (this.postResim.length > 0) {
            data.resim = this.postResim;
          }
          this.$store.dispatch("posts/createPost", data).then(res => {
            this.postText = "";
            this.postResim = "";
            this.error.hasAny = true;
            this.error.message = "Durum başarıyla oluşturuldu";
            this.error.type = "alert alert-success";
          });
        }
      },
      upload(file, type) {
        const formData = new FormData();
        formData.append('file', file[0]);
        formData.append('upload_preset', this.cloudinary.uploadPreset);
        formData.append('tags', "asist-analiz,user-avatar");
        for (var pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
        if (type === 'postResim') {
          this.pResimLoading = true;
        }
        axios.post(this.clUrl, formData).then(res => {
          if (type === 'postResim') {
            this.postResim = res.data.secure_url;
            this.pResimLoading = false;
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
