import { Achievements } from './../../models/achievements';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AchievementsService } from '../../services/achievements.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit 
{

  achiev: Achievements =
  {
    achiv_id:1,
    achiv_works:0,
    achiv_clients:0,    
    achiv_hours:0,
    achiv_years:0
  }

  constructor(private achivService: AchievementsService) { }

  ngOnInit() 
  {
    this.getAchievs();
  }

  getAchievs()
  {
    this.achivService.getAchiev().subscribe(
      res => {
        this.achiev = res[0];        
      },
      err => console.error(err)
    );
  }

  saveAchiev()
  {    
    this.achivService.saveAchiev(this.achiev).subscribe(
      res => 
      {
        // this.getAchievs();
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
