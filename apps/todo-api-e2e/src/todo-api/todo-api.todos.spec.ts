import axios from "axios";
import { getAuthConfig, randomString } from '../utils';

describe("Todo action", () => {
  let user = {
    email: `${randomString()}@test.com`,
    password: randomString(),
    name: randomString(),
  }

  let todo = {
    title: randomString(),
  }

  let todoId;
  let token;

  beforeAll(async () => {

    // register new user
    let res = await axios.post(`/api/auth/reg`, user);
    expect(res.status).toBe(201);

    //login user
    res = await axios.post(`/api/auth/login`, user);
    expect(res.status).toBe(200);

    token = res.data.access_token;
  })

  it("should be protected ", async () => {
    return axios.get(`/api/todo/`).catch(e => {
      const { response } = e;
      expect(response.data.statusCode).toBe(401);
    });
  });

  it("should add new todo", async () => {
    const res = await axios.post(`/api/todo`, todo, getAuthConfig(token));

    expect(res.status).toBe(201);
    const { title, id, done } = res.data;

    expect(id).toBeTruthy();
    expect(title).toBe(todo.title);
    expect(done).toBeFalsy();

    todoId = id;
  });

  it("should mark new todo as completed", async () => {
    const res = await axios.patch(`/api/todo/${todoId}`, { ...todo, done: true }, getAuthConfig(token));

    expect(res.status).toBe(200);
    const { title, done } = res.data;
    expect(title).toBe(todo.title);
    expect(done).toBeTruthy();
  });

  it("should mark new todo as incompleted", async () => {
    const res = await axios.patch(`/api/todo/${todoId}`, { ...todo, done: false }, getAuthConfig(token));

    expect(res.status).toBe(200);
    const { title, done } = res.data;
    expect(title).toBe(todo.title);
    expect(done).toBeFalsy();
  });

  it("should get all todos as incompleted", async () => {
    const res = await axios.get(`/api/todo/`, getAuthConfig(token));
    expect(res.status).toBe(200);
    expect(res.data.length).toBe(1);

    const [todo1] = res.data;
    expect(todo1.id).toBe(todoId);
  });

  it("should delete todo", async () => {
    let res = await axios.delete(`/api/todo/${todoId}`, getAuthConfig(token));
    expect(res.status).toBe(200);


    res = await axios.get(`/api/todo/`, getAuthConfig(token));
    expect(res.status).toBe(200);
    expect(res.data.length).toBe(0);
  });
});
