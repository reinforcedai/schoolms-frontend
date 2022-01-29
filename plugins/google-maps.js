import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDSVIFbBA4m7F0nsOFH0AxtNQF42emi88k",
    libraries: "places"
  }
});
