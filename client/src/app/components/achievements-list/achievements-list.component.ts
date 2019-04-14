import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../../services/achievements.service';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.css']
})
export class AchievementsListComponent implements OnInit {

  achiev: any = [];

  constructor(private achievService:AchievementsService) { }

  ngOnInit() {
    this.getAchiev();
  }

  getAchiev()
  {
    this.achievService.getAchiev().subscribe(
      res => this.achiev = res,
      err => console.error(err)
    );   
  }
}
