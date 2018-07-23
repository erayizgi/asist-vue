<template>
    <section class="inbox">
        <div class="container">
            <div class="row">
                <div class="col">&nbsp;</div>
                <div class="col-12 col-sm-12 col-md-12">
                    <h1 class="page-title with-border">
                        Bildirimler
                    </h1>
                    <a href="javascript:;" style="border-radius: 3px; padding: 5px;" class="btn-aa-dark float-right" v-show="notifications.length > 0" @click="markAsRead()">
                        <span class="">
                            <i class="fas fa-check"></i>
                            Tüm Bildirimleri Okundu Olarak İşaretle!
                        </span>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="messages">
                        <div v-if="notifications.length === 0">
                            <div class="alert alert-warning">
                                <strong>Bildirim Bulunamadı!</strong>
                            </div>
                        </div>
                        <!--single message -->
                        <a href="javascript:;" class="message clearfix" v-for="notification in notifications">
                            <div class="avatar float-left">
                                <img :src="notification.IMG" alt="" class="user-image">
                            </div>
                            <div class="info float-left">
                                <span class="subject">{{notification.adSoyad}}</span>
                                <span class="content">{{readableNotification(notification.bildirim_tipi)}}</span>

                            </div>
                            <div class="info float-right">
                                <span class="pull-right" style="margin-top: 1rem;">
                                    <i class="fas fa-clock" style="font-size:10px;"></i>
                                    <strong v-date-show="notification.created_at">Okundu Olarak İşaretle</strong>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "NotificationsHome",
        data() {
            return {
                isLoading: false,
                notifications: null
            }
        },
        methods:{
            readableNotification(type){
                if(type==="post"){
                    return "Gönderi Paylaştı";
                }else if(type==="kupon"){
                    return "Kupon Paylaştı";
                }else if(type==="postOnWall"){
                    return "Gönderini Paylaştı";
                }else if(type==="pm"){
                    return "Özel Mesaj";
                }
            },

            markAsRead(){
                if(this.notifications.length > 0){
                    this.$store.dispatch("common/markAsReadNotifications").then((res) => {this.$store.dispatch("common/getNotificationsHome").then((res) => {
                        this.isExists = true;
                        this.notifications = res.data.data.data;
                        this.isLoading = false;
                    });
                        this.$swal({title: 'Başarılı', text: res.data.message, type: 'success'});
                    })
                }
            }
        },

        created() {
            this.isLoading = true;

            this.$store.dispatch("common/getNotificationsHome").then((res) => {
                this.isExists = true;
                this.notifications = res.data.data.data;
                this.isLoading = false;
            });
        },


    }
</script>

<style scoped>

</style>