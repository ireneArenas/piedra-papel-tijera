import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  public user: UserModel;

  constructor(
    private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getuser();
  }

  public salir(): void {
    this.userService.setRanking(this.user);
    this.route.navigate(['/']);
  }

}
