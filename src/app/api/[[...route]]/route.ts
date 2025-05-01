

import {Hono} from 'hono'
import images from "./images"

import {handle} from 'hono/vercel'

export const runtime = "nodejs";

const app = new Hono().basePath("/api");



const routes = app.route("/images",images)


export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
