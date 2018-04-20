<template>
  <div class="comments-area">
    <div class="row bar nomargin">

      <modal :name="'asd'+postId" :adaptive="true" :height="'auto'" :scrollable="true">
        <div class="container">
          <div class="row" id="user-list">
            <div class="col-md-12 col-12">
              <h4 class="title">Bu Gönderiyi Beğenenler</h4>
            </div>
            <div class="col-12 col-md-12  mb-15" v-if="likers.length < 1">
              <h5 class="text-center">Malesef, bu gönderiyi henüz kimse beğenmedi.</h5>
            </div>
            <div class="col-12 col-md-12" v-for="liker in likers">
              <div class="user-card clearfix">
                <div class="avatar float-left">
                  <img :src="liker.IMG" alt="" style="width:50px;height:50px;">
                </div>
                <div class="info float-right">
                  <div class="clearfix user">
                    <strong class="float-left">{{liker.adSoyad}}</strong>
                    <div class="float-right">
                      <a href="#" class="btn-follow"><i class="fas fa-plus"></i> TAKİP ET</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </modal>
      <modal :name="'repost'+postId" :adaptive="true" :scrollable="true" :width="'80%'" :height="'auto'"
             :minHeight="300">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">PAYLAŞ</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <textarea name="comment" cols="30" rows="3" class="form-control" v-model="repost.durum"
                        placeholder="Eklemek istediğin bir şey var mı?"></textarea>
            </div>
            <div class="shares" v-if="post && !modalIsLoading">
              <div class="profile-bar">
                <img :src="post.IMG" class="img-fluid" width="75" height="75" alt="">
                <router-link :to="`/${post.kullaniciAdi}`"><strong>{{post.adSoyad}}</strong></router-link>
                <em v-date-show="post.created_at"></em>
                <div class="float-right">
                  <div class="dropdown">
                    <button class="btn-coupon-status" type="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item facebook" href="#"><i class="fab fa-facebook"></i> Facebook'ta Paylaş</a>
                      <a class="dropdown-item twitter" href="#"><i class="fab fa-twitter"></i> Twitter'da Paylaş</a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!isLoading && post.paylasim_tipi === 1" class="row">
                <div class="text-content" v-if="post.durum">
                  <div class="wrapper">
                    <h4>{{post.durum}}</h4>
                  </div>

                </div>
                <div class="image-content" v-if="post.resim" style="width:100%!important">
                  <div class="wrapper">
                    <img :src="post.resim" class="img-fluid" alt="" style="width:100%!important;">
                  </div>
                </div>
              </div>
              <div v-if="!isLoading && post.paylasim_tipi === 2">
                <coupon-detail :games="coupon.games" v-if="!isLoading && isLogged"/>
                <coupon-status :status="coupon.status" :games="coupon.games" :re-post="false" v-if="!isLoading"/>
              </div>
            </div>
            <spinner v-if="modalIsLoading"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-aa-light" @click="close">Kapat</button>
            <button type="button" class="btn btn-aa-dark" @click="sendRePost">PAYLAŞ</button>
          </div>
        </div>
      </modal>

      <div class="col-4 nopadding">
        <em @click="showLikers">{{likeCount}}</em>
        <a href="javascript:void(0)" :class="isLiked" @click="like"><i class="fa fa-thumbs-up"></i> BEĞEN</a>
      </div>
      <div class="col-4 nopadding">
        <div class="clearfix center-block">
          <em>{{commentsCount}}</em>
          <a href="javascript:void(0)" class="button"><i class="fa fa-comment"></i> YORUM</a>
        </div>
      </div>
      <div class="col-4 nopadding">
        <a href="#" class="button" @click="openRePost"><i class="fa fa-share"></i> PAYLAŞ</a>
      </div>
    </div>
    <div v-if="!isLoading">
      <div class="comments" v-if="comments.length > 0">
        <div class="wrapper">
          <!-- single comment -->
          <div class="single-comment" v-for="comment in comments">
            <div class="avatar">
              <img :src="comment.IMG" alt="">
            </div>
            <div class="comment">
              <strong>
                {{comment.adSoyad}}
                <em v-date-show="comment.yorum_yapilan_tarih"></em>
                <div v-if="isLogged">
                  <em class="pull-right" v-if="comment.kullaniciAdi === user.kullaniciAdi">
                    <a class="btn btn-default" @click="deleteComment(comment.yorum_id)">
                      <i class="fa fa-times"></i>
                    </a>
                  </em>
                </div>
              </strong>
              {{comment.yorum}}
            </div>
          </div>
        </div>
        <div class="wrapper" v-if="commentLoading">
          <spinner/>
        </div>
        <div class="show-all">
          <a href="javascript:" @click="loadAllComments" v-if="showMore">Daha Fazlasını Gör</a>
        </div>
      </div>
      <div class="comment-box">
        <textarea name="comment" class="form-control" v-model="comment" @keydown.enter.prevent="addComment"
                  :disabled="commentLoading">
        </textarea>

      </div>
    </div>
  </div>

</template>

<script>
  import Spinner from './Spinner';
  import CouponDetail from './FeedComponents/CouponDetail'
  import CouponStatus from './FeedComponents/CouponStatus'

  export default {
    name: "interactions",
    components: {
      Spinner,
      CouponDetail,
      CouponStatus
    },
    props: [
      "postId",
      "type"
    ],
    data() {
      return {
        isLoading: false,
        comments: [],
        commentsCount: 0,
        comment: "",
        commentLoading: false,
        liked: false,
        likeCount: 0,
        page: 0,
        showMore: true,
        likers: {},
        showModal: false,
        post: null,
        modalIsLoading: false,
        coupon: {},
        repost: {},

      }
    },
    created() {
      this.isLoading = true;
      this.$store.dispatch("comments/getCommentsByPostId", {post: this.postId, limit: 1}).then(res => {
        this.commentsCount = res.data.data.metadata.count;
        if (this.commentsCount > 0) {
          this.comments = res.data.data.data;
        }
        this.isLoading = false;
      });

      this.$store.dispatch("posts/getLikeCount", this.postId).then(res => {
        this.likeCount = res.data.data;
      });
      if (this.isLogged) {
        this.$store.dispatch("posts/hasLiked", this.postId).then(res => {
          this.liked = res.data.data;
        });
      }
    },
    computed: {
      user() {
        return this.$store.state.users.user;
      },
      isLiked() {
        return (this.liked) ? "button active" : "button"
      },
      isLogged(){
        return this.$store.state.users.isLogged;
      }
    },
    methods: {
      addComment() {
        let data = {
          yorum: this.comment,
          icerik_tipi: this.type,
          paylasim_id: this.postId
        };
        this.commentLoading = true;
        if(this.isLogged){
          this.$store.dispatch("comments/comment", data)
            .then(res => {
              this.comments.push(res.data.data);
              this.commentLoading = false;
              this.comment = "";
            });
        }else{
          this.$swal({
            title: "Uyarı!",
            text: "Giriş yapmadan yorum yapmanız mümkün değildir.",
            type: "error"
          }).then(()=>{
            this.commentLoading = false;
            this.comment = "";
          })
        }
      },
      loadAllComments() {
        this.commentLoading = true;
        this.$store.dispatch("comments/getCommentsByPostId", {
          post: this.postId,
          limit: 10,
          offset: (this.page) * 10
        }).then(res => {
          if (this.page === 0) {
            this.comments = res.data.data.data;
          } else {
            res.data.data.data.forEach(item => {
              this.comments.push(item);
            })
          }
          if (res.data.data.metadata.count <= (this.page * 10)) {
            this.showMore = false;
          }
          this.commentLoading = false;
          this.page++;

        });
      },
      deleteComment(comment_id) {
        this.$swal({
          title: "Yorumumu Sil",
          text: "Yorumunuzu silmek istediğinize emin misiniz? Bu işlemi geri almanız mümkün olmayacaktır.",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yorumu sil",
          cancelButtonText: "İptal"
        }).then(result => {
          if (result.value) {
            this.$store.dispatch("comments/deleteComment", comment_id)
              .then(res => {
                this.loadAllComments();
              });
          }
        })
      },
      like() {
        this.liked = !this.liked;
        this.likeCount = (this.liked) ? this.likeCount + 1 : this.likeCount - 1;
        this.$store.dispatch("posts/like", {post_id: this.postId})
          .then(res => {
            this.liked = res.data.data;
          })
          .catch(err => {

          })
      },
      showLikers() {
        this.$modal.show('asd' + this.postId);

        this.$store.dispatch("posts/showLikers", this.postId)
          .then(res => {
            this.likers = res.data.data;
          });
      },
      checkIfNull: function (val) {
        return (val !== null || val !== "" || val !== undefined);

      },
      isLogged() {
        return this.$store.state.users.isLogged;
      },
      openRePost() {
        this.modalIsLoading = true;
        this.$modal.show('repost' + this.postId);
        this.$store.dispatch("posts/getPost", this.postId).then(res => {
          this.post = res.data.data;
          if (this.post.paylasim_tipi === 2) {
            this.$store.dispatch("posts/couponDetail", this.post.durum).then(res => {
              this.coupon.games = res.data.data.data;
              return this.$store.dispatch("posts/couponStatus", this.coupon.games[0].kupon_id)
            }).then(res => {
              this.coupon.status = res.data.data.data;
              this.modalIsLoading = false;
            });
          } else {
            this.modalIsLoading = false;
          }
        })
      },
      close() {
        this.$modal.hide("repost" + this.postId);
      },
      sendRePost() {
        this.$store.dispatch("posts/createPost", {
          paylasim_tipi: 3,
          durum: this.repost.durum,
          paylasilan_gonderi: this.postId
        }).then(res => {
          this.$swal({
            title: "Başarılı",
            text: "Gönderi duvarınızda paylaşıldı",
            type: "success",
            showCancelButton: false,
            confirmButtonText: "Teşekkürler!",
          }).then(result => {
            this.close();
          })
        });
      }
    }
  }
</script>

<style scoped>

</style>
