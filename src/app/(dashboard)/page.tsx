"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleText } from "@/app/landing/items/card-text";
import { FeatureCard } from "@/app/landing/items/feature-card";
import { PricingCard } from "@/app/landing/items/pricing-card";
import { TestimonialCard } from "@/app/landing/items/testimonals-card";
import { FeatureShowcase } from "@/app/landing/items/feature-showcase";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/app/landing/items/animated-section";
import { FloatingShapes } from "@/app/landing/items/floating-shapes";
import { useState } from "react";

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
                  <a href="/pricing">
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
      <section className="bg-gray-50 py-24 dark:bg-gray-950 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Loved by designers and teams
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              See what our customers have to say about their experience
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="This tool has completely transformed how our marketing team creates content. We're producing designs in half the time."
              author="Sarah Johnson"
              role="Marketing Director"
              avatarSrc="/F1.jpg"
              delay={0.1}
            />
            <TestimonialCard
              quote="As someone with no design background, I can now create professional-looking graphics for my small business. Game changer!"
              author="Michael Chen"
              role="Small Business Owner"
              avatarSrc="/M1.jpg"
              delay={0.3}
            />
            <TestimonialCard
              quote="The collaboration features are incredible. Our remote team can work together on designs as if we were in the same room."
              author="Emma Rodriguez"
              role="Creative Team Lead"
              avatarSrc="/F2.jpg"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 dark:from-gray-900 dark:to-gray-950 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Ready to bring your designs to life?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
                Join thousands of creators and businesses making stunning
                visuals every day.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <Link href="/landing">
                <Button
                  size="lg"
                  className="mt-8 rounded-full hover:scale-105 transition-all duration-300"
                >
                  Start Designing Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="/seven.svg"
                  alt="Logo"
                  width={70}
                  height={70}
                  className="dark:invert"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ShiniGami Designs
                </span>
              </div>
              <p className="mt-4 max-w-md text-gray-600 dark:text-gray-400">
                Create stunning designs with our powerful AI-powered graphic
                editor. Perfect for professionals and beginners alike.
              </p>
              <div className="mt-6 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Subscribe
              </h3>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                Get the latest news and updates.
              </p>
              <form className="mt-4">
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-l-lg border border-gray-300 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-r-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} DesignPro. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
