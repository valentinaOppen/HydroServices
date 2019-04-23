import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-videos',
  templateUrl: './admin-videos.component.html',
  styleUrls: ['./admin-videos.component.css']
})
export class AdminVideosComponent implements OnInit {

  videos:any = [];

  constructor(private service: MultimediaService,
    private embedService: EmbedVideoService,
    public sanitizer: DomSanitizer) { }

  ngOnInit() 
  {
    this.getVideos();
  }

  getVideos()
  {
    this.service.getVideos().subscribe(
      res => this.videos = res,
      err => console.error(err)
    );   
    console.log(this.videos);
  }

  deleteVideo(id)
  {
    this.service.deleteVideo(id).subscribe
    (
      res => 
      {
        this.getVideos();
      },
      err => console.error(err)
    );
  }


  getEmbedUrl(videos)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videos.video_url + '?ecver=2');
  }

  
}
