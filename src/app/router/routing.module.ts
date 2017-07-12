/**
 * Created by dengpengfei on 2017/7/8.
 */
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlogComponent} from '../blog/blog.component';
import {ShowBlogComponent} from '../show-blog/show-blog.component';
import {ArticleDetailComponent} from '../article-detail/article-detail.component';
import {WriteBlogComponent} from '../write-blog/write-blog.component';

const routes: Routes = [
  {path: '', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'sb', component: ShowBlogComponent},
  {path: 'wb', component: WriteBlogComponent},
  {path: 'article-detail/:id', component: ArticleDetailComponent}
  // {path: '**', component: DpGraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
