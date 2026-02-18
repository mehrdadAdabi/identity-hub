import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateStudentTable1771436558431 implements MigrationInterface {
    name = 'UpdateStudentTable1771436558431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "studentCode" TO "year"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "year" TO "studentCode"`);
    }

}
