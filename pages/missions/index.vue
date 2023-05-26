<template>
  <div>
    <h1>Einsätze</h1>
    <div class="missions">
      <mission-card
        v-for="mission of missions"
        :key="mission.id"
        :mission="mission"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
  data() {
    return {
      missions: this.$store.state.missions.missions,
    };
  },
});
</script>

<style scoped>
h1 {
  @apply text-5xl mb-4;
}

.missions {
  @apply flex flex-wrap gap-2 max-w-7xl;
}
</style>
