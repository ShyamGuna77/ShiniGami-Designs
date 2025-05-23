/* eslint-disable @typescript-eslint/no-unused-vars */


// import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";

// // import { auth } from "@/auth";
 
// const auth = (req: Request) => ({ id: "fakeId" }); 
// const f = createUploadthing();
 
// export const ourFileRouter = {
//   imageUploader: f({ image: { maxFileSize: "4MB" } })
//     .middleware(async ({ req }) => {
//       const session = await auth();
 
//       if (!session) throw new UploadThingError("Unauthorized");
 
//       return { userId: session.user?.id };
//     })
//     .onUploadComplete(async ({ metadata, file }) => {
//       return { url: file.ufsUrl };
//     }),
// } satisfies FileRouter;
 
// export type OurFileRouter = typeof ourFileRouter;

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

import { auth } from "@/auth";
const f = createUploadthing();



// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    
    .middleware(async ({ req }) => {
      const session = await auth();
     
      const user = session?.user;

      
      if (!user) throw new UploadThingError("Unauthorized");

  
      return { userId: session?.user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
     
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.ufsUrl);

    
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
