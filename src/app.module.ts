import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { User } from './models/user.entity';
import { ProfessionalType } from './models/professionalType.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password123',
      database: 'postgres',
      synchronize: true,
    
      entities: [User, ProfessionalType],
      migrations: ['./src/database/migrations/**/*.ts'],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
  ],
  providers: [
    AppService,
    UsersService,
  ],
})
export class AppModule { }
