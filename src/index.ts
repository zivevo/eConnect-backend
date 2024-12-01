import { Elysia } from "elysia";

export const app = new Elysia()
app.get("/", () => "Hello Elysia")
app.post("/test","test")
app.listen(3030);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
