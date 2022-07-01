## Description

This project is an example of management user system using NPM, NestJS + TypeORM, PostgreSQL, Swagger and Docker.

The objective is generate a CRUD for this data:

<h3>Professional Type</h3>

```bash
{
  id: number;
  description: string;
  status: boolean;
  updatedDate: Date;
  createdDate: Date;
  deletedAt: Date;  
}
```

<h3>User (professional)</h3> 

```bash 
{
  id: number;
  name: string;
  phone: number;
  email: string;
  status: boolean
  professionalType: ProfessionalType;
  updatedDate: Date;
  createdDate: Date;
  deletedAt: Date;
}
```

## Installation

```bash
$ npm install
```

## Running the app

Please, follow this steps

```bash
# 1 - run docker
$ docker-compose up

# 2 - run migrations
$ npm run typeorm migration:run

# 3 - run project
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
