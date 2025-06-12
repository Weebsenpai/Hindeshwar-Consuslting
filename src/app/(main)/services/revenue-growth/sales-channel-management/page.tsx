
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceSalesChannelManagementPage() {
  const pageTitle = "Sales & Channel Management";
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
        Maximizing reach within our <span className="font-semibold text-accent">{serviceCategory}</span> services.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            Effective {pageTitle} is essential for maximizing market penetration and driving revenue. We help organizations design, optimize, and manage their sales channels, whether direct, indirect, or digital.
          </p>
          <p>
            Our services include channel strategy development, sales process optimization, partner program design, and sales force effectiveness, ensuring your channels are aligned and performing optimally.
          </p>
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Channel Strategies:</h3>
          <ul>
            <li>Go-to-market and channel strategy.</li>
            <li>Sales process design and optimization.</li>
            <li>Partner relationship management (PRM) strategies.</li>
            <li>Sales team structuring and incentivization.</li>
            <li>Digital sales channel development.</li>
          </ul>
        </div>
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <Image 
                src="https://placehold.co/600x400.png" 
                alt="Sales Channel Management" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
                data-ai-hint="sales team"
            />
        </div>
      </div>
    </div>
  );
}
