import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { createUserDto } from '../dto/create.User.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getuser(): any {
    return this.userService.findAll();
  }

  @Post('sigup')
  @UsePipes(ValidationPipe)
  create(@Body() user: createUserDto): Promise<any> {
    return this.userService.CreateUser(user);
  }

  @Get('verify/query?')
  mail(@Query() record: any): Promise<any> {
    return this.userService.verify(record);
  }

  @Post('findByemail')
  findByemail(@Body() record: any): any {
    return record.email;
    // return this.userService.findByEmail(record.email);
  }

  @Post('sigin')
  sigin(@Body() record: any): Promise<any> {
    return this.userService.singin(record);
  }

  // @Post('hash')
  // hash(@Body() record: any): any {
  //   return this.userService.decyptpass(record.hash);
  // }
  @Delete('deleteuser')
  duser(@Body() record: any): any {
    return this.userService.deleteUser(record);
  }
}
