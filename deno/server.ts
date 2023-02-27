import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/greet/:name", (context) => {
    if (context?.params?.name != "") {
      context.response.body = `Hello ${context.params.name}`
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
