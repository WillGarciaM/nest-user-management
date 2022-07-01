import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  findOne(): string {
    return this.appService.findOne();
  }
}
