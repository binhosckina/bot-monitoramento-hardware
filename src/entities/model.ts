import { BaseEntity, Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Link } from "./link";
import { Product } from "./product";

@Entity()
export class Model extends BaseEntity {
  constructor(name: string, manufacturer: string, product: Product, links: Link[]) {
    super()
    this.name = name
    this.manufacturer = manufacturer
    this.product = product
    this.links = links
  }

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