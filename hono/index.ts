import { Hono } from "hono"
const app = new Hono()

app.get("/greet/:name", (ctx) => {
  return ctx.text(`Hello ${ctx.req.param("name")}`);
});

export default app
