import { Hono } from "hono";
import { verifyAuth } from "@hono/auth-js";
import { unsplash } from "@/lib/unsplash";

const DEFAULT_COUNT = 40;
const DEFAULT_COLLECTION_IDS = ["317099"];

const app = new Hono().get("/", verifyAuth(), async (c) => {
  try {
    if (!process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY) {
      console.error("Unsplash API key is missing");
      return c.json({ error: "Unsplash API key not configured" }, 500);
    }

    console.log("Fetching images from Unsplash...");
    const images = await unsplash.photos.getRandom({
      collectionIds: DEFAULT_COLLECTION_IDS,
      count: DEFAULT_COUNT,
    });

    if (images.errors) {
      console.error("Unsplash error:", images.errors);
      return c.json({ error: "Failed to fetch images from Unsplash" }, 500);
    }

    let response = images.response;

    if (!Array.isArray(response)) {
      response = [response];
    }

    console.log(`Successfully fetched ${response.length} images`);
    return c.json({ data: response });
  } catch (error) {
    console.error("Server error:", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

export default app;
