import { Inject, Injectable } from '@nestjs/common';
import { Address } from '../entity/address.entity';
@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private readonly addressRepository: typeof Address,
  ) {}
  async AddAddress(address: any): Promise<any> {
    await this.addressRepository.create<Address>(address);
    return 'address added successfully';
  }
  async FindAll(): Promise<any> {
    return await this.addressRepository.findAll<Address>();
  }
  async FindById(id): Promise<any> {
    const address = await this.addressRepository.findOne<Address>({
      where: { id: id },
    });
    const { house_number, street, city, state, zipCode } = address;
    const Address = `Address :-house No-${house_number},${street},${city},${state}-${zipCode}`;
    return Address;
  }
  async DeleteAddress(id): Promise<any> {
    const address = await this.addressRepository.findOne<Address>({
      where: { id: id },
    });
    if (address) {
      await this.addressRepository.destroy({ where: { id: id } });
      return 'address delete successfully';
    } else {
      return 'address does not exist';
    }
  }
  async updateAddress(id: number, data: any): Promise<any> {
    const foundItem = await this.addressRepository.findOne<Address>({
      where: { id: id },
    });
    const { house_number, street, city, state, zipCode } = data;
    if (foundItem) {
      await this.addressRepository.update<Address>(
        {
          house_number: house_number,
          street: street,
          city: city,
          state: state,
          zipCode: zipCode,
        },
        {
          where: { id: id },
        },
      );
      return 'product Updated Successfullys';
    } else {
      return 'Product Is Not Available';
    }
  }
}
