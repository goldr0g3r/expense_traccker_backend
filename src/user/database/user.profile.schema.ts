import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { IUserProfile } from 'src/common/interfaces/user';

@Schema({ timestamps: false })
export class UserProfileSchema implements IUserProfile {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  gender?: string;

  @Prop({ required: false })
  countryId?: UUID;
}

export const UserProfileSchemaObject =
  SchemaFactory.createForClass(UserProfileSchema);
