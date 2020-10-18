import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ExampleAccardion, Match, Datum } from './interfaces/livescores'

@Component({
  selector: 'app-multi-accardion',
  templateUrl: './multi-accardion.component.html',
  styleUrls: ['./multi-accardion.component.scss']
})
export class MultiAccardionComponent implements OnInit {

  dataSources: ExampleAccardion;
  ligaData : Datum[];
  matchData: Match[];
  firstAccardion: Array<boolean>  = [];
  secondAccardion = [];
  thirdAccardion = [];



  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  initArray( arr, length: number, c: boolean ) {
    for ( let i = 0; i < length; i++ ) {
      arr[i] = c;
    }
  }

  getData() {
    this.api.getDataSourses('example-accardion.json').subscribe(
      (data) => { 
        // console.log(data);
        this.dataSources = data as ExampleAccardion;
        this.ligaData = this.dataSources.data;
        this.initArray(this.firstAccardion, this.ligaData.length, false)
        // console.log('this.ligaData: ', this.ligaData);
      },
      (error) => { console.error(error )}
    );
  }

  toggeleAccardion(index: number) {
    if(this.firstAccardion[ index ]){
      return this.firstAccardion[ index ] = false;
    }
    this.firstAccardion[ index ] = true;
  }

  isShownItem(index) {
    
  }

  addItemMatch() {

  }

}
