import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetNewsService } from 'src/app/services/get-news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private router: Router, private articlesServ: GetNewsService) {}

  articles: any = [];
  articleId: any;
  article: any = [];
  ngOnInit(): void {
    this.articlesServ.getById(this.article.id).subscribe((value) => {
      this.articles.length = this.article.id;
      for(let article of value){
        this.articles.push(article);
        article['body'] = value['body_html'];
      }

      console.log(this.article.id);
    });
    // this.articlesServ.getArtical(1, 10).subscribe((data) => {
    //   this.articles.length = 0;
    //   for (let article of data) {
    //     this.articles.push(article);
    //     this.articlesServ.getById(article.id);
    //   }
    // });
  }
}
