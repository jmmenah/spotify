import { TrackModel } from '@core/models/tracks.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data;
        })
      )
  }


}
