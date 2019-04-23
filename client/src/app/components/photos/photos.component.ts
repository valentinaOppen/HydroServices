import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { AppService } from '../../services/appService.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:any = [];
  closeResult: string;
  enableBtn:string;

  constructor(private service:MultimediaService, 
              public appService:AppService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos()
  {
    this.service.getPhotos().subscribe(
      res => this.photos = res,
      err => console.error(err)
    );      
    this.enableBtn='true';
  }
  
  getPhotosAll()
  {
    this.service.getPhotosAll().subscribe(
      res => this.photos = res,
      err => console.error(err)
    );      
    this.enableBtn='false';
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
}
