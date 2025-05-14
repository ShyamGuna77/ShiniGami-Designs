import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/hono";
//@ts-expect-error client is not typed
type ResponseType = InferResponseType<(typeof client.api.users)["$post"]>;
//@ts-expect-error client is not typed      
type RequestType = InferRequestType<(typeof client.api.users)["$post"]>["json"];

export const useSignUp = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      //@ts-expect-error client is not typed
      const response = await client.api.users.$post({ json });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("User created");
    },
  });

  return mutation;
};
