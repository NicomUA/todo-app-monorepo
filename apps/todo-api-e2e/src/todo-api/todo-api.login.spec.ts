import axios from "axios";
import { randomString } from '../utils';

describe("Login user", () => {
  let user = {
    email: `${randomString()}@test.com`,
    password: randomString(),
    name: randomString(),
  }

  beforeAll(async () => {
    const res = await axios.post(`/api/auth/reg`, user);
    expect(res.status).toBe(201);
  })

  it("should login user", async () => {
    const { status, data } = await axios.post(`/api/auth/login`, user);
    expect(status).toBe(200);
    expect((data.access_token)).toBeTruthy();
  });
});
