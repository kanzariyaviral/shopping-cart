import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { addAddressDto } from '../Dto/create-address-dto';
import { AddressService } from '../service/address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}
  @Get('getall')
  async Findall() {
    return this.addressService.FindAll();
  }
  @Get('byID/:id')
  async findById(@Param('id') id: number) {
    return this.addressService.FindById(id);
  }
  @Post('add')
  @UsePipes(ValidationPipe)
  async addAddress(@Body() record: addAddressDto): Promise<any> {
    return this.addressService.AddAddress(record);
  }
  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.addressService.DeleteAddress(id);
  }
  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() data: any): Promise<any> {
    return this.addressService.updateAddress(id, data);
  }
}
