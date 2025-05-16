"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useFailModal } from "@/features/subscriptions/store/use-fail-modal";
import { useSuccessModal } from "@/features/subscriptions/store/use-success-modal";

export const SubscriptionAlert = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { onOpen: onOpenFail } = useFailModal();
  const { onOpen: onOpenSuccess } = useSuccessModal();

  const canceled = params.get("canceled");
  const success = params.get("success");

  useEffect(() => {
    if (canceled) {
      onOpenFail();
    }

    if (success) {
      // Directly redirect to landing page with success parameter
      router.push("/landing?success=true");
      onOpenSuccess();
    }
  }, [canceled, onOpenFail, success, onOpenSuccess, router]);

  return null;
};
