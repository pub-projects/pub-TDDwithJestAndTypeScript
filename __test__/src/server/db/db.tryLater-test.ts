import {
  initializeDbConnection,
  getDbConnection,
  closeConnection,
} from "../../../../src/server/db/db";
import * as mongoDB from "mongodb";
require("dotenv").config();

describe("Testing MongoDB connection", () => {
  test("getDbConnection", async () => {
    await initializeDbConnection()
      .then(async () => {
        const db: any = await getDbConnection("sample_mflix");
        //console.log("database db:", db);
        expect(await db.collections.length).toEqual(5);
      })
      .then(closeConnection());
  });
});
