import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from 'src/app/models/news';
import { AppService } from '../../services/appService.service';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent implements OnInit {

  index:string = 'true';
  newsVideos: any =[];
  newsImgs: any =[];
  language:string;

  constructor(private newsService: NewsService,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer,
    public appService:AppService,    
    public router:Router
    ,private modalService: NgbModal) { }

  ngOnInit() {
    this.getNews();
  }

  getNews()
  {
    this.newsService.getNews().subscribe(
      res => this.newsVideos = res,
      err => console.error(err)
    );   
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
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + news.news_video + '?ecver=2'));
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + news.news_video + '?ecver=2');
  }

  getUrlImage(news)
  {    
    return "http://img.youtube.com/vi/"+ news.news_video +"/maxresdefault.jpg";
  }

  open(content) 
  {    
    this.modalService.open(content, {windowClass:'modalMultimedia',  ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
