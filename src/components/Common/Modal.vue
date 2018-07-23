<template>
  <div>
    <div :class="show" :id="name" tabindex="-1" :style="shower">
      <div class="modal-dialog">
        <div class="modal-title">{{title}}</div>

        <div class="modal-content">
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-aa-light">Kapat</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "modal",
    props: [
      "title",
      "name",
      "showModal"
    ],
    computed: {
      show() {
        return (this.showModal) ? "modal fs-modal fade show" : "modal fs-modal fade"
      },
      shower() {
        return (this.showModal) ? "display:block;" : "display:none";
      },
    }
  }
</script>

<style scoped>

</style>
