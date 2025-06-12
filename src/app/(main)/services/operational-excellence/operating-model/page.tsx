
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceOperatingModelPage() {
  const pageTitle = "Operating Model Design";
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
        Structuring for success within <span className="font-semibold text-primary">{serviceCategory}</span> with Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            An effective {pageTitle} defines how your organization delivers value to its customers and stakeholders. We assist in designing and implementing operating models that align your structure, processes, people, and technology with your strategic objectives.
          </p>
          <p>
            Whether you're looking to improve efficiency, enhance agility, or support new growth initiatives, our tailored approach ensures your operating model is fit for purpose and future-ready.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Model Components:</h3>
          <ul>
            <li>Organizational structure and governance.</li>
            <li>Core process definition and optimization.</li>
            <li>Roles, responsibilities, and skill requirements.</li>
            <li>Technology and systems architecture.</li>
            <li>Performance management and metrics.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="business structure chart"
            />
        </div>
      </div>
    </div>
  );
}
