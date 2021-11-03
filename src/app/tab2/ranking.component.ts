import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public ranking: UserModel[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.ranking = this.userService.getRanking().sort( (a,b) => {
      return b.score - a.score;
    });
  }

}
