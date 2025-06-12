
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceB2BGoToMarketPage() {
  const pageTitle = "B2B Go-To-Market Strategy";
  const serviceCategory = "Revenue Growth";

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
        Targeting success with <span className="font-semibold text-accent">{serviceCategory}</span> services.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            A well-defined {pageTitle} is critical for successfully launching and scaling B2B products and services. We help businesses develop comprehensive strategies that identify target markets, define value propositions, and select optimal sales and marketing channels.
          </p>
          <p>
            Our expertise includes market segmentation, competitive analysis, content strategy, lead generation, and sales enablement to ensure your B2B offerings achieve market traction and revenue targets.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Go-To-Market Pillars:</h3>
          <ul>
            <li>Target audience definition and persona development.</li>
            <li>Value proposition crafting and messaging.</li>
            <li>Channel selection and sales strategy.</li>
            <li>Content marketing and lead generation.</li>
            <li>Sales enablement and training.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="B2B Go-To-Market" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="business handshake"
            />
        </div>
      </div>
    </div>
  );
}
