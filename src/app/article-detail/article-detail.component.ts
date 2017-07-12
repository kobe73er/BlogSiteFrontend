import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog/blog.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [BlogService]

})
export class ArticleDetailComponent implements OnInit {
  articleId: number;
  private sub: any;
  article: any;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.articleId = +params['id']; // (+) converts string 'id' to a number
      console.log(this.articleId)
    });

    this.getSpecificArticle(this.articleId);
  }

  getSpecificArticle(id) {
    this.blogService.getSpecificArticle(id).subscribe(
      resp => this.article = resp
    );
  }
}
