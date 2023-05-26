<template>
  <base-card class="mission-card">
    <div>
      <h3>{{ mission.name }}</h3>
      <base-progress
        :max="mission.duration"
        :value="current"
        :animate="makeAnimate()"
        :variant="makeVariant()"
      />
    </div>

    <div v-if="mission.messages.length > 0" class="alerts">
      <base-alert
        v-for="(message, i) of mission.messages"
        :key="`${mission.id}-${i}`"
        :variant="makeMessageVariant(message)"
      >
        <p>{{ message.message }}</p>
      </base-alert>
    </div>

    <base-button size="sm" class="w-fit">
      <nuxt-link :to="`/missions/${mission.id}`">Details</nuxt-link>
    </base-button>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MissionState } from "~/enums/MissionState";
import { Mission } from "~/types/mission";
import { MissionMessageType } from "~/enums/MissionMessageType";
import { calcDuration } from "~/lib/duration";

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
          estimatedEnd: "2023-05-26T19:00:00.000Z",
          messages: [],
        } as Mission;
      },
    },
  },
  data() {
    return {
      animate: false,
      interval: null as any,
      current: calcDuration(this.mission.estimatedEnd),
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  created() {
    this.setupInterval();
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
    makeAnimate() {
      switch (this.mission.state) {
        case MissionState.ARRIVED:
          return true;
        default:
          return false;
      }
    },

    makeMessageVariant(message: any) {
      switch (message.type) {
        case MissionMessageType.ERROR:
          return "primary";
        case MissionMessageType.HINT:
          return "warning";
        case MissionMessageType.SUCCESS:
          return "success";
        default:
          return "secondary";
      }
    },

    setupInterval() {
      if (this.mission.state !== MissionState.ARRIVED && !this.mission.isActive)
        return;

      this.interval = setInterval(() => {
        this.current = calcDuration(this.mission.estimatedEnd);
      }, 5000);
    },
  },
});
</script>

<style scoped>
.mission-card {
  @apply max-w-sm w-80 flex flex-col gap-2 justify-between;
}

h3 {
  @apply text-2xl mb-2;
}

.alerts {
  @apply flex flex-col gap-1;
}
</style>
