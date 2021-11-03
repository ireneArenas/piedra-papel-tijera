import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private userService: UserService) { }

  ngOnInit(): void {
    this.getFormFilter();
  }

  public login() {
    this.user = new UserModel();
    this.user.name = this.formLogin.controls['name'].value;
    this.getUser();
    
    this.route.navigate(['/game']);
  }

  private getFormFilter() {
    this.formLogin = this.fb.group({
      name: ['', Validators.required]

    });
  }

  private getUser() {
    this.ranking = this.userService.getRanking();
    console.log(this.ranking);
    const user = this.ranking.filter( (user) => {
      console.log(user.name,this.user.name)
      return user.name === this.user.name;
    });
    console.log(user);
    if(user.length > 0) {
      this.user.score = user[0].score;
    }
    this.userService.setUser(this.user);
    console.log(this.user);
  }

}
