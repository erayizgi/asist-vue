<template>
  <section class="commented-matches">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-9">
          <!-- MATCH DETAIL -->
          <div class="match-detail">
            <!-- header -->
            <div class="row header">
              <div class="col-12 col-sm-4 home" style="height: auto!important">
                <strong>{{details.home}} </strong>
              </div>
              <div class="col-12 col-sm-4 info">
                <strong>{{ details.league_name }}</strong>
                <span class="muted">{{ details.country}} - 22:30</span>
                <div class="stats clearfix">
                  <span>{{ details.S1 }}</span>
                  <span>{{ details.SX }}</span>
                  <span>{{ details.S2 }}</span>
                </div>
              </div>
              <div class="col-12 col-sm-4 away" style="height: auto!important">
                <strong>{{ details.away }}</strong>
              </div>
            </div>

            <div class="tab-links clearfix mb-15" role="tablist">
              <a data-target="customtab1" href="javascript:;" class="tab-link ">Tahminci Yorumu</a>
              <a data-target="customtab2 " href="javascript:;" class="tab-link active">Anket</a>
            </div>
            <div class="tabs" role="tabpanel">

              <!-- COMMENTS TAB -->
              <div class="tab-pane" id="customtab1">

                <ul class="pagination">
                  <!--<li class="page-item"><a class="page-link" href="#">Önceki</a></li>-->
                  <li :class="`page-item ${(n===currentPage)? 'active' :''} `" v-for="n in pageCount">
                    <a class="page-link" href="javascript:;" @click="changePage(n)">{{n}}</a>
                  </li>
                  <!--<li class="page-item"><a class="page-link" href="#">Sonraki</a></li>-->
                </ul>

                <!-- COMMENT -->
                <div class="comment clearfix" v-for="comment in comments">
                  <div v-if="isLogged">
                    <em class="pull-right" v-if="comment.kullaniciAdi === user.kullaniciAdi">
                      <a class="btn btn-default" @click="deleteComment(comment.tahmin_id)">
                        <i class="fa fa-times"></i>
                      </a>
                    </em>
                  </div>
                  <div class="avatar float-left">
                    <img :src="comment.IMG" alt="">
                  </div>
                  <router-link :to="`/${comment.kullaniciAdi}`">{{comment.adSoyad}}</router-link>
                  <span class="date" v-date-show="comment.created_at"></span>
                  <p>{{comment.tahmin_yorumu}}</p>

                </div>
                <div class="new-comment clearfix" v-if="isLogged && !isLoading">
                  <h3 class="title with-border">Mesaj Yaz</h3>
                  <div class="form-group">
                    <textarea name="user_comment" class="form-control" v-model="comment"></textarea>
                  </div>
                  <button class="btn btn-aa-dark float-right" @click="send">Yorum yap</button>
                </div>
                <spinner v-if="isLoading"/>
              </div>

              <!-- POLL TAB -->
              <div class="tab-pane show" id="customtab2">
                <div class="alert alert-danger" v-if="error">
                  <h5>{{error}}</h5>
                </div>
                <!-- POLL -->
                <div class="simple-poll">

                  <div v-if="isLogged && !exists">
                    <h3 class="poll-question with-border">Maç sonucu ne olur?</h3>

                    <div v-if="!isLogged">
                      <div class="alert alert-warning">
                        <strong>Giriş Yap!</strong> Karşılaşmaya ait ankete yanıt vermek için
                        lütfen giriş yapınız.
                      </div>
                    </div>

                    <div>
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio"
                               class="custom-control-input"
                               v-model="surveys" value="1">
                        <label class="custom-control-label" for="customRadio1">{{ details.home
                          }}</label>
                      </div>

                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio"
                               class="custom-control-input"
                               v-model="surveys" value="2">
                        <label class="custom-control-label" for="customRadio2">Berabere
                          kalır</label>
                      </div>

                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio3" name="customRadio"
                               class="custom-control-input"
                               v-model="surveys" value="3">
                        <label class="custom-control-label" for="customRadio3">{{ details.away
                          }}</label>
                      </div>
                      <button class="btn btn-aa-dark" @click="join">Cevabımı Kaydet</button>
                    </div>
                  </div>
                </div>


                <!-- POLL RESULTS -->
                <!--<div class="poll-results" style="display: none;">-->

                <div class="poll-results" v-if="exists">

                  <h3 class="title with-border">Anket sonuçları</h3>

                  <strong class="progress-label">{{ details.home }}</strong>
                  <div class="progress">
                    <div class="progress-bar bg-aa-pink" role="progressbar"
                         :style="'width:'+(opt_one/(opt_one+opt_two+opt_three))*100+'%'"
                         aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100">
                      {{(opt_one/(opt_one+opt_two+opt_three))*100}}
                    </div>
                  </div>
                  <strong class="progress-label">Berabere kalır</strong>
                  <div class="progress">
                    <div class="progress-bar bg-aa-purple" role="progressbar"
                         :style="'width:'+(opt_two/(opt_one+opt_two+opt_three))*100+'%'"
                         aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100">
                      {{(opt_two/(opt_one+opt_two+opt_three))*100}}
                    </div>
                  </div>
                  <strong class="progress-label">{{ details.away }}</strong>
                  <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar"
                         :style="'width:'+(opt_three/(opt_one+opt_two+opt_three))*100+'%'"
                         aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100">{{
                      (opt_three/(opt_one+opt_two+opt_three))*100}}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div class="col-12 col-sm-4 col-md-3">
          <follow-suggestions/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FollowSuggestions from "./FollowSuggestions";
  import Spinner from "./Spinner";

  export default {
    name: "ForecastDetail",
    components: {Spinner, FollowSuggestions},
    data() {
      return {
        details: null,
        comments: null,
        isLoading: false,
        tab: false,
        surveys: null,
        exists: false,
        opt_one: 0,
        opt_two: 0,
        opt_three: 0,
        comment: null,
        error: null,
        pageCount: 0,
        currentPage: 1,
      }
    },

    computed: {
      user() {
        return this.$store.state.users.user;
      },
      isLogged() {
        return this.$store.state.users.isLogged;
      }
    },

    methods: {
      join() {
        this.isLoading = true;
        this.$store.dispatch("common/saveForecast", {
          mac_id: this.$route.params.slug,
          yanit_id: this.surveys
        }).then().catch((err) => {
          this.$swal({title: 'Hata', text: err.response.data.message, type: 'warning'})
        });
      },

      send() {
        this.isLoading = true;
        this.$store.dispatch("common/commentForecast", {
          mac_id: this.$route.params.slug,
          tahmin_yorumu: this.comment
        }).then((res) => {
          this.$swal({title: 'Başarılı', text: res.data.message, type: 'success'});

          this.comment = "";

          this.$store.dispatch("common/getForecastDetail", {slug: this.$route.params.slug}).then((res) => {
            this.details = res.data.data.data;
            this.comments = res.data.data.comments;
            this.isLoading = false;
          });
        });
      },

      deleteComment(comment_id) {
        this.isLoading = true;
        this.$swal({
          title: "Yorumumu Sil",
          text: "Yorumunuzu silmek istediğinize emin misiniz? Bu işlemi geri almanız mümkün olmayacaktır.",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yorumu sil",
          cancelButtonText: "İptal"
        }).then(result => {
          if (result.value) {
            this.$store.dispatch("common/deleteForecastComment", comment_id)
              .then(res => {
                this.$store.dispatch("common/getForecastDetail", {slug: this.$route.params.slug}).then((res) => {
                  this.details = res.data.data.data;
                  this.comments = res.data.data.comments;
                  this.isLoading = false;
                });
              });
          }
        })
      },
      changePage(n) {
        this.isLoading = true;
        this.currentPage = n;
        let offset = 0;
        if (this.currentPage > 1) {
          offset = this.currentPage - 1;
        }
        this.$store.dispatch("common/getForecastDetail", {
          slug: this.$route.params.slug,
          offset: offset * 2
        }).then((res) => {
          this.details = res.data.data.data;
          this.comments = res.data.data.comments;
          this.isLoading = false;
          this.pageCount = Math.round(res.data.data.metadata.count / 2);
        });
      }
    },

    mounted() {

    },

    created() {
      this.isLoading = true;
      if (this.$store.state.users.isLogged) {
        this.$store.dispatch("common/checkForecast", {mac_id: this.$route.params.slug}).then((res) => {
          this.exists = res.data.data.is_exists;
          this.opt_one = res.data.data.results.option_one;
          this.opt_two = res.data.data.results.option_two;
          this.opt_three = res.data.data.results.option_three;
        });
      } else {
        this.error = "Ankete katılabilmek ve sonuçları görüntüleyebilmek için giriş yapmış olmanız gerekmektedir"
      }

      this.$store.dispatch("common/getForecastDetail", {slug: this.$route.params.slug, offset: 0}).then((res) => {
        this.details = res.data.data.data;
        this.comments = res.data.data.comments;
        this.isLoading = false;
        this.pageCount = Math.round(res.data.data.metadata.count / 2);
        $(document).ready(() => {
          $('.tab-link').on('click', function () {
            $(".tab-pane").removeClass("show");
            $(".tab-link").removeClass("active");
            $(this).addClass("active");
            $('#' + $(this).attr("data-target")).addClass("show");
          });
        });
      });
    }
  }
</script>

<style scoped>

</style>
