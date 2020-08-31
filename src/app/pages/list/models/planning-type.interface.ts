import {PlanningStatusTypeEnum} from "../enums/planning-status-type.enum";

export interface IPlanningTypeModel {
  title: string;
  description: string;
  status: PlanningStatusTypeEnum;
  date: Date;
  placeName: string;
  address: string;
  id: number;
  creator: string;
}
