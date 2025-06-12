
"use client";

import Link from "next/link";
import { Menu, MountainIcon, ChevronDown } from "lucide-react"; // Added ChevronDown
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NavLinks, type NavItem } from "./nav-links";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services", // Base href for active state and "All Services" link
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services#strategic-planning", label: "Data & Analysis" },
      { href: "/services#operational-excellence", label: "Operational Excellence" },
      { href: "/services#innovation-growth", label: "Digital Transformation" },
      { href: "/services#revenue-growth", label: "Revenue Growth" }, // Ensure this ID exists or is added to the services page for scrolling
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/cta-generator", label: "CTA Generator" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">Apex Consulting</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex"> {/* Adjusted gap for dropdown trigger consistency */}
          <NavLinks items={navItems} />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold text-primary">Apex Consulting</span>
              </Link>
              <nav className="grid gap-2">
                <NavLinks items={navItems} isMobile={true} />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

    