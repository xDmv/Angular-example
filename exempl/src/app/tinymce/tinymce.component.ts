import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  text_editor : any;

  constructor() { }

  ngOnInit() {
  }

  onGetDataEditor(){
    console.log('edit: ', this.text_editor);
  }

}
