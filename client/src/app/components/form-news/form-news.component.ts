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
    news_desc:'',
    news_desc_eng:'',
    news_video:'',
    news_img:''   
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
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  createForm()
  {
    this.form = this.fb.group({
      name:['', Validators.required],
      avatar:null
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
        this.form.get('avatar').setValue({
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
        
    // this.client.clie_name = this.form.get('name').value;
    // this.client.clie_img = this.form.get('avatar').value.value;
    
    // console.log(this.client);

    // setTimeout(() => 
    // {
    //   this.loading = false;
    // }, 1000);   

    // this.saveNewClient();

  }

  saveNews()
  {
    this.newsService.saveNews(this.news).subscribe(
      res => 
      { 
        this.router.navigate(['/novedades']); 
      },
      err => console.error(err)
    );
  }

  updateNews()
  {
    this.newsService.updateNews(this.news.news_id, this.news).subscribe(
      res=>
      {
        this.router.navigate(['/novedades']);
      },
      err => console.error(err)
    );
  }

}
