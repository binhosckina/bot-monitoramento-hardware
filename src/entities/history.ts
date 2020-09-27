import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"
import { Link } from "./link"

@Entity()
export class History {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  date: Date

  @Column()
  value: number

  @ManyToOne(type => Link, link => link.history)
  link: Link
}