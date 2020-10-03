import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Model } from "./model";
import { History } from "./history";
import { Store } from "./store";
import { DefaultEntity } from "./default-entity";

@Entity()
export class Link extends DefaultEntity {
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