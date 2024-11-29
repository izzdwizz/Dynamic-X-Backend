import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  title!: string; // Explicitly defining type

  @Column("text")
  description!: string;

  @Column("boolean", { default: false })
  isCompleted!: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user!: User;
}
