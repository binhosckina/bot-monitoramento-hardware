import { Entity, ObjectID, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "./link";

@Entity()
export class Store {
  @ObjectIdColumn()
  id: ObjectID
  
  @OneToMany(type => Link, link => link.store)
  links: Link[]
}