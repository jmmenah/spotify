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

  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor(){

  }

  ngOnInit(): void {

    const { data }: any = (DataRaw as any).default;
    this.tracks=data;

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);

  }
}
