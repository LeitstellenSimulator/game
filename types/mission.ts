import { MissionState } from "~/enums/MissionState";
import { MissionMessageType } from "~/enums/MissionMessageType";

export type MissionMessage = Object & {
  type: MissionMessageType;
  message: string;
};

export type Mission = Object & {
  id: string;
  name: string;
  state: MissionState;
  duration: Number;
  current: Number;
  messages: MissionMessage[];
};
