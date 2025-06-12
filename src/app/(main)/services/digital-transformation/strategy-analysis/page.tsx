
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDigitalStrategyAnalysisPage() {
  const pageTitle = "Strategy & Analysis";
  const serviceCategory = "Digital Transformation";

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
        A core component of our <span className="font-semibold text-accent">{serviceCategory}</span> services.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            In the realm of {serviceCategory}, a robust {pageTitle} framework is essential. We help organizations assess their digital maturity, identify opportunities for digital innovation, and formulate strategies that align technology with business objectives.
          </p>
          <p>
            Our analysis delves into market trends, competitive digital landscapes, and internal capabilities to create a clear roadmap for digital evolution, ensuring investments are targeted and outcomes are maximized.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Focus Areas:</h3>
          <ul>
            <li>Digital maturity assessment and benchmarking.</li>
            <li>Analysis of emerging digital technologies and trends.</li>
            <li>Development of digital-first business models.</li>
            <li>Crafting customer-centric digital experience strategies.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Digital Strategy" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="digital technology"
            />
        </div>
      </div>
    </div>
  );
}
