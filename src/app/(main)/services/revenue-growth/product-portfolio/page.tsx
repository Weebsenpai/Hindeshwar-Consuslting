
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceProductPortfolioPage() {
  const pageTitle = "Product & Portfolio Management";
  const serviceCategory = "Revenue Growth";

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
        Optimizing offerings in our <span className="font-semibold text-primary">{serviceCategory}</span> solutions at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Strategic {pageTitle} ensures your offerings align with market needs and business objectives. We assist in analyzing market trends, managing the product lifecycle, and optimizing your portfolio for maximum profitability and growth.
          </p>
          <p>
            Our approach involves data-driven decision-making for new product development, product line rationalization, and pricing strategies, ensuring your portfolio remains competitive and valuable.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Portfolio Management:</h3>
          <ul>
            <li>Market research and opportunity analysis.</li>
            <li>New product development (NPD) process optimization.</li>
            <li>Product lifecycle management (PLM).</li>
            <li>Portfolio rationalization and optimization.</li>
            <li>Pricing and monetization strategies.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="product display"
            />
        </div>
      </div>
    </div>
  );
}
