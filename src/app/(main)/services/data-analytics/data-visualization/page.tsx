
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDataVisualizationPage() {
  const pageTitle = "Data Visualisation";
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
            Unlock the power of your data with compelling {pageTitle}. We help you transform complex datasets into intuitive and interactive visual stories that facilitate understanding and drive action.
          </p>
          <p>
            Our experts utilize leading-edge tools and design principles to create dashboards and reports that are not only aesthetically pleasing but also highly functional, enabling stakeholders at all levels to grasp key insights quickly.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Services Include:</h3>
          <ul>
            <li>Custom dashboard design and development.</li>
            <li>Interactive reporting solutions.</li>
            <li>Data storytelling and presentation.</li>
            <li>Training on visualization best practices and tools.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="charts dashboard visualization"
            />
        </div>
      </div>
    </div>
  );
}
