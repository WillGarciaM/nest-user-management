import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class ProfessionalType {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  status: boolean;

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  /*
  @OneToMany((type) => Category, (category) => category.parent)
  children: Category[]
  */
}