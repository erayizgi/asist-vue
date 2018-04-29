<template>
    <div :class="tClass">
        <a href="javascript:void(0)" class="btn-follow" v-if="!isFollowing && !isLoading" @click="follow"
           :disabled="isLoading">
            <i class="fa fa-plus"></i>TAKİP ET
        </a>
        <a :class="followingClass" @mouseover="mouseOv" @mouseleave="mouseOu" v-if="isFollowing && !isLoading"
                @click="unfollow" v-html="followingContent" :disabled="isLoading"></a>
        <spinner v-if="isLoading"/>
        <a v-if="isFollowing && isAllowedToMessage" class="btn-send-message" data-toggle="modal" data-target="#new_user_message">
            <i class="fa fa-envelope"></i>MESAJ GÖNDER
        </a>

        <div class="modal fade" id="new_user_message" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLongTitle">Mesaj Gönder</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Mesaj</label>
                            <textarea class="form-control" name="message" id="" cols="30" rows="5"
                                      v-model="message"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-aa-light" data-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-aa-dark" @click="submitMessage">Gönder</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Spinner from "../../Common/Spinner";

    export default {
        components: {Spinner},
        name: "follow",
        props: [
            "follower",
            "following",
            "tClass"
        ],
        data() {
            return {
                isLoading: false,
                // isFollowing: false,
                isFollowingHover: false,
                followingUser: null,
                followingClass: "btn-following",
                followingContent: '<i class="fa fa-check"></i> TAKİPTE',
                message: "",
            }
        },
        created() {
            //this.isLoading = true;
            if (this.tClass === undefined) {
                this.tClass = 'col-12 col-sm-3 profile-buttons';
            }

        },
        computed: {
            isFollowing() {
                this.isLoading = true;
                if (this.$store.state.users.following.length > 0) {
                    let following = this.$store.state.users.following;
                    following = following.filter(item => {
                        return (item.kullaniciAdi === this.following);
                    });
                    if (following.length > 0) {
                        this.followingUser = following[0];
                        this.isLoading = false;
                        return true;
                    } else {
                        this.isLoading = false;
                        return false;
                    }
                } else {
                    this.isLoading = false;
                }
            },
          isAllowedToMessage(){
            if(this.$route.params.user_name){
              return true;
            }
          }
        },
        methods: {
            follow() {
                this.isLoading = true;
                if (this.$store.state.users.isLogged) {
                    this.$store.dispatch("users/follow", {kullanici_id: this.following}).then(res => {
	                    this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {
		                    this.isLoading = false;
	                    })
                    }).catch((err) => {
	                    this.$swal({title: 'Hata', text: err.response.data.message, type: 'warning'});
	                    this.isLoading=false;
                    });
                } else {
                    this.isLoading = false;
                    this.$swal({
                        title: "Dikkat!",
                        type: "warning",
                        text: "Takip edebilmek için giriş yapmış olmalısınız"
                    });
                }
            },
            unfollow() {
                this.isLoading = true;
                if (this.$store.state.users.isLogged) {
                    this.$store.dispatch("users/unfollow", {kullanici_id: this.following}).then(res => {
                        this.$store.dispatch("users/getFollowing", this.$store.state.users.user.kullaniciAdi).then(res => {
                            this.isLoading = false;
                        })
                    })
                } else {
                    this.isLoading = false;
                    this.$swal({
                        title: "Dikkat!",
                        type: "warning",
                        text: "Takip edebilmek için giriş yapmış olmalısınız"
                    });
                }
            },
            mouseOv() {
                this.followingContent = '<i class="fa fa-times"></i> TAKİBİ BIRAK';
                this.followingClass = 'btn-unfollow hover';
            },
            mouseOu() {
                this.followingContent = '<i class="fa fa-check"></i> TAKİPTE';
                this.followingClass = 'btn-following';
            },
            submitMessage() {
                if (this.message.length > 0) {
                    this.$store.dispatch("users/createConversation", {
                        receiver_id: this.followingUser.ID,
                        message: this.message
                    }).then(res => {
                        this.$swal({title: "Başarılı", text: "Mesajınız başarıyla gönderildi", type: "success"})
                    }).catch(err => {
                        this.$swal({title: "Hata!", text: "Mesajınız gönderilemedi", type: "error"})
                    });
                }
            },


        },

    }
</script>

<style scoped>

</style>
