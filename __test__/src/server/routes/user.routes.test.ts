import request from "supertest";
import app from "../../../../src/server/app";

// describe("User routes", () => {
//   test("Get all users", async () => {
//     const res = await request(app).get("/users");
//     console.log("Users route", res.status + " : " + res.body);
//     expect(res.body).toEqual(["Chris", "John", "Joe"]);
//   });
// });

// Check if /users route is producing expected result, for now anyhow.
// We will need to change this test when the db is live.
describe("Users route", () => {
  test("Get users route", async () => {
    const res = await request(app).get("/users");
    //console.log("Users route", res.status + " : " + res.body);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(["Chris", "John", "Joe"]);
  });
});
