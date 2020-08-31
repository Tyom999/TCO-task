import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManageHelperService} from "./shared/services/manage-helper.service";
import {PlanningStatusTypeEnum} from "../list/enums/planning-status-type.enum";
import {PlanningsService} from "../../shared/api/plannings/plannings.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IPlanningTypeModel} from "../list/models/planning-type.interface";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    public helperService: ManageHelperService,
    private planningsService: PlanningsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      status: new FormControl(PlanningStatusTypeEnum.PENDING, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      placeName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      creator: new FormControl(localStorage.getItem('username'), [Validators.required])
    })

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.planningsService.getOnePlanning(params.id).subscribe((data: IPlanningTypeModel) => {
          if (data) {
            this.form.patchValue(data);
          } else {
            this.router.navigate(['list'])
          }
        })
      }
    }, error => {
      this.router.navigate(['list'])
    })
  }

  submit() {
    if (this.form.valid) {
      if (this.id) {
        this.planningsService.changePlanning(this.id, this.form.value).subscribe((data) => {
          this.router.navigate(['list']);
        })
      } else {
        this.planningsService.createPlanning(this.form.value).subscribe((data) => {
          this.router.navigate(['list']);
        })
      }
    }
  }
}
