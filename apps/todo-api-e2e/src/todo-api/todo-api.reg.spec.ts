import axios from "axios";
import { randomString } from '../utils';

describe("Register user", () => {
  let user = {
    email: `${randomString()}@test.com`,
    password: randomString(),
    name: randomString(),
  }

  it("should register new user", async () => {
    const res = await axios.post(`/api/auth/reg`, user);
    expect(res.status).toBe(201);
  });

  it("should throw if user exist", async () => {
    return axios.post(`/api/auth/reg`, user).catch(e => {
      const { response } = e;

      expect(response.data.statusCode).toBe(409);
      expect(response.data.message).toBe('user already exist');
    });
  });
});
