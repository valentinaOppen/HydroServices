import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { AppService } from '../../services/appService.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos:any = [];
  closeResult: string;
  enableEdit:string;

  constructor(private service:MultimediaService, 
    public appService:AppService,
    private modalService: NgbModal,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() 
  {
    this.getVideos();
  }

  getUrlImage(video)
  {    
    return "http://img.youtube.com/vi/"+ video.video_url +"/maxresdefault.jpg";
  }

  getVideos()
  {
    this.service.getVideos().subscribe(
      res => this.videos = res,
      err => console.error(err)
    );      
    this.enableEdit='true';
  }

  getVideosAll()
  {
    this.service.getVideosAll().subscribe(
      res => this.videos = res,
      err => console.error(err)
    );      
    this.enableEdit='false';
  }

  open(content) 
  {    
    this.modalService.open(content, {windowClass:'modalMultimedia',  ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  getEmbedUrl(video)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.video_url + '?ecver=2');
  }

  
}
