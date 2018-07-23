<template>
  <div class="comments-area">
    <div class="row bar nomargin">
      <div class="col-4 nopadding">
        <em>12</em>
        <a href="javascript:void(0)" class="button"><i class="fa fa-thumbs-up"></i> BEĞEN</a>
      </div>
      <div class="col-4 nopadding">
        <div class="clearfix center-block">
          <em>4</em>
          <a href="javascript:void(0)" class="button"><i class="fa fa-comment"></i> YORUM YAP</a>
        </div>
      </div>
      <div class="col-4 nopadding">
        <a href="javascript:void(0)" class="button"><i class="fa fa-share"></i> PAYLAŞ</a>
      </div>
    </div>
    <div class="comments">
      <!-- single comment -->
      <div class="single-comment">
        <div class="avatar">
          <img src="out_source/predictor.jpg" alt="">
        </div>
        <div class="comment">
          <strong>TOME STAMENKOVİC</strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id tristique nunc. Nullam scelerisque felis
          sit amet rhoncus fringilla. Proin imperdiet enim vitae nisl interdum pulvinar.
        </div>
      </div>
    </div>
    <div class="comment-box">
      <form action="#" method="post">
        <textarea name="comment" class="form-control"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "comments"
    }
</script>

<style scoped>

</style>
