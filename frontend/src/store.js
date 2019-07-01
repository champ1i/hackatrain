import Vue from "vue";
import Vuex from "vuex";
import { TrainData } from "@/assets/js/models";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    trains: []
  },
  mutations: {
    setLoading(state, check) {
      state.loading = check;
    },
    fetchTrains(state) {
      state.loading = true;
      console.log("fetching trains");
      /** TEST DATA **/
      var now = new Date();
      now.setMinutes(now.getMinutes() + 30); // 30 minutes later..
      var then = new Date(now);
      state.trains[0] = new TrainData(
        "1",
        now,
        then,
        "Utrecht",
        "Amsterdam",
        "20",
        "10",
        "5%"
      );
      state.trains[1] = new TrainData(
        "2",
        now,
        then,
        "Utrecht",
        "Amsterdam",
        "20",
        "10",
        "5%"
      );
      state.loading = false;
      /** TEST DATA END **/
      // TODO: Get data from API
    },
    setDropdownStatus(state, data) {
      var t = state.trains.get(data.id);
      console.log(t);
      // TODO: Update the dropdown status
    }
  },
  actions: {
    updateLoading(context, data) {
      context.commit("setLoading", data);
    },
    getTrains(context) {
      context.commit("fetchTrains");
    },
    setDropdownStatus(context, data) {
      context.commit("setDropdownStatus", data);
    }
  }
});
