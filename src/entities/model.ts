import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "./link";
import { Product } from "./product";

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Product, product => product.models)
  product: Product;

  @Column()
  manufacturer: string
  
  @Column()
  name: string

  @OneToMany(type => Link, link => link.model)
  links: Link[]
}