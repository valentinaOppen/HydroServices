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

  videos:any = [];
  
  constructor(private multimediaService:MultimediaService, private router:Router) { }

  ngOnInit() {
    this.getVideos();
    document.getElementById('arrowVideos').className="fas fa-chevron-right arrowMenu";  
    document.getElementById('videosLink').className="itemMenu linkSelected"; 
  }
  
  ngOnDestroy()
  {
    document.getElementById('arrowVideos').className="fas fa-chevron-down arrowMenu";  
    document.getElementById('videosLink').className="itemMenu"; 
  }

  getVideos()
  {
    this.multimediaService.getVideosAll().subscribe(
      res => this.videos = res,
      err => console.error(err)
    );   
    console.log(this.videos);
  }

  saveVideo()
  {    
    this.video.video_url = this.video.video_url.substr(32, this.video.video_url.length);
    this.multimediaService.saveVideo(this.video).subscribe(
      res => 
      {         
        console.log("REST");
        // this.router.navigate(['admin/videos']); 
      },
      err => console.error(err)
    );
  }

  deleteVideo(id)
  {
    this.multimediaService.deleteVideo(id).subscribe
    (
      res => 
      {
        this.getVideos();
      },
      err => console.error(err)
    );
  }

}
