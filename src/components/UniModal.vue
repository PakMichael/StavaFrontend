<template>
  <div id="modal-wrap" v-if="this.$store.state.modal_active">
    <div id="modal-window">
      <b-card title="Remove point?" style="max-width: 20rem" class="mb-2">
        <div class="modal-btns">
          <b-button href="#" variant="primary" @click="hideModal"
            >Close</b-button
          >

          <b-button
            v-for="(option, name) in this.$store.state.modal_callbacks"
            :key="name"
            @click="option"
            class="button small"
            variant="danger"
          >
            {{ name }}
          </b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$store.commit("modal", [false, ``, {}]);
    },
  },
};
</script>

<style>
#modal-wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20000000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.3);
}

#modal-window {
  width: 300px;
  height: 200px;

  z-index: 20000000;
}
.modal-btns {
  display: flex;
  justify-content: space-around;
}
</style>