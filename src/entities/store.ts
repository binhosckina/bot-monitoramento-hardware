import { Length } from "class-validator";
import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { DefaultEntity } from "./default-entity";
import { Link } from "./link";

@Entity()
export class Store extends DefaultEntity {
  constructor(name: string) {
    super()
    this.name = name
  }

  @ObjectIdColumn()
  id: ObjectID

  @Column()
  @Length(1, 50)
  name: string
  
  @OneToMany(type => Link, link => link.store)
  links: Link[]
}