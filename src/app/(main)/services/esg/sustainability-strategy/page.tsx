
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceSustainabilityStrategyPage() {
  const pageTitle = "Sustainability Strategy";
  const serviceCategory = "ESG";

  return (
    <div className="container py-12 md:py-16">
      <Button variant="outline" asChild className="mb-8 group">
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to All Services
        </Link>
      </Button>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-2">
        {pageTitle}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        A key pillar of our <span className="font-semibold text-accent">{serviceCategory} (Environmental, Social, and Governance)</span> offerings.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Developing a comprehensive {pageTitle} is no longer optional but a core component of long-term business success. We help organizations integrate sustainability into their core business strategy, operations, and value chains.
          </p>
          <p>
            Our services include materiality assessments, goal setting, framework alignment (e.g., GRI, SASB, TCFD), and developing roadmaps for achieving sustainability targets, enhancing brand reputation, and creating stakeholder value.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Strategic Elements:</h3>
          <ul>
            <li>Materiality assessments to identify key ESG issues.</li>
            <li>Stakeholder engagement and dialogue.</li>
            <li>Development of ESG goals and KPIs.</li>
            <li>Integration of sustainability into business processes.</li>
            <li>ESG reporting and communication strategies.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Sustainability Strategy" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="green nature"
            />
        </div>
      </div>
    </div>
  );
}
