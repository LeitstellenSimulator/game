<template>
  <div class="home">Übersicht</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      variants: [
        "primary",
        "primary-outline",
        "secondary",
        "secondary-outline",
      ],
    };
  },
});
</script>

<style scoped></style>
