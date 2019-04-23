import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../../models/photo';
import { MultimediaService } from '../../services/multimedia.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-photos',
  templateUrl: './form-photos.component.html',
  styleUrls: ['./form-photos.component.css']
})

export class FormPhotosComponent implements OnInit 
{

  form: FormGroup;

  photo: Photo = 
  {
    photo_id:0,
    photo_desc:'',
    photo_desc_eng:'',    
    photo_url:'',
    photo_name:''   
  };


  constructor(private fb: FormBuilder,
              private service:MultimediaService,
              private router:Router) 
  {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm()
  {
    this.form = this.fb.group({
      photo_url:[''],
      photo_name:[''],
      photo_desc:[''],
      photo_desc_eng:['']      
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
        this.form.get('photo_url').setValue({
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
            
    delete this.photo.photo_id;    
    this.photo.photo_url = this.form.get('photo_url').value.value;
    this.photo.photo_desc = this.form.get('photo_desc').value;
    this.photo.photo_desc_eng = this.form.get('photo_desc_eng').value;    
    this.photo.photo_name = this.form.get('photo_name').value;
    
    console.log(this.photo);    
    this.savePhoto();        
  }

  savePhoto()
  {    
    this.service.savePhoto(this.photo).subscribe(
      res => 
      {         
        // this.router.navigate(['admin/photos']); 
      },
      err => console.error(err)
    );
  }

}
