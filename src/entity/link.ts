import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./model";
import { History } from "./history";
import { Store } from "./store";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Model, model => model.links)
  model: Model

  @ManyToOne(type => Store, store => store.links)
  store: Store

  @Column()
  uri: string

  @OneToMany(type => History, history => history.link)
  history: History[]
}