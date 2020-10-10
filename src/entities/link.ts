import { Column, Entity, ManyToOne, ObjectID, ObjectIdColumn, OneToMany } from "typeorm";
import { Model } from "./model";
import { History } from "./history";
import { Store } from "./store";
import { DefaultEntity } from "./default-entity";
import { IsFQDN, IsNotEmpty, IsOptional } from "class-validator";

@Entity()
export class Link extends DefaultEntity {
  constructor(uri: string, model: Model, store: Store, history?: History[]) {
    super()
    this.uri = uri
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
  @IsFQDN()
  uri: string

  @OneToMany(type => History, history => history.link)
  @IsOptional()
  history: History[]
}