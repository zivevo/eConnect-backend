import { test, expect } from "bun:test";
import { app } from "../src/index"; 

test("GET ROOT", async () => {
  const response = await app.handle(new Request(`http://${app.server?.hostname}/`,{
    method: "GET"
  }))
  expect(response.status).toBe(200);
  expect(await response.text()).toBe("Hello Elysia");
});

test("GET TEST", async () => {
  const response = await app.handle(new Request(`http://${app.server?.hostname}/test`,{
    method: "POST",
  }))
  expect(response.status).toBe(200);
  expect(await response.text()).toBe("test");
});