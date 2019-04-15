import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit 
{
  newsVideos: any =[];
  newsImgs: any =[];

  constructor(private newsService: NewsService,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer,
    private appComponent:AppComponent) 
    { }

    language:string;

  ngOnInit() 
  {
    this.getNewsVideos();
    this.getNewsImgs();
    this.language = this.appComponent.translate.getDefaultLang();
  }

  getNewsVideos()
  {
    this.newsService.getNewsVideos().subscribe(
      res => this.newsVideos = res,
      err => console.error(err)
    );   
  }  

  getNewsImgs()
  {
    this.newsService.getNewsImgs().subscribe(
      res => this.newsImgs = res,
      err => console.error(err)
    );   
  }

  getEmbedUrl(news)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + news.news_video + '?ecver=2');
  }
  
}
