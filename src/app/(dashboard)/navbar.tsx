"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@/features/auth/components/user-button";
import { Button } from "@/components/ui/button";
import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";
import { useCheckout } from "@/features/subscriptions/api/use-checkout";
import { useBilling } from "@/features/subscriptions/api/use-billing";
import { Crown, CreditCard } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mutation = useCheckout();
  const billingMutation = useBilling();
  const { shouldBlock, triggerPaywall } = usePaywall();

  const onClick = () => {
    if (shouldBlock) {
      triggerPaywall();
      return;
    }
    billingMutation.mutate();
  };

  return (
    <div className="relative">
      <nav className="w-full flex items-center justify-between p-3 md:p-4 h-[60px] md:h-[68px] border-b bg-white/80 backdrop-blur-sm relative z-50">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-[60px] left-0 right-0 bg-white border-b shadow-lg lg:hidden z-[100]">
            <div className="flex flex-col p-4 space-y-4">
              {shouldBlock && (
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
              )}
              <Button
                onClick={onClick}
                variant="ghost"
                className="w-full justify-start"
                size="lg"
              >
                <CreditCard className="mr-2 size-4" />
                Billing
              </Button>
            </div>
          </div>
        )}

        <div className="ml-auto">
          <UserButton />
        </div>
      </nav>
    </div>
  );
};
