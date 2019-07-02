import Vue from "vue";
import Vuex from "vuex";
import { TrainData } from "@/assets/js/models";
import { Api } from "@/api/index";

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
    setDropdownStatus() {
      // TODO: Update the dropdown status
    },
    updateTrips(state, data) {
      // data is the graphQL response
      data.data.allTrips.edges.forEach(function(value) {
        var n = value.node;
        var t = new TrainData(
          n.id,
          n.origin,
          n.destination,
          n.departureTime,
          n.arrivalTime,
          n.firstClassNormalPrice,
          n.secondClassNormalPrice,
          n.firstClassSpotPrice,
          n.secondClassSpotPrice,
          n.availableFirstClass,
          n.availableSecondClass,
          n.capacityFirstClass,
          n.capacitySecondClass
        );
        state.trains.push(t);
      });
    }
  },
  actions: {
    updateLoading(context, data) {
      context.commit("setLoading", data);
    },
    setDropdownStatus(context, data) {
      context.commit("setDropdownStatus", data);
    },
    updateTrips(context, data) {
      context.state.loading = true;
      context.state.conn
        .fetch(context.state.conn.buildTripQuery(data))
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
