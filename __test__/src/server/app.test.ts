import request from "supertest";

import app from "../../../src/server/app";

describe("app.ts tests", () => {
  test("Test route", async () => {
    const res = await request(app).get("/test");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ response: "Test route works" });
  });

  test("Home route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ response: "Home route" });
  });

  test("Resource Not Found test", async () => {
    const res = await request(app).get("/none-existing");
    expect(res.status).toBe(404);
  });
});
