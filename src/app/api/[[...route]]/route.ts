

import {Hono} from 'hono'

import {handle} from 'hono/vercel'

export const runtime = "nodejs";

const app = new Hono().basePath("/api");



app.get("/test", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

const routes =app.get("/posts/:id", (c) => {
  const page = c.req.query("page");
  const id = c.req.param("id");
  c.header("X-Message", "Hi!");
  return c.text(`You want to see ${page} of ${id}`);
});


 const routes = app.get("/tests/:id" , (e) => {
    const test = e.req.query("test")
    const id  = e.req.param("id")
    return e.text(`Hey There this is  from test you want to see ${test} of ${id}`)   
})



export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
