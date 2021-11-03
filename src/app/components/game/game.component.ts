import { Component, OnInit } from '@angular/core';
import { faHandScissors, faHandRock, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { LoadingController } from '@ionic/angular';
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
  public rankingShow: boolean = false;
  public showButton: boolean = false;

  private optionUser: number;
  private optionComputer: number;

  constructor(
    private userService: UserService,
    private loadingController: LoadingController) { }

  ngOnInit(): void {
    this.user = this.userService.getuser();
    this.scoreUser = this.user.score || 0;
  }

  public chooseOption(option:number) {
    this.optionUser = option;
    this.stringOptionUser =this.getString(option);
    this.cleanStrings();
    this.presentLoading();
    setTimeout(() => this.gameComputer(), 2000);
  }

  public showRanking() {
    this.rankingShow = !this.rankingShow;
  }

  public getRanking(e: boolean) {
    this.showButton = e;
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

  private cleanStrings(): void {
    this.textScore = '';
    this.stringOptionComputer = '';
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Pensando...',
      duration: 1500
    });
    await loading.present();
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
    this.user.score = this.scoreUser;
    this.userService.setUser(this.user);
  }

}
