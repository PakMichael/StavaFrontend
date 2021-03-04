<template>
  <div id="coordinate-input">
    <div>
      List of the points to be calculated
      <b-list-group class="list">
        <b-list-group-item
          class="d-flex justify-content-start align-items-center"
          v-for="(item, index) in this.$store.state.markers"
          :key="item[0]"
          button
          @click="changePointOfView(item)"
        >
          <div class="index">{{ index + 1 }})</div>

          <b-badge variant="primary" pill> {{ item[0] }}</b-badge>
          <b-badge variant="primary" pill> {{ item[1] }}</b-badge>

          <div class="clickable" @click="activateModal(item)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div>
      Provide your longitude and latitude points:
      <div>
        <b-input-group class="mb-2">
          <b-form-input
            aria-label="Latitude"
            placeholder="Latitude"
          ></b-form-input>
          <b-form-input
            aria-label="Longtitude"
            placeholder="Longtitude"
          ></b-form-input>
          <b-input-group-append>
            <b-button size="sm" text="Button" variant="success">+</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },

  methods: {
    changePointOfView(item) {
      this.$store.commit("set", ["center", item]);
       this.$emit("centerChanged");
    },
    activateModal(item) {
      this.$store.commit("modal", [
        true,
        ``,
        {
          remove: () => {
            let fil = this.$store.state.markers.filter((marker) => {
              if (item !== marker) {
                return marker;
              }
            });
            this.$store.commit("set", ["markers", fil]);
            this.$store.commit("modal", [false, ``, {}]);
            this.$emit("pointsChanged");
          },
        },
      ]);
    },
  },
};
</script>

<style>
#coordinate-input {
  width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.list {
  overflow-y: visible;
  max-height: 400px;
  min-height: 400px;
}

.cor-item {
  border-right: 1px solid;
  height: 100%;
}
.badge {
  margin-right: 10px;
}
.button-list {
  justify-content: flex-start !important;
}
.index {
  margin-right: 10px;
}

.clickable:hover {
  background-color: lightcyan;
}
</style>