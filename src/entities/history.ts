import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn } from "typeorm"
import { DefaultEntity } from "./default-entity"
import { Link } from "./link"

@Entity()
export class History extends DefaultEntity {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  date: Date

  @Column()
  value: number

  @ManyToOne(type => Link, link => link.history)
  link: Link
}