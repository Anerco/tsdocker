import request from "supertest";
import app from "../../app";

describe("GET /", () => {
  it("respond with json containing {name: 'index'}", () => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "16")
      .expect(200)
      .end(err => {
        if (err) throw err;
      });
  });
});
