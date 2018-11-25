import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IState } from '../store/reducer/curation.reducer';

interface ISize {
  width: number;
  height: number;
}

interface IImage {
  size: ISize;
  url: string;
}

export interface ICuration {
  active: boolean;
  startDate: Date | null;
  endDate: Date | null;
  mainImage: IImage;
  detailImage: IImage;
  title: string;
  groupId: {
    _id: string,
    title: string,
    description: string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private curationUrl = 'https://api.ddocdoc.com/v2/eventBanner?populate=true';
  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methds' : ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    'Access-Control-Allow-Headers' : ['Origin', 'Content-Type', 'X-Auth-Token'],
    'Content-Type' : 'application/json',
  });

  constructor(private http: HttpClient) { }

  public getCurations(): Observable<IState> {
    return this.http.get<IState>(this.curationUrl, {
      headers : this.headers
    });
  }
}
