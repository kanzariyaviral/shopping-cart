import { Module } from '@nestjs/common';
import { AddressController } from '../controller/address.controller';
import { AddressService } from '../service/address.service';
import { AddressProviders } from '../providers/address.provider';

@Module({
  controllers: [AddressController],
  providers: [AddressService, ...AddressProviders],
  exports: [AddressService],
})
export class AddressModule {}
