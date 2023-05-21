<template>
  <base-card class="mission-card">
    <p>{{ mission.name }}</p>
    <base-progress
      :max="mission.duration"
      :value="mission.current"
      :animate="makeAnimate()"
      :variant="makeVariant()"
    />
    <br />
    <base-button size="sm">Details</base-button>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MissionState } from "~/enums/MissionState";
import { Mission } from "~/types/mission";

export default defineComponent({
  name: "MissionCard",
  props: {
    mission: {
      type: Object,
      default: () => {
        return {
          id: "00000000-0000-0000-0000-000000000000",
          state: MissionState.ALERTED,
          name: "Muster Einsatz",
          duration: 3600,
          current: 3000,
          messages: [],
        } as Mission;
      },
    },
  },
  data() {
    return {
      animate: false,
    };
  },

  methods: {
    makeVariant(): String {
      switch (this.mission.state) {
        case MissionState.ALERTED:
        case MissionState.MISSING_VEHICLE:
          return "primary";
        case MissionState.DISPATCHED:
          return "yellow";
        case MissionState.ARRIVED:
          return "green";
        default:
          return "primary";
      }
    },
    makeAnimate(): Boolean {
      switch (this.mission.state) {
        case MissionState.ARRIVED:
          return true;
        default:
          return false;
      }
    },
  },
});
</script>

<style scoped>
.mission-card {
  @apply max-w-sm w-80;
}
</style>
