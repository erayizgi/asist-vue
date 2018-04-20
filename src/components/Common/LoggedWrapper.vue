<template>
  <section id="home-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 d-none d-md-block">
          <activities/>
          <follow-suggestions/>
        </div>
        <feed />
      </div>

      <!-- activities and follow suggestion list only for mobile -->
      <div class="d-block d-md-none" style="margin-top: 30px; padding: 5px;">
        <div class="row">
          <div class="col-6 nopadding">
            <div class="activities">
              <h3 class="title">ARKADAŞ AKTİVİTELERİ</h3>
              <ul>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
                <!-- single activity -->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <a href="javascript:void(0)">MAKALECİ</a>
                    <strong>bir paylaşım yaptı.</strong>
                    <span>3 saat önce</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6 nopadding">
            <div class="follow">
              <h3 class="title">TAKİP ÖNERİLERİ</h3>
              <ul>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-following"><i class="fa fa-check"></i>TAKİPTE</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
                <!-- single recommendation-->
                <li class="clearfix">
                  <img src="out_source/avatar.jpg" class="float-left" alt="">
                  <div class="float-left">
                    <strong>MAKALECİ</strong>
                    <a href="javascript:void(0)" class="btn-follow"><i class="fa fa-plus"></i>TAKİP ET</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    import Activities from "./Activities";
    import FollowSuggestions from "./FollowSuggestions";
    import Feed from "./Feed";

    export default {
      components: {
        Feed,
        FollowSuggestions,
        Activities},
      name: "logged-wrapper"
    }
</script>

<style scoped>

</style>
