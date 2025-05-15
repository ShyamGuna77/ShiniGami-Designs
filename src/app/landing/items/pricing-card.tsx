"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
  delay?: number;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative flex flex-col rounded-2xl border ${
        popular
          ? "border-gray-800 bg-white shadow-lg dark:border-gray-500 dark:bg-gray-800"
          : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800"
      } p-8`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gray-900 px-3 py-1 text-center text-sm font-medium text-white dark:bg-indigo-500">
          Most Popular
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {price}
          </span>
          <span className="ml-1 text-lg text-gray-600 dark:text-gray-300">
            {period}
          </span>
        </div>
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />
              </div>
              <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Button className="w-full" variant={buttonVariant} size="lg">
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
}
