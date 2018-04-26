<template>
    <section id="best-predictors-of-week" class="container-fluid d-none d-md-block">
        <div class="row seven-cols">
            <div class="col-md-7th best-predictor-title-bg">
                <div class="best-predictor-title"><img src="static/images/icon-cup.png" alt=""> Bu haftanın en iyi
                    tahmincileri
                </div>
            </div>
            <!-- single predictor -->
            <div class="col-md-7th" v-for="predictor in predictors">
                <div class="predictor clearfix">
                    <div class="predictor-avatar float-left">
                        <img src="out_source/predictor.jpg" alt="">
                    </div>
                    <div class="predictor-detail float-left">
                        <span>ADRENALINHO</span>
                        <strong>%43.80</strong>
                        <a href="#">Takip Et</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "top-predictors",

        data(){
            return {
                predictors: null
            }
        },

        created() {
            this.isLoading = true;

            this.$store.dispatch("common/getTopPredictors").then((res) => {
                this.predictors = res.data.data;
            });
        },
    }
</script>

<style scoped>

</style>
