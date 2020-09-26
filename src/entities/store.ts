import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "./link";

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number
  
  @OneToMany(type => Link, link => link.store)
  links: Link[]
}