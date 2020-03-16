import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor5',
  templateUrl: './ckeditor5.component.html',
  styleUrls: ['./ckeditor5.component.scss']
})
export class Ckeditor5Component implements OnInit {

  public Editor = ClassicEditor;
  text_editor : any;
  ts_code : any = `
    import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    @Component( {
        // ...
    } )
    export class MyComponent {
        public Editor = ClassicEditor;
        text_editor : any;
        // ...
        onGetEditor(){
          console.log('editor:  ', this.text_editor);
        }
    }
  `;
  html_code : any = `<ckeditor [editor]="Editor" [(ngModel)]="text_editor"></ckeditor>`;

  constructor() { }

  ngOnInit() {
    this.text_editor = ""
  }

  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  onGetEditor(){
    console.log('editor:  ', this.text_editor);
  }

}
