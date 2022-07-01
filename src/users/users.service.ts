import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne(): string {
    return 'Hello User!';
  }
}
