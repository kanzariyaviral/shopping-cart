import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { createUserDto } from '../Dto/create.User.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getuser(): any {
    return this.userService.findAll();
  }

  @Post('singup')
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

  @Post('singin')
  singin(@Body() record: any): Promise<any> {
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
  @Get('getAddressbyuser/:id')
  userToAddress(@Param('id') id: number): any {
    return this.userService.userToAddress(id);
  }
}
