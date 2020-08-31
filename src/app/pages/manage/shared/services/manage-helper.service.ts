import {Injectable} from '@angular/core';
import {IStatusListTypeModel} from "../../models/status-list-type.interface";
import {PlanningStatusTypeEnum} from "../../../list/enums/planning-status-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ManageHelperService {

  statusList: IStatusListTypeModel[] = [
    {
      name: 'Paid',
      type: PlanningStatusTypeEnum.PAID
    },
    {
      name: 'Pending',
      type: PlanningStatusTypeEnum.PENDING
    },
    {
      name: 'Closes',
      type: PlanningStatusTypeEnum.CLOSED
    }
  ]

  constructor() { }
}
