import { Connection, createConnection } from "typeorm";
// import { User } from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

export const MongoHelper = {
  async connect (): Promise<Connection> {
    return await createConnection({
      type: "mongodb",
      url: process.env.MONGO_URI,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
      logging: false,
      entities: [
        "src/entity/**/*.ts"
      ],
      migrations: [
        "src/migration/**/*.ts"
      ],
      subscribers: [
        "src/subscriber/**/*.ts"
      ],
      cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
      }
   });
  },

//   async getCollection (name: string): Promise<Collection> {
//     if (!this.client?.isConnected()) {
//       await this.connect(this.uri)
//     }
//     return this.client.db(this.DB_NAME).collection(name)
//   }
}

// export const MongoHelper = {
//   DB_NAME: "Monitoring",
//   client: null as MongoClient,
//   uri: null as string,

//   async connect (uri: string): Promise<void> {
//     this.uri = uri
//     this.client = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//   },

//   async disconnect (): Promise<void> {
//     await this.client.close()
//     this.client = null
//   },

//   async getCollection (name: string): Promise<Collection> {
//     if (!this.client?.isConnected()) {
//       await this.connect(this.uri)
//     }
//     return this.client.db(this.DB_NAME).collection(name)
//   },

//   map: (data: any): any => {
//     const { _id, ...rest } = data
//     return Object.assign({}, rest, { id: _id })
//   },

//   mapCollection: (collection: any[]): any[] => {
//     return collection.map(c => MongoHelper.map(c))
//   }
// }