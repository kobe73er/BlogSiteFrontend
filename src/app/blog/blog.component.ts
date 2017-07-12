import {Component, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {Observable} from 'rxjs';
import {Article} from './Article'


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {
  articles: Observable<Article[]>

  content: any;

  constructor(private blogService: BlogService) {
    this.content = 'abc';
  }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.blogService.getAllArticles().subscribe(
      articles => this.articles = articles
    );
  }

  submitArticle(value) {
    console.log(value)
    // this.blogService.submitArticle()
  }


}
