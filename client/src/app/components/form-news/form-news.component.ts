import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.css']
})
export class FormNewsComponent implements OnInit {

  form: FormGroup;
  id:number;

  news: News = 
  {
    news_id:0,
    news_date:null,
    news_title:'',
    news_title_eng:'',
    news_pub:'',
    news_desc:'',
    news_desc_eng:'',
    news_video:'',
    news_img:'',
    news_img_name:''   
  };

  edit:boolean=false;

  constructor(private fb: FormBuilder,
              private newsService:NewsService,
              private router:Router, 
              private activedRoute:ActivatedRoute) 
  { 
    this.createForm();
  }

  ngOnInit() 
  {    
    const params = this.activedRoute.snapshot.params;
    if(params.id)
    {                  
      this.newsService.getNew(params.id).subscribe(
        res => {                     
          this.news = res[0];     
          this.news.news_video = "https://www.youtube.com/watch?="+this.news.news_video;   
          this.edit = true;
        },
        err => console.error(err)
      );

      this.form.setValue
      ({
          news_video:this.news.news_video,
          news_title:this.news.news_title,
          news_title_eng:this.news.news_title_eng,
          news_img: this.news.news_img,
          news_desc:this.news.news_desc,
          news_desc_eng:this.news.news_desc_eng,
          news_img_desc:this.news.news_desc_eng
      });      
    }
  }

  createForm()
  {
    this.form = this.fb.group({
      news_video:[''],
      news_title:[''],
      news_title_eng:[''],
      news_img:[''],
      news_desc:[''],
      news_desc_eng:[''],
      news_img_name:['']
    });
  }

  onFileChange(event) 
  {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) 
    {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('news_img').setValue({
          filename: file.name,
          filetype: file.type,
          value:reader.result
          // value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() 
  {
    const formModel = this.form.value;    
            
    delete this.news.news_id;
    this.news.news_video = this.form.get('news_video').value;
    this.news.news_img = this.form.get('news_img').value.value;
    this.news.news_desc = this.form.get('news_desc').value;
    this.news.news_desc_eng = this.form.get('news_desc_eng').value;    
    this.news.news_img_name = this.form.get('news_title').value;    
    this.news.news_date = new Date();
    this.news.news_title = this.form.get('news_title').value;
    this.news.news_title_eng = this.form.get('news_title_eng').value;
    
    console.log(this.news);

    if(this.edit)
    {
      console.log("UP");
      this.updateNews();
    }
    else
    {
      console.log("NEW");
      this.saveNews();
    }
    

  }

  saveNews()
  {    
    this.newsService.saveNews(this.news).subscribe(
      res => 
      {         
        this.router.navigate(['admin/novedades']); 
      },
      err => console.error(err)
    );
  }

  updateNews()
  {
    this.newsService.updateNews(this.news.news_id, this.news).subscribe(
      res=>
      {
        this.router.navigate(['admin/novedades']);
      },
      err => console.error(err)
    );
  }

}
