import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentTable1771435885611 implements MigrationInterface {
  name = 'CreateStudentTable1771435885611';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "studentCode" character varying NOT NULL, "grade" integer, "userId" uuid, CONSTRAINT "REL_b35463776b4a11a3df3c30d920" UNIQUE ("userId"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_b35463776b4a11a3df3c30d920a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_b35463776b4a11a3df3c30d920a"`,
    );
    await queryRunner.query(`DROP TABLE "student"`);
  }
}
