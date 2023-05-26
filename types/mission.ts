import { MissionState } from "~/enums/MissionState";
import { MissionMessageType } from "~/enums/MissionMessageType";

export type MissionMessage = {
  type: MissionMessageType;
  message: string;
};

export type Mission = {
  id: string;
  isActive: boolean;
  name: string;
  state: MissionState;
  duration: number;
  estimatedEnd: string;
  messages: [] | MissionMessage[];
};
