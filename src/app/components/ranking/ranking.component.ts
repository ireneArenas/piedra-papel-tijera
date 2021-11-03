import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.scss']
})
export class RankingComponent implements OnInit {

  @Input() rankingShow : boolean;
  @Output() getRanking = new EventEmitter();

  public ranking: UserModel[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.ranking = this.userService.getRanking().sort( (a,b) => {
      return b.score - a.score;
    });
    if(this.ranking.length > 0) {
      this.getRanking.emit(true);
    }
  }

}
