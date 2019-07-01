<template>
  <div class="train-overview">
    <div class="content" v-if="!loading">
      <train-data-row
        v-for="train in trains"
        v-bind:key="train.id"
        :train="train"
      ></train-data-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TrainDataRow from "../components/TrainDataRow.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    TrainDataRow
  },
  mounted() {
    this.$store.dispatch("getTrains");
  },
  computed: mapState({
    trains: state => state.trains,
    loading: state => state.loading
  })
};
</script>
