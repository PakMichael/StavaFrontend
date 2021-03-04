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
        <div id="mapid"></div>
        <div>
          <b-button disabled variant="danger">Calculate distance</b-button>
        </div>
      </div>
      <div id="right-pane">
        <CoordinateInput
          v-on:pointsChanged="setMarkers"
          v-on:centerChanged="setCenter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CoordinateInput from "../components/CoordinateInput";
import UniModal from "../components/UniModal";
import L from "leaflet";

export default {
  components: { CoordinateInput, UniModal },
  data: () => {
    return {
      mainMap: undefined,
    };
  },

  methods: {
    setCenter() {
      this.mainMap.setView(this.$store.state.center, 13);
    },
    setMarkers() {
      this.$store.state.markers.forEach((marker) => {
        L.circle(marker, {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: 500,
        }).addTo(this.mainMap);
      });
    },

    setupLeafletMap() {
      this.mainMap = L.map("mapid").setView([51.505, -0.09], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            "pk.eyJ1IjoibWlzaGFwYWsiLCJhIjoiY2tsdmdlZDUwMGU4ajJ2bXdndjU2ZHR1MSJ9.X2dJapVN4pJQ0NslIxvb9g",
        }
      ).addTo(this.mainMap);
      this.setMarkers()
      this.setCenter();
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style>
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
#mapid {
  height: 180px;
}

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

#mapid {
  min-width: 700px;
  min-height: 400px;
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