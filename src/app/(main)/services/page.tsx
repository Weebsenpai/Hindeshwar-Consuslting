import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, BarChart3, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "strategic-planning",
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: "Strategic Planning",
    shortDescription: "Develop robust strategies to navigate market complexities and achieve long-term objectives.",
    longDescription: "Our strategic planning services help you define your vision, set clear goals, and create actionable roadmaps. We analyze market trends, competitive landscapes, and internal capabilities to formulate strategies that drive sustainable growth and competitive advantage.",
    features: ["Market Analysis & Research", "Competitive Benchmarking", "Vision & Mission Development", "Roadmap Creation", "Performance Metrics"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Business professionals in a strategic planning session",
    aiHint: "strategy meeting"
  },
  {
    id: "operational-excellence",
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Operational Excellence",
    shortDescription: "Optimize your operations for efficiency, productivity, and cost-effectiveness.",
    longDescription: "We help streamline your processes, enhance productivity, and reduce operational costs. Our experts identify bottlenecks, implement lean methodologies, and leverage technology to transform your operations into a high-performing engine for growth.",
    features: ["Process Optimization", "Lean Six Sigma Implementation", "Supply Chain Management", "Cost Reduction Strategies", "Technology Integration"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Diagram showing operational workflow optimization",
    aiHint: "workflow optimization"
  },
  {
    id: "innovation-growth",
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: "Innovation & Growth",
    shortDescription: "Foster innovation and identify new growth avenues to stay ahead of the curve.",
    longDescription: "In a rapidly evolving business environment, innovation is key. We assist you in cultivating a culture of innovation, exploring new market opportunities, and developing products or services that meet emerging customer needs, ensuring you remain a leader in your industry.",
    features: ["Innovation Workshops", "New Market Entry Strategy", "Product Development Support", "Digital Transformation", "Change Management"],
    image: "https://placehold.co/600x400.png",
    imageAlt: "Lightbulb symbolizing new ideas and innovation",
    aiHint: "innovation ideas"
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Comprehensive solutions to empower your business and drive lasting success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 !== 0 ? "lg:grid-flow-row-dense" : ""}`}>
              <div className={`aspect-video overflow-hidden rounded-lg shadow-xl ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <div>
                <div className="inline-block p-3 mb-4 rounded-lg bg-accent/20 text-accent">
                  {service.icon}
                </div>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">{service.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{service.longDescription}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                Contact us today to learn how our tailored services can help you achieve your strategic goals.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Get Started</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
