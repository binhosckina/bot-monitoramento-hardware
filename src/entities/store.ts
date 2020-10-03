import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { DefaultEntity } from "./default-entity";
import { Link } from "./link";

@Entity()
export class Store extends DefaultEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string
  
  @OneToMany(type => Link, link => link.store)
  links: Link[]
}