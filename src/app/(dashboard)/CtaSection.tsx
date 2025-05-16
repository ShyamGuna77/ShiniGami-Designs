import React from 'react'
import { AnimatedSection } from '../landing/items/animated-section';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
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
              Join thousands of creators and businesses making stunning visuals
              every day.
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
  );
}

export default CtaSection