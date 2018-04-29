<template>
  <section id="todo-home">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title claerfix">
              <i class="fa fa-tasks"></i>
              <h3>Görevler</h3>
              <span>Görev Seç, tamamla, hediyeler kazan.</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6" v-for="mdut in duties">
            <!-- single task -->
            <div class="task full clearfix">
              <div class="image" style="background-image: url('static/out_source/task-full.png');">
                <i class="fa fa-tasks"></i>
                {{calculateSum(mdut.duties)}} AP
              </div>
              <div class="detail">
                <div>
                  <strong>{{mdut.grup_adi}}</strong>
                  <div><i class="fa fa-user"></i> {{mdut.katilimci}} Katılımcı</div>
                  <div><i class="fa fa-tasks"></i> {{mdut.duties.length}}  Görev</div>
                </div>
                <router-link :to="`duties/${mdut.grup_id}`" class="btn-see">GÖRÜNTÜLE</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3" style="height: 320px!important;" v-for="mdut in duties">
          <!-- single task -->
          <div class="task">
            <div class="image" style="background-image: url('static/out_source/task.png');">
              <i class="fa fa-tasks"></i>
              {{calculateSum(mdut.duties)}} AP
            </div>
            <div class="detail">
              <div>
                <strong>{{mdut.grup_adi}}</strong>
                <div><i class="fa fa-user"></i> 125 Katılımcı</div>
                <div><i class="fa fa-tasks"></i> 32 Görev</div>
              </div>
              <a href="todo-2-detail.html" class="btn-see">GÖRÜNTÜLE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
	export default {
		name: "duties",
    data(){
		  return{
		    mainDuties:[]
      }
    },
    created(){
		  this.$store.dispatch("common/getDuties").then(res=>{
        res.forEach(item =>{
          this.mainDuties.push(item);
        });
      });
    },
    computed:{
		  duties(){
        return this.$store.state.common.duties;
      }
    },
    methods:{
		  calculateSum(duty){
		    let sum = 0.0;
		    duty.forEach(item=>{
		      sum = sum + parseInt(item.odul);
        });
        return sum;
      }
    }
	}

</script>

<style scoped>

</style>
