import { MissionState } from "~/enums/MissionState";
import { MissionMessageType } from "~/enums/MissionMessageType";
import { Mission } from "~/types/mission";

export const state = () => ({
  missions: [
    {
      id: "00000000-0000-0000-0000-000000000000",
      isActive: false,
      state: MissionState.ALERTED,
      name: "Muster Einsatz",
      duration: 1500,
      estimatedEnd: "2023-05-26T19:00:00.000Z",
      messages: [],
    },
    {
      id: "00000000-0000-0000-0000-000000000001",
      isActive: false,
      state: MissionState.DISPATCHED,
      name: "Muster Einsatz",
      duration: 200,
      estimatedEnd: "2023-05-26T19:14:00.000Z",
      messages: [],
    },
    {
      id: "00000000-0000-0000-0000-000000000002",
      isActive: true,
      state: MissionState.ARRIVED,
      name: "Muster Einsatz",
      duration: 100,
      estimatedEnd: "2023-05-26T19:11:00.000Z",
      messages: [],
    },
    {
      id: "00000000-0000-0000-0000-000000000003",
      isActive: true,
      state: MissionState.MISSING_VEHICLE,
      name: "Muster Einsatz",
      duration: 100,
      estimatedEnd: "2023-05-26T19:30:00.000Z",
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
});

export const getters = {};

export const mutations = {};

export const actions = {
  getMission({ state }: any, missionID: string) {
    const mission: Mission = state.missions.find(
      (mission: Mission) => mission.id === missionID
    );

    return mission;
  },
};
