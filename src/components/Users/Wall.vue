<template>
  <div>
    <profile-head :user-name="this.$route.params.user_name"/>
    <!-- send user message modal -->

    <section id="user-profile-menu-bar">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-9">
            <ul class="profile-menu clearfix">
              <li class="active">
                <a href="javascript:void(0)">TÜM GÖNDERİLER <i class="fa fa-chevron-down"></i></a>
              </li>
              <li class="">
                <a href="javascript:void(0)">PAYLAŞTIĞI KUPONLAR <i class="fa fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="home-content">
      <div class="container">
        <div class="row">
          <user-feed :user-name="this.$route.params.user_name"/>
          <div class="col-12 col-sm-4 col-md-3">
            <div class="task-list">
              <h3 class="title">YAPILACAKLAR LİSTESİ</h3>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100">25%
                </div>
              </div>
              <ul>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status done"><i class="fas fa-check"></i></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status done"><i class="fas fa-check"></i></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
                <li class="clearfix">
                  <a href="#" class="task">Lorem ipsum dolor sit amet, consectetur.</a>
                  <span class="status"></span>
                </li>
              </ul>
            </div>
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
              </ul>
            </div>
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
    </section>
  </div>
</template>

<script>
  import ProfileHead from "./Wall/ProfileHead";
  import UserFeed from "./Wall/UserFeed";

  export default {
    components: {
      UserFeed,
      ProfileHead
    },
    name: "wall",
  }
</script>

<style scoped>

</style>
