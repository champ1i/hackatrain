import Vue from "vue";
import Vuex from "vuex";
import { TrainData } from "@/assets/js/models";
import { Api } from "@/api/index";
import { GET_ALL_TRIPS } from "@/api/queries/trips";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    trains: [],
    conn: new Api()
  },
  mutations: {
    setLoading(state, check) {
      state.loading = check;
    },
    setDropdownStatus(state, data) {
      var t = state.trains.get(data.id);
      console.log(t);
      // TODO: Update the dropdown status
    },
    updateTrips(state, data) {
      // data is the graphQL response
    }
  },
  actions: {
    updateLoading(context, data) {
      context.commit("setLoading", data);
    },
    setDropdownStatus(context, data) {
      context.commit("setDropdownStatus", data);
    },
    updateTrips(context) {
      context.state.loading = true;
      context.state.conn
        .fetch(GET_ALL_TRIPS)
        .then(response => {
          context.commit("updateTrips", response);
          context.state.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
