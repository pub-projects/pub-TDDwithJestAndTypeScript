import * as mongoDB from "mongodb";

let client: mongoDB.MongoClient;

export const initializeDbConnection = async (user: string) => {
  type tmp = string | undefined;
  let uri: tmp;

  try {
    if (user === "admin") uri = process.env.ADMIN_USER_DB_URI as string;
    else if (user === "user2") uri = process.env.USER2_DB_URI as string;
    else uri = process.env.USER1_DB_URI as string;

    client = await mongoDB.MongoClient.connect(uri);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getDbConnection = (dbName: string) => {
  try {
    const db = client.db(dbName);
    return db;
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
};
