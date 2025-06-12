
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceProcessReengineeringPage() {
  const pageTitle = "Business Process Re-engineering";
  const serviceCategory = "Operational Excellence";

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
        Achieving efficiency with our <span className="font-semibold text-accent">{serviceCategory}</span> solutions.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Our {pageTitle} (BPR) services focus on fundamentally rethinking and redesigning your core business processes to achieve dramatic improvements in critical, contemporary measures of performance, such as cost, quality, service, and speed.
          </p>
          <p>
            We help you identify inefficiencies, eliminate non-value-added activities, and leverage technology to create streamlined, agile, and customer-focused operations.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Re-engineering Approach:</h3>
          <ul>
            <li>Current state process analysis and mapping.</li>
            <li>Identification of bottlenecks and inefficiencies.</li>
            <li>Future state process design and modeling.</li>
            <li>Technology enablement and automation strategies.</li>
            <li>Implementation support and performance monitoring.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Process Re-engineering" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="workflow chart"
            />
        </div>
      </div>
    </div>
  );
}
