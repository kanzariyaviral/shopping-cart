import { Module } from '@nestjs/common';
import { UserController } from './../controller/user.controller';
import { UserProviders } from './../providers/user.providers';
import { UserService } from './../service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
