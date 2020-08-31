import {Injectable} from '@angular/core';
import {IPlanningListHeaderModel} from "../models/planning-list-header.interface";
import {PlanningStatusTypeEnum} from "../enums/planning-status-type.enum";
import {IStatusListTypeModel} from "../../manage/models/status-list-type.interface";
import {IPlanningTypeModel} from "../models/planning-type.interface";

@Injectable({
  providedIn: 'root'
})
export class ListHelperService {

  originalList: IPlanningTypeModel[] = [];
  filteredList: IPlanningTypeModel[] = [];
  searchedList: IPlanningTypeModel[] = [];


  tableHeaders: string[] = [
    'Creator',
    'Title',
    'Description',
    'Status',
    'Date',
    'Place Name',
    'Address',
    'Actions',
  ]

  filterKeys: IPlanningListHeaderModel[] = [
    {
      name: 'Status',
      key: 'status',
    },
    {
      name: 'Date',
      key: 'date',

    },
    {
      name: 'Place Name',
      key: 'placeName',
    },
    {
      name: 'Address',
      key: 'address',
    },
  ]

  searchKeys: IPlanningListHeaderModel[] = [
    {
      name: 'Title',
      key: 'title',
    },
    {
      name: 'Place Name',
      key: 'placeName',
    },
    {
      name: 'Address',
      key: 'address',
    },
  ]

  filterStatusList: IStatusListTypeModel[] = [
    {
      name: 'Pending',
      type: PlanningStatusTypeEnum.PENDING
    },
    {
      name: 'PAID',
      type: PlanningStatusTypeEnum.PAID
    },
    {
      name: 'CLOSED',
      type: PlanningStatusTypeEnum.CLOSED
    },
  ]

  constructor() {
  }
}
