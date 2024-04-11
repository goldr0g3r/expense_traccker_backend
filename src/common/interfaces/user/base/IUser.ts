import { UUID } from 'crypto';
import IUserProfile from './IUserProfile';

export default interface IUser {
  id: UUID;
  username: string;
  profile: IUserProfile;
}
