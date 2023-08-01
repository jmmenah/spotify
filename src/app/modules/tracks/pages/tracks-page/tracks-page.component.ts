import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit,OnDestroy {
  mockTracksList: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    //TODO:🙄🙄 Sigo estando pendiente por si algo pasa agregas o quitas canciones
    const observable1$ = this.trackService.allInOne$.subscribe(
      (data) => {
        this.mockTracksList=data;
        console.log('OJO 🔴🔴 ', data);
      }
    )

    const observable2$ = this.trackService.exampleTracks$.subscribe(
      (data) => {
        this.mockTracksList=[...this.mockTracksList,...data]
        console.log('OJO 🔴🔴 ', data);
      }
    )

    this.listObservers$=[observable1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
