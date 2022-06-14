import { MongoClient } from "mongodb";

let client: any; //Promise<MongoClient>;

export const initializeDbConnection = async () => {
  try {
    const url: string = process.env.USER1_DB_URI as string;
    console.log("url", url);

    client = await MongoClient.connect(url);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getDbConnection = async (dbName: string) => {
  try {
    const db = await client.db(dbName);
    return db;
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
};

export const closeConnection = (): any => {
  client.close();
};
