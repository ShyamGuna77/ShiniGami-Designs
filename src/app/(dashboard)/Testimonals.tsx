import React from 'react'
import { AnimatedSection } from '../landing/items/animated-section';
import { TestimonialCard } from '../landing/items/testimonals-card';

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
  );
}

export default Testimonals