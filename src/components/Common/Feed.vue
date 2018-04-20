<template>
  <div class="col-12 col-md-9">
    <!-- login first -->
    <div class="shares" v-for="post in posts">
      <div class="profile-bar">
        <img :src="post.IMG" class="img-fluid" width="75" height="75" alt="">
        <router-link :to="`/${post.kullaniciAdi}`"><strong>{{post.adSoyad}}</strong></router-link>
        <em v-date-show="post.islem_tarihi"></em> <em>{{humanReadableActivity(post.islem_turu)}}</em>

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
      <static-content v-if="post.islem_turu==='post'" :modal="false" :post-content="post.islem_id"/>
      <coupon-content v-if="post.islem_turu==='kupon'" :modal="false" :coupon-id="post.islem_id"/>
      <commented-on v-if="post.islem_turu==='comment'" :comment-id="post.islem_id"/>
      <re-post v-if="post.islem_turu==='postOnWall'" :post-id="post.islem_id"/>
    </div>
    <spinner v-if="isLoading"/>

    <a class="btn-load-more" @click="loadMore">DAHA FAZLA YÜKLE</a>
  </div>

</template>

<script>
  import StaticContent from "./FeedComponents/StaticContent";
  import CouponContent from "./FeedComponents/CouponContent";
  import Spinner from "./Spinner";
  import CommentedOn from "./FeedComponents/CommentedOn";
  import RePost from "./FeedComponents/RePost";

  export default {
    components: {
      RePost,
      CommentedOn,
      Spinner,
      StaticContent,
      CouponContent
    },
    name: "feed",
    data() {
      return {
        isLoading: false,
        page: 0
      }
    },
    created() {
      this.isLoading = true;
      if (this.$store.state.users.feed.length === 0) {
        this.$store.dispatch("users/feed", this.page).then(res => {
          this.isLoading = false;
        })
      }
    },
    computed: {
      posts() {
        return this.$store.state.users.feed;
      }
    },
    methods: {
      loadMore() {
        this.page++;
        this.isLoading = true;
        this.$store.dispatch("users/feed", this.page).then(res => {
          this.isLoading = false;
        })
      },
      humanReadableActivity(type) {
        if (type === "kupon") {
          return "bir kupon paylaştı"
        } else if (type === "post") {
          return "bir gönderi paylaştı"
        } else if (type === "postOnWall") {
          return "başka bir gönderiyi duvarında yayınladı"
        } else if (type === "comment") {
          return "bir gönderiye yorum yaptı"
        }
      }
    }
  }
</script>

<style scoped>

</style>
