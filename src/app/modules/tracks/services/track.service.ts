import { TrackModel } from './../../../core/models/tracks.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trendTracks$: Observable<TrackModel[]> = of()
  exampleTracks$: Observable<any> = new Observable()
  allInOne$: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([])

  constructor() {
    const data: any = (dataRaw as any).default
    this.trendTracks$ = of(data) //TODO: Forma facil de crear una observable de lo que sea! 🤘


    this.exampleTracks$ = new Observable((observer) => {

      const dataTrack: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Carte de Santa',
        artist: {
          name: 'Cartel de Santa',
          nationality: 'MX',
          nickname: 'Cartel de Santa'
        },
        url: 'http://',
        cover: 'https://i.scdn.co/image/ab67616d0000b2731c30988545dcde2ee3e1ed17'
      }

        observer.next([dataTrack]);

    })

    const list = data.data

    this.allInOne$.next(list)
  }


}
