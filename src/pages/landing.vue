<template>
  <div id="main-wrapper">
    <UniModal />
    <div id="header">
      <div class="logo">
        <img :src="`${$publicPath}logo_sm-1.png`" class="header-logo-img" />
      </div>
    </div>
    <div id="main-section">
      <div id="left-pane">
        <div>Total Distance: 0</div>
        <GmapMap
          ref="mapRef"
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 700px; height: 400px"
        >
        </GmapMap>
        <div>
          <b-button disabled variant="danger">Calculate distance</b-button>
        </div>
      </div>
      <div id="right-pane">
        <CoordinateInput />
      </div>
    </div>
  </div>
</template>

<script>
import CoordinateInput from "../components/CoordinateInput";
import UniModal from "../components/UniModal";
export default {
  components: { CoordinateInput, UniModal },
  mounted() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        console.log("asdsad", pos);
        this.$refs.mapRef.$mapPromise.then((map) => {
          map.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        });
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
};
</script>

<style>
#main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  min-height: 60px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
}

.logo {
  margin-left: 60px;
}
#main-section {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
}

#map-wrap {
  display: flex;
  align-items: center;
}

#right-pane {
  height: 100%;
}
#left-pane {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>