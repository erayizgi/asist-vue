<template>
  <section id="register">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-9 col-lg-9">
          <h2 class="title">KAYIT OL</h2>
          <div class="register-form aa-form">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-12">
                  <div v-bind:class="error.type" v-show="error.hasAny">
                    <ul class="list-group" v-for="msg in error.message">
                      <li><h4>{{msg[0]}}</h4></li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Adınız Soyadınız</label>
                    <input class="form-control" type="text" v-model="user.adSoyad" name="Adınız Soyadınız"
                           v-validate="'required'"
                           :class="{'input':true,'text-danger':errors.has('Adınız Soyadınız')}">
                    <span v-show="errors.has('Adınız Soyadınız')" class="help text-danger">{{ errors.first('Adınız Soyadınız') }}</span>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Kullanıcı Adı</label>
                    <input class="form-control" type="text" v-model="user.kullaniciAdi" name="Kullanıcı Adı"
                           v-validate="'required'"
                           :class="{'input':true, 'text-danger':errors.has('Kullanıcı Adı')}">
                    <span v-show="errors.has('Kullanıcı Adı')" class="help text-danger">{{ errors.first('Kullanıcı Adı') }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Şifre</label>
                    <input class="form-control" type="password" name="Parola" v-model="user.password"
                           v-validate="'required|min:3|confirmed:Parola Tekrar'"
                           :class="{'input':true, 'text-danger':errors.has('Parola')}">
                    <span v-show="errors.has('Parola')" class="help text-danger">{{ errors.first('Parola') }}</span>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Şifre Tekrar</label>
                    <input class="form-control" type="password" name="Parola Tekrar" v-model="user.password_repeat"
                           v-validate="'required|min:3|confirmed:Parola Tekrar'"
                           :class="{'input':true, 'text-danger':errors.has('Parola Tekrar')}">
                    <span v-show="errors.has('Parola Tekrar')" class="help text-danger">{{ errors.first('Parola Tekrar') }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label>E-Posta Adresiniz</label>
                    <input class="form-control" type="text" name="E-mail" v-model="user.email"
                           v-validate="'required|email'" :class="{'input':true, 'text-danger':errors.has('E-Mail')}">
                    <span v-show="errors.has('E-mail')" class="help text-danger">{{ errors.first('E-mail') }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-12">
                  <div class="form-group">
                    <label>Cep Telefonu Numaranız</label>
                    <input id="phone" class="form-control" type="text" name="Telefon Numarası" v-model="user.kullaniciTelefon"
                           v-validate="'required'"
                           :class="{'input':true, 'text-danger':errors.has('Telefon Numarası')}">
                    <span v-show="errors.has('Telefon Numarası')" class="help text-danger">{{ errors.first('Telefon Numarası') }}</span>
                  </div>
                </div>

              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Ülke</label>
                    <input type="text" class="form-control" name="Ulke" v-model="user.kullaniciBulunduguUlke"
                           v-validate="'required'">
                    <span v-show="errors.has('Ulke')" class="help text-danger">{{ errors.first('Ulke') }}</span>

                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <label>Şehir</label>
                    <input type="text" class="form-control" name="Şehir" v-model="user.kullaniciBulunduguSehir"
                           v-validate="'required'">
                    <span v-show="errors.has('Şehir')" class="help text-danger">{{ errors.first('Şehir') }}</span>
                  </div>
                </div>

              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="Sözleşme" id="contract"
                           v-validate="'required'">
                    <label class="form-check-label" for="contract">
                      Üyelik sözleşmesini ve gizlilik sözleşmesini okudum onaylıyorum
                    </label>
                    <span v-show="errors.has('Sözleşme')" class="help text-danger">{{ errors.first('Sözleşme') }}</span>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mobile-buttons d-block d-md-none">
            <a href="" class="btn btn-block btn-social btn-facebook">
              <span class="fa fa-facebook-square"></span> Facebook ile giriş yap
            </a>
            <a href="" class="btn btn-block btn-social btn-google">
              <span class="fa fa-google-plus-square"></span> Google ile giriş yap
            </a>
          </div>
          <div class="register-form-footer clearfix">
            <button type="submit" class="float-right" @click="register">KAYIT OL <i class="fa fa-sign-in"></i></button>
          </div>
        </div>
        <div class="col-12 col-md-3 col-lg-3 sign-with d-none d-md-block">
          <a href="" class="btn btn-block btn-social btn-facebook">
            <span class="fa fa-facebook-square"></span> Facebook ile giriş yap
          </a>
          <a href="" class="btn btn-block btn-social btn-google">
            <span class="fa fa-google-plus-square"></span> Google ile giriş yap
          </a>
        </div>
        <div class="col-12 subsection d-none d-md-block">
          <h3 class="title">Lorem ipsum dolor sit amet,</h3>
          <p>consectetur adipiscing elit. Quisque<br> at ullamcorper massa. </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        error: {
          hasAny: false,
          message: '',
          type: ''
        },
        user: {
          kullaniciAdi: '',
          password: '',
          passwordRepeat: '',
          adSoyad: '',
          email: '',
          kullaniciTelefon: '',
          kullaniciHakkinda: '',
          kullaniciBulunduguUlke: '',
          kullaniciBulunduguSehir: ''
        }
      }
    },
    methods: {
      register() {
        this.$validator.validateAll().then(result => {
          if (result) {
            this.$store.dispatch("users/register", this.user).then(res => {
              if(res.data.status===true){
                this.error.hasAny = true;
                this.error.message = {success:[res.data.data]};
                this.error.type = "alert alert-success";
                this.$router.push('/login');
              }
            }).catch(err => {
              console.log(err.response);
              this.error.hasAny = true;
              this.error.message = err.response.data.data.errors.exception;
              this.error.type = "alert alert-danger";
            });
          }
        })
      }
    },

    mounted(){
	    $(function () {
		   $("#phone").mask("(999) 999-9999");
	    });

  }

  }
</script>

<style scoped>

</style>
