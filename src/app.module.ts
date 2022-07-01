import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { User } from './models/user.entity';
import { ProfessionalType } from './models/professionalType.entity';
import { ProfileTypesModule } from './profile-types/profile-types.module';
import { UsersModule } from './users/users.module';
import { ProfileTypesController } from './profile-types/profile-types.controller';
import { ProfileTypesService } from './profile-types/profile-types.service';

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
    ProfileTypesModule,
  ],
  controllers: [
    UsersController,
    ProfileTypesController,
  ],
  providers: [
    UsersService,
    ProfileTypesService,
  ],
})
export class AppModule { }
