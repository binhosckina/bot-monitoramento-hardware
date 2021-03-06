require('dotenv').config()
import "reflect-metadata";
import { MongoAdapter } from "./adapters/typeorm-mongo-adapter";
// import { MongoHelper } from './db/mongodb/mongo-helper'
// import { MonitoringTool } from "./MonitoringTool";

const port = process.env.SERVER_PORT || 3001

MongoAdapter.connect()
.then(async () => {
  const app = (await import('./config/app')).default
  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

  // const monitoringTool = new MonitoringTool();
  // monitoringTool.start();
})
.catch(console.error)



// import { createConnection } from "typeorm";
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