import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { MenuComponent } from '../menu/menu.component';
import { RankingComponent } from '../ranking/ranking.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GameComponent } from './game.component';

fdescribe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let service: UserService;
  const user: UserModel = new UserModel;
  user.name = 'test';
  user.score = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FontAwesomeModule],
      declarations: [ GameComponent, MenuComponent, RankingComponent ],
      providers: [UserService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService);
    spyOn(service, 'getuser').and.callFake(() => user)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should choose option user', () => {
    component['chooseOption'](1);
    const spy1 = spyOn((component as any), 'getString').and.callThrough();
    expect(spy1).toHaveBeenCalledWith(1);
    const spy2 = spyOn(component as any, 'gameComputer').and.callThrough();
    expect(spy2).toHaveBeenCalled();
  });

  it('should get a string', () => {
    const string = component['getString'](1);
    expect(string).toBe('papel');
  });

  it('should to be empate', () => {
    component['whoWin']();
    component['optionUser']= 1;
    component['optionComputer']= 1;
    expect(component.textScore).toEqual('EMPATE!');
  })


});
