import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tasks")
class Task {
    
    @PrimaryColumn()
    readonly task_id: string;

    @Column()
    owner_id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;

    constructor() {
        if(!this.task_id) {
            this.task_id = uuid();
        }

        if(!this.status) {
            this.status = "pending";
        }
    }

}

export { Task };