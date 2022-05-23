import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../entity/product.entity';
import { User } from '../entity/user.entity';
import { Address } from '../entity/address.entity';

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  schema: string;
  sqlLogs: boolean;
}

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const dbconfig = configService.get<DatabaseConfig>('database');
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: dbconfig.host,
        port: dbconfig.port,
        database: dbconfig.database,
        username: dbconfig.username,
        password: dbconfig.password,
        storage: ':memory:',
        models: [User, Address, Product],
        pool: {
          max: 5,
          min: 1,
          idle: 1000,
        },
        define: {
          timestamps: false,
          schema: dbconfig.schema,
        },
      });
      sequelize.addModels([User, Product, Address]);
      sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
