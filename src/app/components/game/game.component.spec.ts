import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

import { GameComponent } from './game.component';

fdescribe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let service: UserService;
  let user: UserModel = new UserModel;
  user.name = 'test';
  user.score = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(UserService);
    spyOn(service, 'getuser').and.callFake(() => user)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a string', () => {
    const string = component['getString'](1);
    expect(string).toBe('papel');
  })


});
