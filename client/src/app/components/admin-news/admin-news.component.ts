import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  // newsVideos: any =[];
  // newsImgs: any =[];
    news: any = [];


  constructor(private newsService: NewsService,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() 
  {
    this.getNews();
    // this.getNewsVideos();    
    // this.getNewsImgs();
    // console.log(this.newsVideos);
    // console.log(this.newsImgs);
  }

  getNews()
  {
    this.newsService.getNews().subscribe(
      res => this.news = res,
      err => console.error(err)
    );   
  }

  deleteNew(id)
  {
    
  }

  // getNewsImgs()
  // {
  //   this.newsService.getNewsImgs().subscribe(
  //     res => this.newsImgs = res,
  //     err => console.error(err)
  //   );   
  // }

  // getNewsVideos()
  // {
  //   this.newsService.getNewsVideos().subscribe(
  //     res => this.newsVideos = res,
  //     err => console.error(err)
  //   );   
  // }  

  getEmbedUrl(news)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + news.news_video + '?ecver=2');
  }
  

}
