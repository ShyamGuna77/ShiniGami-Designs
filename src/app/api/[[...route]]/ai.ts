import { z } from "zod";
import { Hono } from "hono";
import { verifyAuth } from "@hono/auth-js";
import { zValidator } from "@hono/zod-validator";

import { replicate } from "@/lib/replicate";

const app = new Hono()
  .post(
    "/remove-bg",
    verifyAuth(),
    zValidator(
      "json",
      z.object({
        image: z.string(),
      })
    ),
    async (c) => {
      try {
        const { image } = c.req.valid("json");

        if (!image) {
          return c.json({ error: "No image provided" }, 400);
        }

        if (!process.env.REMOVE_BG_API_KEY) {
          return c.json({ error: "Remove.bg API key is not configured" }, 500);
        }

        const cleanedBase64 = image.replace(/^data:image\/\w+;base64,/, "");

        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
          method: "POST",
          headers: {
            "X-Api-Key": process.env.REMOVE_BG_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_file_b64: cleanedBase64,
            size: "auto",
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Remove.bg error:", errorData);
          return c.json(
            { error: errorData?.errors?.[0]?.title || "Remove.bg API error" },
            500
          );
        }

        const arrayBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString("base64");

        return c.json({ data: `data:image/png;base64,${base64Image}` });
      } catch (error) {
        console.error("Server error:", error);
        return c.json({ error: "Internal Server Error" }, 500);
      }
    }
  )
  .post(
    "/generate-image",
    verifyAuth(),
    zValidator(
      "json",
      z.object({
        prompt: z.string(),
      })
    ),
    async (c) => {
      const { prompt } = c.req.valid("json");

      const input = {
        cfg: 3.5,
        steps: 28,
        prompt: prompt,
        aspect_ratio: "3:2",
        output_format: "webp",
        output_quality: 90,
        negative_prompt: "",
        prompt_strength: 0.85,
      };

      const output = await replicate.run("stability-ai/stable-diffusion-3", {
        input,
      });

      const res = output as Array<string>;

      return c.json({ data: res[0] });
    }
  );

export default app;
