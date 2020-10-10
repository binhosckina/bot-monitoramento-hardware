import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Model } from "./model";
import { History } from "./history";
import { Store } from "./store";
import { DefaultEntity } from "./default-entity";
import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";

@Entity()
export class Link extends DefaultEntity {
  constructor(url: string, model: Model, store: Store, history?: History[]) {
    super()
    this.url = url
    this.model = model
    this.store = store
    this.history = history
  }

  @ObjectIdColumn()
  id: ObjectID

  @ManyToOne(type => Model, model => model.links)
  @IsNotEmpty()
  model: Model

  @ManyToOne(type => Store, store => store.links)
  @IsNotEmpty()
  store: Store

  @Column()
  @IsUrl()
  url: string

  @OneToMany(type => History, history => history.link)
  @IsOptional()
  history: History[]
}