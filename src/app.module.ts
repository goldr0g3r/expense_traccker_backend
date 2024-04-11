import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config, Environment, registerConfig } from './environment';
import { dbConnection } from './common/constants/db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.production', '.env.development'],
      load: [registerConfig],
    }),
    MongooseModule.forRootAsync({
      connectionName: dbConnection.userDB,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<Environment>(Config).mongodb_uri,
        dbName: config.get<Environment>(Config).usersDB,
        retryWrites: true,
        writeConcern: {
          w: 'majority',
        },
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
