import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Link } from "./link"

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: Date

  @Column()
  value: number

  @ManyToOne(type => Link, link => link.history)
  link: Link
}