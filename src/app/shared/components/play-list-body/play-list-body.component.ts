import { Component } from '@angular/core';
import * as DataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  tracks:Array<TrackModel> = [];

  constructor(){

  }

  ngOnInit(): void {

    const { data }: any = (DataRaw as any).default;
    this.tracks=data;

  }
}
