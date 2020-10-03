import { BaseEntity, Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Link } from "./link";
import { Product } from "./product";

@Entity()
export class Model extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID

  @ManyToOne(type => Product, product => product.models)
  product: Product;

  @Column()
  manufacturer: string
  
  @Column()
  name: string

  @OneToMany(type => Link, link => link.model)
  links: Link[]
}