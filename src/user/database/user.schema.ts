import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { IUser, IUserProfile } from 'src/common/interfaces/user';
import {
  UserProfileSchema,
  UserProfileSchemaObject,
} from './user.profile.schema';
import * as PassportLocalMongoose from 'passport-local-mongoose';

@Schema({ timestamps: true })
export class UserSchema implements IUser {
  @Prop({ required: true })
  id: UUID;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, type: [UserProfileSchemaObject] })
  profile: UserProfileSchema;
}

export const UserSchemaObject = SchemaFactory.createForClass(UserSchema).plugin(
  PassportLocalMongoose,
);
