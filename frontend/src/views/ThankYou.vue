<template>
  <body>
    <b-row>
      <b-col>
        <div class="thanks-title text-center">
          <h1>Thank You!</h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="text-center">
          <p>You can now go to your 1st class seat.</p>
        </div>
      </b-col>
    </b-row>
  </body>
</template>

<script>
export default {
  name: "thank-you"
};
</script>

<style scoped lang="scss">
body {
  margin: auto 10px;
  width: auto;
  height: 2000px;
  background-color: #ffc81d;
}

.thanks-title {
  padding-top: 42vh;
}

h1 {
  font-size: 115px;
  color: #003381;
}

p {
  font-size: 42px;
  color: #003381;
}
</style>
