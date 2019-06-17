import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-admin-photos',
  templateUrl: './admin-photos.component.html',
  styleUrls: ['./admin-photos.component.css']
})
export class AdminPhotosComponent implements OnInit {

  photos:any = [];

  constructor(private service: MultimediaService) { }

  ngOnInit() {
    this.getPhotos();
    
  }


  getPhotos()
  {
    this.service.getPhotos().subscribe(
      res => this.photos = res,
      err => console.error(err)
    );   
    console.log(this.photos);
  }

  deletePhoto(id)
  {
    this.service.deletePhoto(id).subscribe
    (
      res => 
      {
        this.getPhotos();
      },
      err => console.error(err)
    );
  }

}
