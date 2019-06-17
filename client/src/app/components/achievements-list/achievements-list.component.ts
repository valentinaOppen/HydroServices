import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../../services/achievements.service';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.css']
})
export class AchievementsListComponent implements OnInit {

  achiev: any = [];
  works:any;
  hours:any;
  clients:any;
  years:any;  

  constructor(private achievService:AchievementsService) { }

  ngOnInit() {
    this.getAchiev();
    this.works = this.achiev[0].achiv_works;
    this.hours = this.achiev[0].achiv_hours;
    this.clients = this.achiev[0].achiv_clients;
    this.years = this.achiev[0].achiv_years;    
  }

  getAchiev()
  {
    this.achievService.getAchiev().subscribe(
      res => this.achiev = res,
      err => console.error(err)
    );   
  }
  
  onCountoEnd(): void {
    console.log('counto end');
}
  
}
