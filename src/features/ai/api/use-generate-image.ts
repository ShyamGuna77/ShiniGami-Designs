

import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<
  //@ts-expect-error - Typescript error
  (typeof client.api.ai)["generate-image"]["$post"]
>;
type RequestType = InferRequestType<
  //@ts-expect-error - Typescript error
  (typeof client.api.ai)["generate-image"]["$post"]
>["json"];

export const useGenerateImage = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      //@ts-expect-error - Typescript error
      const response = await client.api.ai["generate-image"].$post({ json });
      return await response.json();
    },
  });

  return mutation;
};
