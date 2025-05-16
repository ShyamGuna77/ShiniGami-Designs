"use client";

import React from "react";
import { AnimatedSection } from "../landing/items/animated-section";
import { TestimonialCard } from "../landing/items/testimonals-card";

const testimonials = [
  {
    quote:
      "This tool has completely transformed how our marketing team creates content. We're producing designs in half the time.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    avatarSrc: "/F2.jpg",
  },
  {
    quote:
      "As someone with no design background, I can now create professional-looking graphics for my small business. Game changer!",
    author: "Michael Chen",
    role: "Small Business Owner",
    avatarSrc: "/M1.jpg",
  },
  {
    quote:
      "The collaboration features are incredible. Our remote team can work together on designs as if we were in the same room.",
    author: "Emma Rodriguez",
    role: "Creative Team Lead",
    avatarSrc: "/F1.jpg",
  },
  {
    quote:
      "The AI-powered features are mind-blowing. It's like having a professional designer in your pocket.",
    author: "Lisa Wong",
    role: "UX Designer",
    avatarSrc: "/F3.jpg",
  },
  {
    quote:
      "I've tried many design tools, but this one stands out with its intuitive interface and powerful features.",
    author: "David Lee",
    role: "Product Manager",
    avatarSrc: "/M2.jpg",
  },
  {
    quote:
      "The template library is extensive and high-quality. It's saved us countless hours of design work.",
    author: "Maria Garcia",
    role: "Brand Strategist",
    avatarSrc: "/F4.jpg",
  },
  {
    quote:
      "The background removal tool is incredibly accurate. It's become an essential part of our workflow.",
    author: "James Wilson",
    role: "Content Creator",
    avatarSrc: "/M3.jpg",
  },
  {
    quote:
      "The export options are perfect for our needs. We can easily create assets for all our platforms.",
    author: "Anna Kim",
    role: "Social Media Manager",
    avatarSrc: "/F0.jpg",
  },
  {
    quote:
      "The customer support is exceptional. Any issues are resolved quickly and professionally.",
    author: "Robert Taylor",
    role: "Creative Director",
    avatarSrc: "/M4.jpg",
  },
];

const Testimonals = () => {
  return (
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

        <div className="relative mt-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-950 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-950 z-10" />

          <div className="flex animate-scroll gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px]">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatarSrc={testimonial.avatarSrc}
                  delay={index * 0.1}
                />
              </div>
            ))}
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px]"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatarSrc={testimonial.avatarSrc}
                  delay={0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
