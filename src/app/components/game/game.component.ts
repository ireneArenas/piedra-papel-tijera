import { Component, OnInit } from '@angular/core';
import { faHandScissors, faHandRock, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  faHandScissors = faHandScissors;
  faHandRock = faHandRock;
  faHandPaper = faHandPaper;


  public user: UserModel;
  public tijera = 2;
  public papel = 1;
  public piedra = 0;
  public stringOptionUser: string = '';
  public stringOptionComputer: string = '';
  public scoreUser: number = 0;
  public textScore: string = '';
  public ranking: UserModel[] = [];

  private optionUser: number;
  private optionComputer: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.getUser();
    this.user = this.userService.getuser();
    this.scoreUser = this.user.score || 0;
    console.log(this.user);
  }

  public chooseOption(option:number) {
    this.optionUser = option;
    this.stringOptionUser =this.getString(option);
    setTimeout(() => this.gameComputer(), 1000);
  }

  private getString(option: number): string {
    const options = ['piedra', 'papel', 'tijera'];
    return options[option];
  }

  private gameComputer(): void {
    let numero = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    this.optionComputer =  numero;
    this.stringOptionComputer = this.getString(this.optionComputer);
    this.whoWin();
  }

  private whoWin() {
    if(this.optionUser === this.optionComputer) {
      this.textScore = 'EMPATE!';
    } else if(this.optionUser === this.piedra) {
      switch(this.optionComputer) {
        case this.tijera:
          this.scoreUser ++;
          this.textScore = 'GANAS!';
          break;
        case this.papel:
          this.scoreUser --;
          this.textScore = 'PIERDES!';
          break;
      }
    } else if(this.optionUser === this.tijera) {
      switch(this.optionComputer) {
        case this.papel:
          this.scoreUser ++;
          this.textScore = 'GANAS!';
          break;
        case this.piedra:
          this.scoreUser --;
          this.textScore = 'PIERDES!';
          break;
      }
    }else if(this.optionUser === this.papel) {
      switch(this.optionComputer) {
        case this.piedra:
          this.scoreUser ++;
          this.textScore = 'GANAS!';
          break;
        case this.tijera:
          this.scoreUser --;
          this.textScore = 'PIERDES!';
          break;
      }
    }
    console.log(this.user);
    this.user.score = this.scoreUser;
    this.userService.setUser(this.user);
  }

  

}
