<template>
  <div>
    <h1>Train Overview</h1>
    <div class="search-bar">
      From:<br />
      <input placeholder="Enter origin" /><br />
      To:<br />
      <input placeholder="Enter destination" /><br />
      <b-button v-on:click="searchTrips" variant="primary">Search</b-button>
    </div>

    <div v-if="loading">Loading...</div>
    <div class="content" v-if="!loading">
      <train-data-row
        v-for="train in trains"
        v-bind:key="train.id"
        :train="train"
      >
      </train-data-row>
      <div class="center">
        <router-link class="button" to="train-seats">Train Seats</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { TrainData } from "../assets/js/models";
import TrainDataRow from "@/components/TrainDataRow.vue";
import { mapState } from "vuex";

export default {
  name: "train-overview",
  components: {
    TrainDataRow
  },
  props: {
    train: TrainData
  },
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    openDropdown() {
      let data = { id: this.trainData.id, opened: true };
      this.$store.dispatch("setDropdownStatus", data);
    },
    closeDropdown() {
      let data = { id: this.trainData.id, opened: false };
      this.$store.dispatch("setDropdownStatus", data);
    },
    searchTrips() {
      let data = { origin: "Amsterdam", destination: "Nijmegen" };
      this.$store.dispatch("updateTrips", data);
    }
  },
  computed: mapState({
    loading: state => state.loading,
    trains: state => state.trains
  })
};
</script>
