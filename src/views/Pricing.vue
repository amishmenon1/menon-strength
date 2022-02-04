<template>
  <!-- <div class="pricing"></div> -->
  <div class="row scroll">
    <img
      class="pricing"
      fluid
      src="../assets/images/pricing/TrainingServicesOffered.png"
    />
  </div>
</template>

<script>
export default {
  name: "StartTraining",
};
</script>

<style scoped>
.pricing {
  background-image: url("../assets/images/pricing/TrainingServicesOffered.png");
  width: auto;
}

.scroll {
  overflow-y: scroll;
  height: 93vh;
}
</style>
