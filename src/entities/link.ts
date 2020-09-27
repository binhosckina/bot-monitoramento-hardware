import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Model } from "./model";
import { History } from "./history";
import { Store } from "./store";

@Entity()
export class Link {
  @ObjectIdColumn()
  id: ObjectID

  @ManyToOne(type => Model, model => model.links)
  model: Model

  @ManyToOne(type => Store, store => store.links)
  store: Store

  @Column()
  uri: string

  @OneToMany(type => History, history => history.link)
  history: History[]
}