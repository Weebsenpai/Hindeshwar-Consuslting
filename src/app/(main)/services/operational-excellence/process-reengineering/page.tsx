
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceProcessReengineeringPage() {
  const pageTitle = "Business Process Re-engineering";
  const serviceCategory = "Operational Excellence";

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
        Achieving efficiency with our <span className="font-semibold text-primary">{serviceCategory}</span> solutions at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Our {pageTitle} (BPR) services focus on fundamentally rethinking and redesigning your core business processes to achieve dramatic improvements in critical, contemporary measures of performance, such as cost, quality, service, and speed.
          </p>
          <p>
            We help you identify inefficiencies, eliminate non-value-added activities, and leverage technology to create streamlined, agile, and customer-focused operations.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Re-engineering Approach:</h3>
          <ul>
            <li>Current state process analysis and mapping.</li>
            <li>Identification of bottlenecks and inefficiencies.</li>
            <li>Future state process design and modeling.</li>
            <li>Technology enablement and automation strategies.</li>
            <li>Implementation support and performance monitoring.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="optimized workflow diagram"
            />
        </div>
      </div>
    </div>
  );
}
