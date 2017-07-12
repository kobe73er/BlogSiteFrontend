import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../config/appSettings';


@Injectable()
export class BlogService {
  constructor(private http: Http) {
  }

  getAllArticles() {
    return this.http.get('http://127.0.0.1:8082/getAllArticles')
      .map(response => response.json());
  }

  getSpecificArticle(id) {
    return this.http.get('http://127.0.0.1:8082/getSpecificArticle/?id=' + id).map(resp => resp.json());
  }

}
