import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/services/get-news.service';

@Component({
  template: `
<!-- <nb-card>
  <nb-list nbInfiniteList listenWindowScroll [threshold]="500" (bottomThreshold)="loadNext()">
    <nb-list-item *ngFor="let article of articles">
      <nb-card-header>
        {{article.title}}
      </nb-card-header>
      <nb-card-body>
        {{article.description}}
      </nb-card-body>
      <nb-card-footer>
        <button nbButton status="primary" (click)="onpenLink(article.canonical_url)">View</button>
      </nb-card-footer>
    </nb-list-item>
  </nb-list>
</nb-card> -->
  `,
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any = [];
  placeholders: any = [];
  pageSize = 5;
  pageToLoadNext = 1;
  loading = false;
  constructor(private router: Router,private articlesServ: GetNewsService) {

  }
  articles: any = [];
  ngOnInit(): void {
    this.articlesServ.getArtical(1, 10).subscribe((data) => {
      this.articles.length = 0;
      for (let article of data) {
        this.articles.push(article);
        this.articlesServ.getById(article.id).subscribe((value)=>{
          article['body'] = value['body_html']
        })
      }
    });
  }
  onpenLink(link: string) {
    window.open(link, '_blank');
  }
  openDetails(id:any){
    this.router.navigate(['/home/details', id]);
    //this.router.navigate(['/home/details']);
  }
  loadNext() {
    if (this.loading) { return }

    this.loading = true;
    this.placeholders = new Array(this.pageSize);
    this.articlesServ.getArtical(1, 10)
      .subscribe((data) => {
        this.placeholders = [];
        this.news.push(...data);
        this.loading = false;
        this.pageToLoadNext++;
      });
  }
}
