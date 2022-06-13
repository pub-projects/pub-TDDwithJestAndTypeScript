import request from "supertest";
import app from "../../../../src/server/app";

// describe("User routes", () => {
//   test("Get all users", async () => {
//     const res = await request(app).get("/users");
//     console.log("Users route", res.status + " : " + res.body);
//     expect(res.body).toEqual(["Chris", "John", "Joe"]);
//   });
// });

//v Check if the special /test route is working
describe("Test route", () => {
  test("Get test route", async () => {
    const res = await request(app).get("/test");
    console.log("Test route", res.status + " : " + res.body.response);
    expect(res.status).toEqual(200);
    expect(res.body.response).toEqual("Test route works");
  });
});

// Check if /users route is producing expected result, for now anyhow.
// We will need to change this test when the db is live.
describe("Users route", () => {
  test("Get users route", async () => {
    const res = await request(app).get("/users");
    console.log("Users route", res.status + " : " + res.body);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(["Chris", "John", "Joe"]);
  });
});

// Check if the no route selected refers to home page as would be expected.
// Rewrite when there is a Home Page available.
describe("Home route", () => {
  test("Get no route", async () => {
    const res = await request(app).get("/");
    console.log("Fallback route", res.body);
    expect(res.status).toEqual(200);
    expect(res.body.response).toEqual("Home route");
  });
});

// Check if a non existing route will produce a 404 service not found response.
// statusMessage: 'Not Found'
describe("Fallback route", () => {
  test("Get fallback route", async () => {
    const res = await request(app).get("/not-available");
    //console.log("Fallback route res:", res);
    expect(res.status).toEqual(404);
    //expect(res.statusMessage).toEqual("Not Found");
  });
});
