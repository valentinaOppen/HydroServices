import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultimediaService } from '../../services/multimedia.service';
import { Video } from '../../models/video';

@Component({
  selector: 'app-form-videos',
  templateUrl: './form-videos.component.html',
  styleUrls: ['./form-videos.component.css']
})
export class FormVideosComponent implements OnInit {

  video:Video=
  {
    video_id:0,
    video_url:'',
    video_desc:'',
    video_desc_eng:''
  }

  constructor(private multimediaService:MultimediaService, private router:Router) { }

  ngOnInit() {
  }


  saveVideo()
  {    
    console.log("sAV");
    console.log(this.video);
    this.multimediaService.saveVideo(this.video).subscribe(
      res => 
      {         
        console.log("REST");
        // this.router.navigate(['admin/videos']); 
      },
      err => console.error(err)
    );
  }

}
