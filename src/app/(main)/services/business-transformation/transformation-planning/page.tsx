
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceTransformationPlanningPage() {
  const pageTitle = "Transformation Planning";
  const serviceCategory = "Business Transformation";

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
        Part of our <span className="font-semibold text-accent">{serviceCategory}</span> offerings.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Effective {pageTitle} is the bedrock of successful business evolution. We provide meticulous planning services to ensure your transformation initiatives are well-defined, resourced, and managed from inception to completion.
          </p>
          <p>
            Our team works with you to break down strategic objectives into actionable plans, complete with timelines, resource allocation, risk mitigation strategies, and key performance indicators (KPIs) to track progress and ensure accountability.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Planning Elements:</h3>
          <ul>
            <li>Detailed project and program management.</li>
            <li>Resource forecasting and allocation.</li>
            <li>Risk assessment and mitigation planning.</li>
            <li>Stakeholder engagement and communication plans.</li>
            <li>KPI definition and progress tracking mechanisms.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Transformation Planning" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="project planning"
            />
        </div>
      </div>
    </div>
  );
}
