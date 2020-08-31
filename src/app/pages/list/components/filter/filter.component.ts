import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlanningTypeModel} from "../../models/planning-type.interface";
import {ListHelperService} from "../../serives/list-helper.service";
import {FormControl, FormGroup} from "@angular/forms";
import {PlanningStatusTypeEnum} from "../../enums/planning-status-type.enum";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterEvent: EventEmitter<IPlanningTypeModel[]> = new EventEmitter<IPlanningTypeModel[]>()

  form: FormGroup;
  constructor(public helperService: ListHelperService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      status: new FormControl(PlanningStatusTypeEnum.PENDING),
      date: new FormControl(''),
      placeName: new FormControl(''),
      address: new FormControl('')
    })
  }

  filter() {
    let arr = [...this.helperService.originalList];
    if (this.form.value.status) arr = arr.filter(item => item.status == this.form.value.status);
    if (this.form.value.placeName) arr = arr.filter(item => item.placeName === this.form.value.placeName);
    if (this.form.value.address) arr = arr.filter(item => item.address === this.form.value.address);

    if (this.form.value.date) arr = arr.filter(item => {
      let date1 = new Date(item.date).toLocaleDateString();
      let date2 = new Date(this.form.value.date).toLocaleDateString();
      return date1 === date2;
    });
    this.helperService.filteredList = arr;
    this.filterEvent.emit(arr)
  }

}
