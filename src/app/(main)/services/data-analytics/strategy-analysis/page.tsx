
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceStrategyAnalysisPage() {
  const pageTitle = "Strategy & Analysis";
  const serviceCategory = "Data & Analytics";

  return (
    <div className="container py-12 md:py-16 text-foreground">
      <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10">
        <Link href="/services">
          <span className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Services
          </span>
        </Link>
      </Button>
      <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
        {pageTitle}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Part of our <span className="font-semibold text-primary">{serviceCategory}</span> offerings at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Our {pageTitle} services are designed to empower your organization with actionable insights derived from robust data examination. We help you navigate complex business landscapes by identifying key trends, opportunities, and potential challenges.
          </p>
          <p>
            We specialize in transforming raw data into strategic assets. Our approach combines advanced analytical techniques with deep industry expertise to deliver clear, concise, and impactful recommendations that drive decision-making and foster growth.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key Benefits:</h3>
          <ul>
            <li>Data-driven decision-making capabilities.</li>
            <li>Enhanced understanding of market dynamics and customer behavior.</li>
            <li>Identification of new revenue streams and optimization opportunities.</li>
            <li>Improved strategic planning and resource allocation.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="analytical planning charts"
            />
        </div>
      </div>
    </div>
  );
}
