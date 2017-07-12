import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BlogComponent} from './blog/blog.component';
import {AppRoutingModule} from './router/routing.module';
import {HttpModule} from '@angular/http';
import {CKEditorModule} from 'ng2-ckeditor';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ArticleDetailComponent,
    WriteBlogComponent,
    ShowBlogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,

    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
