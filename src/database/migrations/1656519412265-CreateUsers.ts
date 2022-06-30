import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1656519412265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "userid",
                        type:  "uuid",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isNullable: false

                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "mission",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
