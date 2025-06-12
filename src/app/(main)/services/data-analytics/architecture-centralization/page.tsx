
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceArchitectureCentralizationPage() {
  const pageTitle = "Architecture Centralization & Modelling";
  const serviceCategory = "Data & Analytics";

  return (
    <div className="container py-12 md:py-16 text-foreground">
      <Button variant="outline" asChild className="mb-8 group hover:bg-primary/10">
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to All Services
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
            Effective {pageTitle} is crucial for modern enterprises seeking to streamline operations and enhance data integrity. We assist in designing and implementing centralized data architectures that improve accessibility, security, and governance.
          </p>
          <p>
            Our services include creating comprehensive data models that reflect your business processes, ensuring that your data architecture supports your strategic objectives. This leads to more efficient data management and more reliable analytics.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Approach:</h3>
          <ul>
            <li>Assessment of current data architecture and systems.</li>
            <li>Design of scalable and secure centralized architectures.</li>
            <li>Development of detailed data models and governance frameworks.</li>
            <li>Guidance on technology selection and implementation.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="data architecture"
            />
        </div>
      </div>
    </div>
  );
}
