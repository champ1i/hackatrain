<template>
  <div class="tripInfo">
    <h2 class="trip">{{ train.startLocation }} - {{ train.endLocation }}</h2>
    <div class="tripDetails">
      <div class="trainTime">
        <p>{{ train.startTime }} - {{ train.endTime }}</p>
      </div>
      <div class="trainTravelTime">
        {{ train.travelTime }}
      </div>
      <div class="trainType">
        <p>IC</p>
      </div>
      <div class="trainDiscount">
        {{ train.discountPercentage }}
      </div>
    </div>
  </div>
</template>

<script>
import { TrainData } from "../assets/js/models";

export default {
  name: "train-data-row",
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
      this.$store.commit("setDropdownStatus", data);
    },
    closeDropdown() {
      let data = { id: this.trainData.id, opened: false };
      this.$store.commit("setDropdownStatus", data);
    }
  }
};
</script>
