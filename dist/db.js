"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entities_1 = require("./Entities/user.entities");
// const connection = await createConnection({
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "ProjectPersonalType",
    synchronize: true,
    logging: true,
    entities: [user_entities_1.User],
    subscribers: [],
    migrations: [],
});
