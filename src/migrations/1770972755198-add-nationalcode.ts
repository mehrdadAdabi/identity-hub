import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNationalcode1770972755198 implements MigrationInterface {
  name = 'AddNationalcode1770972755198';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "nationalCode" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_0ee5680928408e7827f2f4d78b3" UNIQUE ("nationalCode")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_0ee5680928408e7827f2f4d78b3"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nationalCode"`);
  }
}
