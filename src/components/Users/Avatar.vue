<template>
  <div id="avatar-update">
    <section id="todo-home">
      <div class="container task-detail-wrapper">
        <div class="row">
          <profile-nav/>
          <div class="col-12 col-sm-8 col-md-9 task-detail">
            <h4 class="sub-title">GENEL HESAP AYARLARI</h4>
            <div class="row nomargin">
              <div class="col-4">
                <img :src="user.IMG" alt="" style="width:200px;">
              </div>
              <div class="form-group col-12">
                <label>Profil Resmi</label>
                <input type="file" class="form-control" v-on:change="upload($event.target.files,'avatar')"
                       accept="image/*" v-if="!avatarLoading"/>
                <spinner v-else/>
              </div>
              <div class="col-4">
                <img :src="user.coverIMG" alt="" style="width:200px;">
              </div>
              <div class="form-group col-12">
                <label>Kapak Resmi</label>
                <input type="file" class="form-control" v-on:change="upload($event.target.files,'cover')"
                       accept="image/*" v-if="!coverLoading"/>
                <spinner v-else/>
              </div>
            </div>
            <button class="btn btn-primary btn-block">BİLGİLERİ KAYDET</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ProfileNav from "./Profile/ProfileNav";
  import axios from 'axios';
  import Spinner from "../Common/Spinner";

  export default {
    components: {
      Spinner,
      ProfileNav},
    name: "avatar",
    data() {
      return {
        cloudinary: {
          uploadPreset: 'fjvux33a',
          apiKey: '732343936864494',
          cloudName: 'dcwytr9z9'
        },
        avatarLoading: false,
        coverLoading: false,
        avatarIMG: ''
      }
    },
    computed: {
      clUrl: function () {
        return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/upload`
      },
      user() {
        return this.$store.state.users.user;
      }
    },
    created() {
      this.avatarIMG = this.$store.state.users.IMG;
    },
    methods: {
      upload(file, type) {
        const formData = new FormData();
        formData.append('file', file[0]);
        formData.append('upload_preset', this.cloudinary.uploadPreset);
        formData.append('tags', "asist-analiz,user-avatar");
        for (var pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }
        if(type ==='avatar'){
          this.avatarLoading = true;
        }else{
          this.coverLoading = true;
        }
        axios.post(this.clUrl, formData).then(res => {
          if (type === 'avatar') {
            this.$store.dispatch("users/updateAvatar", res.data.secure_url).then(res => {
              this.avatarLoading = false;
            })
          }
          if (type === 'cover') {
            this.$store.dispatch("users/updateCover", res.data.secure_url).then(res=>{
              this.coverLoading = false;
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
