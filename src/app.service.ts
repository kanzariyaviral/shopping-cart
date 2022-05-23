import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userProvider: typeof User,
  ) {}

  async getHello() {
    return 'hello';
  }
}
