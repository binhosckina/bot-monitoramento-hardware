import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./model";

@Entity()
export class Product extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string;

  @OneToMany(type => Model, model => model.product)
  models: Model[]
}