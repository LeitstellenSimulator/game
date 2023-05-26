<template>
  <div>{{ mission }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index",
  data() {
    return {
      missionId: this.$route.params.id,
      mission: {},
    };
  },

  created() {
    this.getMission();
  },

  methods: {
    async getMission() {
      this.mission = await this.$store.dispatch(
        "missions/getMission",
        this.missionId
      );
    },
  },
});
</script>

<style scoped></style>
