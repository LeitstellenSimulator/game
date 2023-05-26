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
import { MissionState } from "~/enums/MissionState";
import { Mission } from "~/types/mission";
import { MissionMessageType } from "~/enums/MissionMessageType";

export default defineComponent({
  name: "index",
  data() {
    return {
      missions: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          state: MissionState.ALERTED,
          name: "Muster Einsatz",
          duration: 3600,
          current: 3000,
          messages: [],
        },
        {
          id: "00000000-0000-0000-0000-000000000001",
          state: MissionState.DISPATCHED,
          name: "Muster Einsatz",
          duration: 3600,
          current: 3000,
          messages: [],
        },
        {
          id: "00000000-0000-0000-0000-000000000002",
          state: MissionState.ARRIVED,
          name: "Muster Einsatz",
          duration: 3600,
          current: 3000,
          messages: [],
        },
        {
          id: "00000000-0000-0000-0000-000000000003",
          state: MissionState.MISSING_VEHICLE,
          name: "Muster Einsatz",
          duration: 3600,
          current: 3000,
          messages: [
            {
              type: MissionMessageType.ERROR,
              message: "Fehlende Fahrzeuge: LF20",
            },
            {
              type: MissionMessageType.ERROR,
              message: "Fehlende Fahrzeuge: DLK23",
            },
            {
              type: MissionMessageType.ERROR,
              message: "Fehlende Fahrzeuge: TSF/16/45",
            },
          ],
        },
      ] as Mission[],
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
