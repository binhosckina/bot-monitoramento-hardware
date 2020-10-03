import { IsOptional, Length } from "class-validator";
import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Model } from "./model";

@Entity()
export class Product extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  @Length(1, 50)
  name: string;

  @OneToMany(type => Model, model => model.product)
  @IsOptional()
  models: Model[]
}