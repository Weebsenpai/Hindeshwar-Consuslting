
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceB2BGoToMarketPage() {
  const pageTitle = "B2B Go-To-Market Strategy";
  const serviceCategory = "Revenue Growth";

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
        Targeting success with <span className="font-semibold text-primary">{serviceCategory}</span> services at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            A well-defined {pageTitle} is critical for successfully launching and scaling B2B products and services. We help businesses develop comprehensive strategies that identify target markets, define value propositions, and select optimal sales and marketing channels.
          </p>
          <p>
            Our expertise includes market segmentation, competitive analysis, content strategy, lead generation, and sales enablement to ensure your B2B offerings achieve market traction and revenue targets.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Go-To-Market Pillars:</h3>
          <ul>
            <li>Target audience definition and persona development.</li>
            <li>Value proposition crafting and messaging.</li>
            <li>Channel selection and sales strategy.</li>
            <li>Content marketing and lead generation.</li>
            <li>Sales enablement and training.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="b2b market strategy"
            />
        </div>
      </div>
    </div>
  );
}
