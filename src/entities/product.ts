import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./model";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @OneToMany(type => Model, model => model.product)
  models: Model[]
}