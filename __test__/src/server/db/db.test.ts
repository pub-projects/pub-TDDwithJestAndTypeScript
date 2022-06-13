import {
  initializeDbConnection,
  getDbConnection,
} from "../../../../src/server/db/db";
import * as mongoDB from "mongodb";

describe("Testing MongoDB connection", () => {
  test("getDbConnection", async () => {
    await initializeDbConnection("");
    const db: any = await getDbConnection("sample_mflix");
    console.log("database db:", db);
    expect(db.collections.length).toEqual(5);
  });
});
