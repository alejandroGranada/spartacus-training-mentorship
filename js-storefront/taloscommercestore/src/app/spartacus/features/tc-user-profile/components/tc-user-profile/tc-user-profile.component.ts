import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcUserProfileFacade } from '../../root';
import { Observable } from 'rxjs';
import { UserProfile } from '../../core';

@Component({
  selector: 'tc-user-profile',
  templateUrl: './tc-user-profile.component.html',
  styleUrls: ['./tc-user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcUserProfileComponent implements OnInit {
  userProfile$: Observable<UserProfile> = this.tcUserProfileFacade.getUserProfile(true);
  loading$: Observable<boolean> = this.tcUserProfileFacade.getUserProfileResLoading();
  success$: Observable<boolean> = this.tcUserProfileFacade.getUserProfileResSuccess();
  error$: Observable<boolean> = this.tcUserProfileFacade.getUserProfileResError();

  constructor(protected tcUserProfileFacade: TcUserProfileFacade) {}

  ngOnInit(): void {}
}
