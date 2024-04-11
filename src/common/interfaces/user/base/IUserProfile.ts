import { UUID } from 'crypto';

export default interface IUserProfile {
  name: string;
  profileImage?: string;
  gender?: string;
  countryId?: UUID;
}
