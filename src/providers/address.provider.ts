import { Address } from '../entity/address.entity';
export const AddressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: Address,
  },
];
