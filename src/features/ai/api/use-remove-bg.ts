import { useMutation } from "@tanstack/react-query";

type ResponseType = {
  data: string;
  error?: string;
};

type RequestType = {
  image: string;
};

export const useRemoveBg = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      try {
        const response = await fetch("http://localhost:3000/api/ai/remove-bg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(json),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to remove background");
        }

        return data;
      } catch (error) {
        console.error("Remove background error:", error);
        throw error;
      }
    },
  });

  return mutation;
};
