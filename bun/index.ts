import Bao from "baojs";

const app = new Bao();

app.get("/greet/:name", (ctx) => {
  return ctx.sendText(`Hello ${ctx.params.name}`);
});

app.listen();
