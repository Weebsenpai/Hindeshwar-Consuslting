
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceDigitalInnovationPage() {
  const pageTitle = "Innovation";
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
        Driving force within our <span className="font-semibold text-accent">{serviceCategory}</span> solutions.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Fostering a culture of {pageTitle} is key to thriving in the digital age. We assist organizations in building innovation frameworks, identifying emerging technologies, and developing new digital products, services, and business models.
          </p>
          <p>
            Our services range from ideation workshops and proof-of-concept development to scaling innovative solutions across the enterprise, helping you stay ahead of the curve and meet evolving customer demands.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Innovation Services:</h3>
          <ul>
            <li>Ideation and design thinking workshops.</li>
            <li>Rapid prototyping and MVP development.</li>
            <li>Incubation and acceleration programs for new ventures.</li>
            <li>Building internal innovation capabilities and culture.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Digital Innovation" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="lightbulb idea"
            />
        </div>
      </div>
    </div>
  );
}
