<template>
  <div id="profile-edit">
    <section id="todo-home">
      <div class="container task-detail-wrapper">
        <div class="row">
          <profile-nav/>
          <div class="col-12 col-sm-8 col-md-9 task-detail" v-if="isLogged">
            <h4 class="sub-title">GENEL HESAP AYARLARI</h4>
            <div class="row nomargin">
              <div class="col-12">
                {{error}}
              </div>
              <div class="form-group col-12">
                <label>Adınız Soyadınız</label>
                <input class="form-control" type="text" v-model="userData.adSoyad" v-validate="'required'" name="Ad Soyad">
                <span class="text-danger">{{errors.first("Ad Soyad")}}</span>
              </div>
              <div class="form-group col-12">
                <label>Kullanıcı Adınız</label>
                <input class="form-control" type="text" v-model="userData.kullaniciAdi" readonly>
              </div>
              <div class="form-group col-12">
                <label>Sizi Tanıtan Bir Kaç Cümle Giriniz</label>
                <input class="form-control" type="text" v-model="userData.kullaniciHakkinda" v-validate="'required'" name="Hakkınızda">
                <small class="form-text text-muted">Diğer kullanıcıların profilinize göz attıklarında karşılarına
                  çıkacak olan kullanıcı hakkında metnidir.
                </small>
                <span class="text-danger">{{errors.first("Hakkınızda")}}</span>
              </div>
              <div class="form-group col-12">
                <label>Doğum Tarihiniz</label>
                <input class="form-control" type="text" name="Doğum Tarihi" v-model="userData.kullaniciDogumTarihi" v-validate="'required|date_format:DD/MM/YYYY'">
                <span class="text-danger">{{errors.first("Doğum Tarihi")}}</span>
                <small class="form-text text-muted">Lütfen doğum tarihinizi gün/ay/yıl şeklinde giriniz.</small>
              </div>
              <div class="form-group col-12">
                <label>E-posta adresiniz</label>
                <input class="form-control" type="text" name="email" v-model="userData.email" readonly>
              </div>
              <div class="form-group col-12">
                <label>Cep Telefon Numaranız</label>
                <input class="form-control" type="text" name="email" v-model="userData.kullaniciTelefon" readonly>
                <small class="form-text text-muted">Cep numaranız herkes tarafından görüntülenmeyecektir.</small>
              </div>
              <div class="form-group col-12 col-sm-6" style="padding-right: 15px;">
                <label>Ülke</label>
                <input type="text" class="form-control" v-model="userData.kullaniciBulunduguUlke">
              </div>
              <div class="form-group col-12 col-sm-6">
                <label>Şehir</label>
                <input type="text" class="form-control" v-model="userData.kullaniciBulunduguSehir">
              </div>
              <div class="form-group col-12">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" v-bind:checked="user.kupon_sms">
                  <label class="form-check-label">Takip ettiğim tahminciler yeni kupon paylaştığı zaman SMS almak
                    istiyorum.</label>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-block" @click="updateProfile">BİLGİLERİ KAYDET</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ProfileNav from "./Profile/ProfileNav";

  export default {
    components: {ProfileNav},
    name: "profile",
    data(){
      return {
        error: "",
        isLoading:false,
        userData:{}
      }
    },
    created(){
      if(!this.$store.state.users.isLogged){
        if(!localStorage.getItem("token")){
          this.$router.push("/");
        }
      }else{
        this.userData = this.$store.state.users.user;
      }
    },
    computed:{
      isLogged(){
        return this.$store.state.users.isLogged
      },
      user(){
        this.userData = this.$store.state.users.user;
        return this.$store.state.users;
      }
    },
    methods:{
      updateProfile(){
        let data = {
          adSoyad : this.userData.adSoyad,
          kullaniciBulunduguSehir: this.userData.kullaniciBulunduguSehir,
          kullaniciBulunduguUlke: this.userData.kullaniciBulunduguUlke,
          kullaniciDogumTarihi: this.userData.kullaniciDogumTarihi,
          kullaniciHakkinda : this.userData.kullaniciHakkinda
        };
        this.isLoading = true;
        this.$validator.validateAll().then(res => {
          this.$store.dispatch("users/updateProfile",data).then(res=>{
            this.error = "Başarılı!"
          }).catch();
        });

      }
    }
  }
</script>

<style scoped>

</style>
