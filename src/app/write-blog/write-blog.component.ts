import {Renderer2, Inject, Component, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) {

  }

  ngOnInit(): void {
    let s = this._renderer2.createElement('script');
    // s.type = `application/ld+json`;
    s.text = `
            {
              CKEDITOR.replace( 'editor1' );
            }
        `;
    this._renderer2.appendChild(this._document.body, s);
  }

}
