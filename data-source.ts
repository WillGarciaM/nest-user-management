import { DataSource } from "typeorm";

import { ProfessionalType } from "src/models/professionalType.entity";
import { User } from "src/models/user.entity";


const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password123',
  database: 'postgres',
  synchronize: true,

  entities: [User, ProfessionalType],
  migrations: ['./src/database/migrations/**/*.ts'],
});

export default myDataSource;
