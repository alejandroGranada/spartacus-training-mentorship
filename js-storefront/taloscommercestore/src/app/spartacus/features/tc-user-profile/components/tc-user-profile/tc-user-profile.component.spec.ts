import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcUserProfileComponent } from './tc-user-profile.component';

describe('TcUserProfileComponent', () => {
  let component: TcUserProfileComponent;
  let fixture: ComponentFixture<TcUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
