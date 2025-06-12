
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceSalesChannelManagementPage() {
  const pageTitle = "Sales & Channel Management";
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
        Maximizing reach within our <span className="font-semibold text-primary">{serviceCategory}</span> services at Hindeshwar Consulting.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
          <p>
            Effective {pageTitle} is essential for maximizing market penetration and driving revenue. We help organizations design, optimize, and manage their sales channels, whether direct, indirect, or digital.
          </p>
          <p>
            Our services include channel strategy development, sales process optimization, partner program design, and sales force effectiveness, ensuring your channels are aligned and performing optimally.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Channel Strategies:</h3>
          <ul>
            <li>Go-to-market and channel strategy.</li>
            <li>Sales process design and optimization.</li>
            <li>Partner relationship management (PRM) strategies.</li>
            <li>Sales team structuring and incentivization.</li>
            <li>Digital sales channel development.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt={`${pageTitle} - Hindeshwar Consulting`}
                width={600} 
                height={400} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="sales channel team"
            />
        </div>
      </div>
    </div>
  );
}
