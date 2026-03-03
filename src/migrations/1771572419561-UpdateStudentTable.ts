import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStudentTable1771572419561 implements MigrationInterface {
    name = 'UpdateStudentTable1771572419561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "grade"`);
        await queryRunner.query(`ALTER TABLE "student" ADD "isActive" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "student" ADD "grade" integer`);
        await queryRunner.query(`ALTER TABLE "student" ADD "year" character varying NOT NULL`);
    }

}
