import { Component, OnInit } from '@angular/core';
// declare var tinymce: any;

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  text_editor : any;

  constructor() { }

  ngOnInit() {
    // tinymce.init(
    //   {
    //       selector: "#mymce1"
    //   });
  }

  onGetDataEditor(){
    console.log('edit: ', this.text_editor);
  }

}
