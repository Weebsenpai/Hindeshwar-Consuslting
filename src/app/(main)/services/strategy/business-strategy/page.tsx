
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceBusinessStrategyPage() {
  const pageTitle = "Business Strategy";
  const serviceCategory = "Strategy";

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
        Crafting your path to success with our <span className="font-semibold text-accent">{serviceCategory}</span> services.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            A clear and compelling {pageTitle} is the foundation for sustainable growth and competitive advantage. We work with leaders to define their vision, analyze market opportunities, and formulate robust strategies that deliver measurable results.
          </p>
          <p>
            Our approach is collaborative and data-driven, ensuring that strategies are not only ambitious but also actionable and aligned with your organization's capabilities and resources.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Strategic Frameworks:</h3>
          <ul>
            <li>Market analysis and competitive positioning.</li>
            <li>Growth strategy development (organic and inorganic).</li>
            <li>Portfolio optimization and resource allocation.</li>
            <li>Scenario planning and risk management.</li>
            <li>Strategic execution and performance tracking.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Business Strategy" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="chess board"
            />
        </div>
      </div>
    </div>
  );
}
