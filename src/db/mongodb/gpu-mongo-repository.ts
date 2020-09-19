import { GPU } from "@/entity/gpu"
import { EntityRepository, Repository } from "typeorm"
import { MongoHelper } from "./mongo-helper"


// createConnection().then(async connection => {

//   console.log("Inserting a new user into the database...");
//   const user = new User();
//   user.firstName = "Timber";
//   user.lastName = "Saw";
//   user.age = 25;
//   await connection.manager.save(user);
//   console.log("Saved a new user with id: " + user.id);

//   console.log("Loading users from the database...");
//   const users = await connection.manager.find(User);
//   console.log("Loaded users: ", users);

//   console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

@EntityRepository(GPU)
export class GPUMongoRepository extends Repository<GPU> {
  // async add (data: GPU): Promise<GPU> {
  //   const gpuCollection = await MongoHelper.getCollection('GPUs')
  //   const result = await gpuCollection.insertOne(data)
  //   return MongoHelper.map(result.ops[0])
  // }

  // async loadAll (): Promise<GPU[]> {
  //   const accountCollection = await MongoHelper.getCollection('GPUs')
  //   const account = await accountCollection.find()
  //   return account && MongoHelper.map(account)
  // }

  // async findById (id: string): Promise<GPU[]> {
  //   const accountCollection = await MongoHelper.getCollection('GPUs')
  //   const account = await accountCollection.find()
  //   return account && MongoHelper.map(account)
  // }

  // async findByName (id: string): Promise<GPU[]> {
  //   const accountCollection = await MongoHelper.getCollection('GPUs')
  //   const account = await accountCollection.find()
  //   return account && MongoHelper.map(account)
  // }
}