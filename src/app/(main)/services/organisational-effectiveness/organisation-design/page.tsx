
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceOrganisationDesignPage() {
  const pageTitle = "Organisation Design";
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
        Structuring for success within <span className="font-semibold text-accent">{serviceCategory}</span>.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Effective {pageTitle} ensures that your organizational structure supports your strategy and enables your people to perform at their best. We help you design structures that are agile, efficient, and aligned with your business objectives.
          </p>
          <p>
            Our services include analyzing current structures, defining roles and responsibilities, designing reporting lines, and facilitating the change management process to implement new organizational designs.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Design Principles:</h3>
          <ul>
            <li>Alignment with strategic priorities.</li>
            <li>Clarity of roles, responsibilities, and accountabilities.</li>
            <li>Facilitation of collaboration and communication.</li>
            <li>Scalability and adaptability for future growth.</li>
            <li>Empowerment and development of talent.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Organisation Design" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="team structure"
            />
        </div>
      </div>
    </div>
  );
}
