import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaObject } from './database/user.schema';
import { dbConnection } from 'src/common/constants/db';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: UserSchema.name,
          schema: UserSchemaObject,
          collection: 'user',
        },
      ],
      dbConnection.userDB,
    ),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
