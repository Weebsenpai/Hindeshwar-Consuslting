
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceOrgEffectivenessOperatingModelPage() {
  const pageTitle = "Operating Model";
  const serviceCategory = "Organisational Effectiveness";

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
        Enhancing performance through <span className="font-semibold text-accent">{serviceCategory}</span>.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            A fit-for-purpose {pageTitle} is central to achieving {serviceCategory}. We work with organizations to design and refine their operating models, ensuring alignment between strategy, structure, processes, people, and technology.
          </p>
          <p>
            This involves clarifying how value is created and delivered, optimizing workflows, defining roles and responsibilities, and establishing governance mechanisms that support agility and efficiency.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Model Optimisation:</h3>
          <ul>
            <li>Alignment of operating model with strategic goals.</li>
            <li>Process streamlining and efficiency gains.</li>
            <li>Structural adjustments for improved collaboration.</li>
            <li>Technology integration to support operations.</li>
            <li>Performance metrics and continuous improvement.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Operating Model for Organisational Effectiveness" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="gears working"
            />
        </div>
      </div>
    </div>
  );
}
