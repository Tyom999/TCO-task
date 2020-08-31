import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPlanningTypeModel} from "../../../pages/list/models/planning-type.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanningsService {

  constructor(private http: HttpClient) { }

  planningsList(): Observable<IPlanningTypeModel[]> {
    return this.http.get<IPlanningTypeModel[]>('plannings');
  }

  getOnePlanning(id: number): Observable<IPlanningTypeModel> {
    return this.http.get<IPlanningTypeModel>(`plannings/${id}`);
  }

  createPlanning(data: IPlanningTypeModel): Observable<IPlanningTypeModel> {
    return this.http.post<IPlanningTypeModel>(`plannings`, data);
  }

  changePlanning(id: number, data: IPlanningTypeModel): Observable<IPlanningTypeModel> {
    return this.http.put<IPlanningTypeModel>(`plannings/${id}`, data);
  }

  deletePlanning(id: number): Observable<IPlanningTypeModel> {
    return this.http.delete<IPlanningTypeModel>(`plannings/${id}`);
  }

}
