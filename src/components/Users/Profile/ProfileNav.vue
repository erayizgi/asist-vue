<template>
  <div class="col-12 col-sm-4 col-md-3">
    <ul class="subpage-list-menu">
      <li class=""><router-link to="/user/profile">Genel Hesap Ayarları</router-link></li>
      <li class=""><a href="profil-2.html">Şifre İşlemleri</a></li>
      <li class="active"><router-link to="/user/profile/avatar">Profil Resmi İşlemleri</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "profile-nav"
    }
</script>

<style scoped>

</style>
