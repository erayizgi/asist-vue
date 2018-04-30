<template>
  <div>
    <div v-if="rePost">
      <div class="content">
        <div v-if="!isLoading">
          <div class="wrapper bg-white">
            <h5 v-if="post">{{post.durum}}</h5>
            <div class="image-content" v-if="post.resim">
              <div class="wrapper">
                <img :src="post.resim" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
        <spinner v-else/>
      </div>
    </div>
    <div v-else>
      <div v-if="!isLoading">
        <div class="text-content" v-if="post">
          <div class="wrapper">
            <h4>{{post.durum}}</h4>
          </div>

        </div>
        <div class="image-content" v-if="post.resim">
          <div class="wrapper">
            <img :src="post.resim" class="img-fluid" alt="" style="width:100%!important;">
          </div>
        </div>
      </div>
      <spinner v-else/>
    </div>
    <interactions :post-id="post.paylasim_id" :type="1" v-if="!isLoading && !rePost"/>
  </div>
</template>

<script>
  import Spinner from "../Spinner";
  import Interactions from "../Interactions";

  export default {
    components: {
      Interactions,
      Spinner},
    name: "static-content",
    props: [
      'postContent',
      'imageContent',
      'rePost',
      'modal'
    ],
    data() {
      return {
        isLoading: false,
        post: null
      }
    },
    created() {
      this.isLoading = true;
      if(this.rePost){
        this.post = {};
        this.post.durum = this.postContent;
        if(this.imageContent !== ""){
          this.post.resim = this.imageContent;
        }

        this.isLoading = false;
      }else{
        this.$store.dispatch("posts/getPost", this.postContent).then(res => {
          this.post = res.data.data;
          this.isLoading = false;
        });
      }


    }
  }
</script>

<style scoped>

</style>
