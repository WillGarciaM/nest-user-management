import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm"
import { ProfessionalType } from "./professionalType.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  status: boolean

  @ManyToOne(() => ProfessionalType, (professionalType) => professionalType.id)
  professionalType: ProfessionalType;

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}