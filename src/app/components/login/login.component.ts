import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public user: UserModel;
  public ranking: UserModel[] = [];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService,
    private alertController: AlertController) { }

  ngOnInit(): void {
    this.getFormFilter();
  }

  public login(): void {
    if (this.formLogin.controls['name'].status === 'INVALID') {
      this.presentAlert();
    } else {
      this.user = new UserModel();
      this.user.name = this.formLogin.controls['name'].value;
      
      this.getUser();
      this.route.navigate(['/game']);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Debe introducir un nombre',
      buttons: ['Entendido!']
    });

    await alert.present();
  }

  private getFormFilter(): void {
    this.formLogin = this.fb.group({
      name: ['', Validators.required]
    });
  }

  private getUser(): void {
    this.ranking = this.userService.getRanking();
    const user = this.ranking.filter( (user) => {
      return user.name === this.user.name;
    });
    if(user.length > 0) {
      this.user.score = user[0].score;
    }
    this.userService.setUser(this.user);
  }

}
