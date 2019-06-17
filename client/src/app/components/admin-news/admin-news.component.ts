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
    filterNews:string = "";


  constructor(private newsService: NewsService,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() 
  {
    this.getNews();
    document.getElementById('arrowNews').className="fas fa-chevron-right arrowMenu";  
    document.getElementById('newsLink').className="itemMenu linkSelected";  
  }

  ngOnDestroy()
  {
    document.getElementById('arrowNews').className="fas fa-chevron-down arrowMenu";  
    document.getElementById('newsLink').className="itemMenu";  
  }

  getNews()
  {
    this.newsService.getNews().subscribe(
      res => this.news = res,
      err => console.error(err)
    );       
  }

  showForm()
  {
    document.getElementById('divFormAddNew').style.display="unset";
    document.getElementById('divBtnAgregarNovedad').style.display="none";    
    document.getElementById('divBtnAgregarNovedadOcultar').style.display="unset";
  }

  hideForm()
  {
    document.getElementById('divFormAddNew').style.display="none";
    document.getElementById('divBtnAgregarNovedad').style.display="unset";    
    document.getElementById('divBtnAgregarNovedadOcultar').style.display="none";
  }

  deleteNew(id)
  { 
    this.newsService.deleteNews(id).subscribe
    (res => 
      {
        this.getNews();     
      },
      err=> console.error(err)
    );
    
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
