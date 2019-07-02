<template>
  <b-container
    class="modal-container"
    v-on:click="hide()"
    :class="{ active: active }"
  >
    <div class="modal">
      <h2>{{ title }}</h2>
      <div class="modal_body">
        <p>{{ body }}</p>
        <div class="button-bar" v-if="options">
          <a
            class="button"
            v-for="option in options"
            v-bind:key="option.name"
            v-on:click="option.callback"
            >{{ option.name }}</a
          >
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "modal-overview",
  props: {
    title: String,
    body: String,
    options: Array
  },
  data: function() {
    return {
      active: false
    };
  },
  components: {},
  methods: {
    show() {
      this.active = true;
    },
    hide() {
      this.active = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";
.modal-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
}

.modal-container.active {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}

.modal {
  text-align: center;
  max-width: 30rem;
  width: 100%;
  left: 30%;
  background-color: $background-color;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  color: $text-color;
  display: flex;
  flex-direction: column;
}

.modal > h2 {
  background-color: $primary-color;
  color: white;
  margin: 0;
  padding: 1rem;
}

.modal_body {
  flex: 1;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
}

.modal_body > p {
  margin-bottom: 2rem;
}
</style>
