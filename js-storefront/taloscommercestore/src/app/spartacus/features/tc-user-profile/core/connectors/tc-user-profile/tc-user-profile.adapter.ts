import { Observable } from 'rxjs';
import { UserProfile } from '../../model';

export abstract class TcUserProfileAdapter {
  protected constructor() {}

  abstract getUserProfile(userId: string): Observable<UserProfile>; // Vermi TODO: check if I can get user info with ID
}
