import { ConnectionOptions } from "typeorm";

const connection: ConnectionOptions = {
  type: "mongodb",
  url: process.env.MONGO_URI,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: false,
  entities: [
    "src/entities/**/*.ts"
  ],
  migrations: [
    "src/migrations/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

export default connection