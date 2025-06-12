
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDigitalDeliveryPage() {
  const pageTitle = "Digital Transformation Delivery";
  const serviceCategory = "Digital Transformation";

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
        Ensuring success in <span className="font-semibold text-primary">{serviceCategory}</span> initiatives with Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Successful {pageTitle} hinges on effective execution. We provide expert program and project management to ensure your digital initiatives are delivered on time, within budget, and to the highest quality standards.
          </p>
          <p>
            Our team employs agile methodologies and robust governance frameworks to manage complex digital projects, from system implementations and platform migrations to the rollout of new digital experiences.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Delivery Expertise:</h3>
          <ul>
            <li>Agile and Waterfall project management.</li>
            <li>Program management for large-scale digital initiatives.</li>
            <li>Vendor selection and management.</li>
            <li>Quality assurance and testing.</li>
            <li>Change management and user adoption strategies.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="team working"
            />
        </div>
      </div>
    </div>
  );
}
