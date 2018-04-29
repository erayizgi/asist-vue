<template>
  <section id="todo-home">
    <div class="detail-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="task-detail-header">
              <span class="task-point">{{calculateSum(duty.duties)}} AP</span>
              <span>{{duty.duties.length}} Görev</span>
              <span>{{duty.katilimci}} Katılımcı</span>
              <a href="javascript:void(0)" class="btn-join" @click="assignDuty">KATIL</a>
              <span class="warning"><i class="fas fa-exclamation-triangle"></i> Katıl butonuna basarak kuralları kabul etmiş sayılırsınız.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container task-detail-wrapper">
      <div class="row">
        <div class="col-12 col-sm-4 col-md-3">
          <ul class="subpage-list-menu" role="tablist">
            <li><a href="#tab-task-detail" class="tab-link active">Görevler</a></li>
            <li><a href="#tab-task-rules" class="tab-link">Kurallar</a></li>
          </ul>
        </div>
        <div class="col-12 col-sm-8 col-md-9 task-detail" role="tabpanel">
          <!--TAB-->
          <div class="tab-pane show" id="tab-task-detail">
            <h4 class="sub-title">{{duty.grup_adi}} GÖREVLER</h4>
            <ul class="task-list">
              <li v-for="gorev in duty.duties"><i class="fas fa-dot-circle"></i> {{gorev.gorev_adi}}</li>
            </ul>
          </div>
          <!--TAB-->
          <div class="tab-pane" id="tab-task-rules">
            <h4 class="sub-title">KURALLAR</h4>
            <p>{{duty.grup_acklamasi}}</p>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
	export default {
		name: "single-duty",
    data(){
		  return {
		    duty:null,
      }
    },
    created(){
		  if(this.$store.state.common.duties.length >0 ){
		    this.$store.state.common.duties.forEach(item=>{
		      console.log(this.$route.params.duty_id);
		      if(item.grup_id === parseInt(this.$route.params.duty_id)) {
		        this.duty = item;
          }
        })
      }else{
        this.$store.dispatch("common/getDuties").then(res=>{
        });
      }
    },
    computed:{
      duties(){
        return this.$store.state.common.duties;
      }
    },
    mounted(){
      $(document).on('click', '.tab-link', function () {

        let _this = $(this);
        let target = _this.attr('href');
        let parent = _this.closest('[role=tablist]');

        parent.find('.tab-link').removeClass('active');
        _this.addClass('active');

        $(target).closest('[role=tabpanel]').find('.tab-pane').removeClass('show');
        $(target).addClass('show');


        return false;
      });
    },
    methods:{
      calculateSum(duty){
        let sum = 0.0;
        duty.forEach(item=>{
          sum = sum + parseInt(item.odul);
        });
        return sum;
      },
      assignDuty(){
        if(!this.$store.state.common.activeDuty){
          this.$store.dispatch("common/assignDuty",this.duty.grup_id).catch(err => {
            this.$swal({type:"error",title:"Hata",text:err.response.data.message})
          })
        }else{
          this.$swal({type:"error",title:"Hata",text:"Aktif katılımınızın bulunduğu bir görev grubu bulunmaktadır."})
        }
      }
    }
	}
</script>

<style scoped>

</style>
