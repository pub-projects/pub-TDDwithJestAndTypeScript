import request from "supertest";
import app from "../../../src/server/app";

describe("Test app.ts", () => {
  test("Test status >= 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBeGreaterThanOrEqual(200);
  });
  test("Test status < 500", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBeLessThan(500);
  });
});
