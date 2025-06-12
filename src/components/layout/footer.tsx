import Link from "next/link";
import { Facebook, Twitter, Linkedin, MountainIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <MountainIcon className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">Apex Consulting</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing expert solutions for business growth and success.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Services</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link></li>
              <li><Link href="/cta-generator" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>CTA Generator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}><Facebook className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}><Twitter className="h-6 w-6" /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}><Linkedin className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Apex Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
