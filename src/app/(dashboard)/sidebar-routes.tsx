"use client";

import { CreditCard, Crown, Home, MessageCircleQuestion } from "lucide-react";
import { usePathname } from "next/navigation";

import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";
import { useCheckout } from "@/features/subscriptions/api/use-checkout";
import { useBilling } from "@/features/subscriptions/api/use-billing";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  const mutation = useCheckout();
  const billingMutation = useBilling();
  const { shouldBlock, isLoading, triggerPaywall } = usePaywall();

  const pathname = usePathname();

  const onClick = () => {
    if (shouldBlock) {
      triggerPaywall();
      return;
    }

    billingMutation.mutate();
  };

  return (
    <div className="flex flex-col gap-y-4 flex-1">
      {shouldBlock && !isLoading && (
        <>
          <div className="px-3 md:px-4">
            <Button
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
              className="w-full rounded-xl border-none bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] shadow-md"
              variant="outline"
              size="lg"
            >
              <Crown className="mr-2 size-4 fill-yellow-500 text-yellow-500" />
              Upgrade to Pro
            </Button>
          </div>
          <div className="px-3 md:px-4">
            <Separator className="bg-gray-200" />
          </div>
        </>
      )}
      <ul className="flex flex-col gap-y-1 px-3 md:px-4">
        <SidebarItem
          href="/"
          icon={Home}
          label="Home"
          isActive={pathname === "/"}
        />
      </ul>
      <div className="px-3 md:px-4">
        <Separator className="bg-gray-200" />
      </div>
      <ul className="flex flex-col gap-y-1 px-3 md:px-4">
        <SidebarItem
          href={pathname}
          icon={CreditCard}
          label="Billing"
          onClick={onClick}
        />
        <SidebarItem
          href="mailto:shyamprasad8247@gmail.com"
          icon={MessageCircleQuestion}
          label="Get Help"
        />
      </ul>
    </div>
  );
};
