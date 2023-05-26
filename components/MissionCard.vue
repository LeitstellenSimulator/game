<template>
  <base-card class="mission-card">
    <div>
      <h3>{{ mission.name }}</h3>
      <base-progress
        :max="mission.duration"
        :value="mission.current"
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
import BaseButton from "~/components/baseComponents/BaseButton.vue";

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
    BaseButton() {
      return BaseButton;
    },
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
