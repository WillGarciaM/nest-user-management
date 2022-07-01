import { MigrationInterface, QueryRunner } from "typeorm";

export class initUserProfessionalType1656687066457 implements MigrationInterface {
    name = 'initUserProfessionalType1656687066457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professional_type" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "status" boolean NOT NULL, "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_d89027c6ae91416b535aa7bbafd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" integer NOT NULL, "email" character varying NOT NULL, "status" boolean NOT NULL, "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "professionalTypeId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_aae1b9690c1d799ce244d6cf7b8" FOREIGN KEY ("professionalTypeId") REFERENCES "professional_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_aae1b9690c1d799ce244d6cf7b8"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "professional_type"`);
    }

}
