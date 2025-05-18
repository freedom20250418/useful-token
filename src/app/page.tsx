"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Acme Inc</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              FAQ
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Dashboard
            </Link>
          </nav>
          <MobileNav />
          <div className="hidden md:flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The platform for growing your business
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your operations, engage customers, and scale your
                    business with our all-in-one solution.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#demo">View demo</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to streamline
                  your workflow, engage with customers, and grow your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
                >
                  <div className="rounded-full bg-primary/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by thousands of businesses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&#39;t just take our word for it. Here&#39;s what our
                  customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="space-y-1">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that&#39;s right for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border p-6 shadow-sm ${
                    plan.featured ? "border-primary" : ""
                  }`}
                >
                  {plan.featured && (
                    <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div className="mt-4 space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <div className="flex">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="ml-1 text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button
                      className="w-full"
                      variant={plan.featured ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/signup">Get started</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Answers to common questions about our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-sm">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to get started?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that trust our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/contact">Contact sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Logo"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Acme Inc. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 bg-background shadow-lg">
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="grid gap-2 p-4">
              <Link
                href="#features"
                className="flex items-center py-2 text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center py-2 text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="flex items-center py-2 text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center py-2 text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Log in
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Sign up
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

const features = [
  {
    title: "Streamlined Workflow",
    description:
      "Automate repetitive tasks and streamline your workflow with our intuitive platform.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Customer Engagement",
    description:
      "Engage with your customers in real-time and build lasting relationships.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    description:
      "Gain valuable insights with our powerful analytics tools and make data-driven decisions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Secure Platform",
    description:
      "Rest easy knowing your data is protected with our enterprise-grade security.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Scalable Solution",
    description:
      "Our platform grows with your business, from startup to enterprise.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 20h20" />
        <path d="M5 20V8.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V20" />
        <path d="M13 20V4.2a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V20" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to help you succeed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "This platform has completely transformed our business operations. We've seen a 40% increase in productivity since implementing it.",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, GrowthCo",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The customer engagement tools are incredible. We've been able to build stronger relationships with our clients and increase retention.",
  },
  {
    name: "Emily Rodriguez",
    title: "Operations Manager, ScaleUp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The analytics dashboard gives us insights we never had before. It's like having a data scientist on the team.",
  },
  {
    name: "David Kim",
    title: "CTO, InnovateNow",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Security was our top concern, and this platform exceeded our expectations. The enterprise-grade protection gives us peace of mind.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: 29,
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 email support",
      "1GB storage",
      "Basic integrations",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with more demands.",
    price: 79,
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "24/7 priority support",
      "10GB storage",
      "Advanced integrations",
      "Custom workflows",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs.",
    price: 199,
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated account manager",
      "Unlimited storage",
      "All integrations",
      "Custom development",
      "SLA guarantee",
    ],
    featured: false,
  },
];

const faqs = [
  {
    question: "How easy is it to get started?",
    answer:
      "Getting started is simple. Sign up for an account, and our onboarding process will guide you through setting up your workspace in minutes.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes, you can change your plan at any time. When you upgrade, you'll be prorated for the remainder of your billing cycle. If you downgrade, you'll receive credit toward your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 email support for all customers. Professional and Enterprise plans also include priority support and access to our dedicated support team.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.",
  },
];
