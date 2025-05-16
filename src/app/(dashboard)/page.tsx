"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleText } from "@/app/landing/items/card-text";
import { FeatureCard } from "@/app/landing/items/feature-card";
import { PricingCard } from "@/app/landing/items/pricing-card";

import { FeatureShowcase } from "@/app/landing/items/feature-showcase"; 
import Foooter from "./foooter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/app/landing/items/animated-section";
import { FloatingShapes } from "@/app/landing/items/floating-shapes";
import { useState } from "react";
import CtaSection from "./CtaSection";
import Testimonals from "./Testimonals";

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = {
    free: {
      monthly: {
        price: "$0",
        features: [
          "5 designs per month",
          "Basic templates",
          "PNG & JPG export",
          "2GB storage",
          "Basic support",
        ],
      },
      yearly: {
        price: "$0",
        features: [
          "5 designs per month",
          "Basic templates",
          "PNG & JPG export",
          "2GB storage",
          "Basic support",
        ],
      },
    },
    pro: {
      monthly: {
        price: "$12",
        features: [
          "Unlimited designs",
          "All templates",
          "All export formats",
          "20GB storage",
          "Background remover",
          "Priority support",
          "Custom fonts",
          "Advanced effects",
        ],
      },
      yearly: {
        price: "$120",
        features: [
          "Unlimited designs",
          "All templates",
          "All export formats",
          "20GB storage",
          "Background remover",
          "Priority support",
          "Custom fonts",
          "Advanced effects",
          "2 months free",
        ],
      },
    },
    team: {
      monthly: {
        price: "$49",
        features: [
          "Everything in Pro",
          "Unlimited storage",
          "Team collaboration",
          "Advanced permissions",
          "Brand kit",
          "Dedicated account manager",
          "API access",
          "Custom integrations",
        ],
      },
      yearly: {
        price: "$490",
        features: [
          "Everything in Pro",
          "Unlimited storage",
          "Team collaboration",
          "Advanced permissions",
          "Brand kit",
          "Dedicated account manager",
          "API access",
          "Custom integrations",
          "2 months free",
        ],
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <FloatingShapes />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="relative">
                <CircleText text="Design without limits • Create with ease • " />
                <AnimatedSection>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    Design Like a Pro, Without the Learning Curve
                  </h1>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={0.2}>
                <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300">
                  Your AI-powered graphic editor to create beautiful visuals in
                  minutes.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/landing">
                  <Button size="lg" className="rounded-full">
                    Start Designing
                  </Button>
                  </Link>
                  <a href="#pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-gray-300 dark:border-gray-700"
                  >
                    View Pricing
                  </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection
              className="relative flex items-center justify-center"
              delay={0.3}
            >
              <div className="relative w-full max-w-3xl lg:max-w-5xl">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/canva.png"
                    alt="Design Editor Interface"
                    width={2000}
                    height={1500}
                    className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-white/90 dark:to-black/90" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/90 dark:to-black/90" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24 dark:bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to create stunning designs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Powerful features that make design simple for everyone
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Drag & Drop Editor"
              description="Intuitive interface that makes design accessible to everyone, regardless of experience level."
              icon="MousePointer"
              delay={0.1}
            />
            <FeatureCard
              title="Smart Templates"
              description="Hundreds of professionally designed templates to jumpstart your creative projects."
              icon="LayoutTemplate"
              delay={0.2}
            />
            <FeatureCard
              title="Ai Image Generator"
              description="Generate Stunning Images with Ai with just a few clicks"
              icon="Users"
              delay={0.3}
            />
            <FeatureCard
              title="Background Remover"
              description="Remove backgrounds from images with a single click using our AI-powered tool."
              icon="Eraser"
              delay={0.4}
            />
            <FeatureCard
              title="Image Masking & Layers"
              description="Advanced layer controls and masking tools for professional-level design capabilities."
              icon="Layers"
              delay={0.5}
            />
            <FeatureCard
              title="Multiple Export Formats"
              description="Export your designs in various formats including PNG, JPG, PDF, and SVG."
              icon="Download"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      <section className="bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureShowcase
            title="Start with the perfect image dimensions"
            description="The perfect sized image is always one click away. Image dimensions for social media, display ads, blogs, emails, and infographics are available as clickable presets."
            imageSrc="/images/d1.jpg"
            imageAlt="Image dimensions showcase"
            delay={0.1}
          />
          <FeatureShowcase
            title="Get a head start with pre-made templates"
            description="Don't start from scratch or stare at a blank screen ever again. Choose from thousands of pre-made templates that look professional and earn you more attention, clicks, and customers."
            imageSrc="/images/d2.jpg"
            imageAlt="Template showcase"
            reverse
            delay={0.2}
          />
          <FeatureShowcase
            title="Find free high-res stock photos inside ShiniGami Designs"
            description="Get access to  free, high-resolution, and totally not cheesy stock photos. You don't need to scour multiple stock libraries, worry about usage rights, or pay for the best background images anymore."
            imageSrc="/images/d3.jpg"
            imageAlt="Stock photos showcase"
            delay={0.3}
          />
          <FeatureShowcase
            title="Add text, graphics, and effects in seconds"
            description="Create whatever you've imagined in seconds. Choose from 200+ fonts, 100,000+ vectors and shapes, and play with photo effects until your graphic is perfect—no design experience required."
            imageSrc="/images/d4.jpg"
            imageAlt="Text and graphics showcase"
            reverse
            delay={0.4}
          />
          <FeatureShowcase
            title="Remove image backgrounds with just one click"
            description="Removing backgrounds from images used to be difficult and time consuming. Now you just click a button, wait a second, and then pick your jaw up off the floor after seeing your background vanish like magic."
            imageSrc="/images/d5.jpg"
            imageAlt="Background removal showcase"
            delay={0.5}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24 dark:bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Choose the plan that&apos;s right for you
            </p>
          </AnimatedSection>

          <div className="mt-8 flex justify-center">
            <AnimatedSection delay={0.2}>
              <div className="inline-flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    !isYearly
                      ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isYearly
                      ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  Yearly
                  <span className="ml-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    Save 20%
                  </span>
                </button>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <PricingCard
              title="Free"
              price={pricingPlans.free[isYearly ? "yearly" : "monthly"].price}
              period={isYearly ? "/year" : "/month"}
              description="Perfect for individuals just getting started"
              features={
                pricingPlans.free[isYearly ? "yearly" : "monthly"].features
              }
              buttonText="Get Started"
              buttonVariant="outline"
              delay={0.1}
            />
            <PricingCard
              title="Pro"
              price={pricingPlans.pro[isYearly ? "yearly" : "monthly"].price}
              period={isYearly ? "/year" : "/month"}
              description="For professionals and small teams"
              features={
                pricingPlans.pro[isYearly ? "yearly" : "monthly"].features
              }
              buttonText="Start Free Trial"
              buttonVariant="default"
              popular
              delay={0.2}
            />
            <PricingCard
              title="Team"
              price={pricingPlans.team[isYearly ? "yearly" : "monthly"].price}
              period={isYearly ? "/year" : "/month"}
              description="For growing teams that need more"
              features={
                pricingPlans.team[isYearly ? "yearly" : "monthly"].features
              }
              buttonText="Contact Sales"
              buttonVariant="outline"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     <Testimonals />

      {/* CTA Section */}
     <CtaSection />

      {/* Footer */}
      <Foooter />
    </main>
  );
}
