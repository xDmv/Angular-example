import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-tinymce',
	templateUrl: './tinymce.component.html',
	styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

	text_editor : any;
	edit_text: any;
	// example_code: any = `<p><span style="background-color: #169179; color: #f1c40f; font-size: 14pt; font-family: tahoma, arial, helvetica, sans-serif;">textt-font new text<code></code></span></p>
	// <p><strong>example code</strong></p>`;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	onGetDataEditor(){
		console.log('edit: ', this.text_editor);
		this.edit_text = this.sanitizer.bypassSecurityTrustHtml(this.text_editor);
	}


	onfilePost(){
		console.log('post file ...');
	}

}
