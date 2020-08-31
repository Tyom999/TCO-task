import { Component, OnInit } from '@angular/core';
import {ListHelperService} from "./serives/list-helper.service";
import {PlanningsService} from "../../shared/api/plannings/plannings.service";
import {PlanningStatusTypeEnum, PlanningStatusTypeViewEnum} from "./enums/planning-status-type.enum";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  creator: string;
  PlanningStatusTypeViewEnum = PlanningStatusTypeViewEnum;
  PlanningStatusTypeEnum = PlanningStatusTypeEnum;
  filterValue: string = null;
  searchValue: string;

  constructor(public helperService: ListHelperService, private planningsService: PlanningsService) { }

  ngOnInit(): void {
    this.planningsService.planningsList().subscribe((list) => {
      this.helperService.originalList = list;
      this.helperService.filteredList = list;
      this.helperService.searchedList = list;
    });
    this.creator = localStorage.getItem('username');
  }

  deletePlanning(id: number) {
    this.planningsService.deletePlanning(id).subscribe((data) => {
      this.helperService.originalList = this.helperService.originalList.filter(item => item.id !== id);
      this.helperService.filteredList = this.helperService.originalList.filter(item => item.id !== id);
      this.search([]);
    })
  }

  search(arr) {
    if (this.searchValue && this.filterValue) {
      this.helperService.searchedList = [...this.helperService.filteredList.filter(item => item[this.filterValue].includes(this.searchValue) )]
    } else {
      this.helperService.searchedList = [...this.helperService.filteredList]
    }
  }

}
