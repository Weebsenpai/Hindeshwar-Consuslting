
"use client";

import Link from "next/link";
import { Menu, Mountain, Search, MapPin, Star, CalendarCheck, UserCircle2, MessageSquareText, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, type NavItem } from "./nav-links";

const serviceItemsForMegaMenu = [
  {
    icon: MapPin,
    title: "Digital Strategy",
    description: "Navigate the digital landscape effectively.",
    href: "/services/digital-transformation/strategy-analysis",
  },
  {
    icon: Star,
    title: "Data Insights",
    description: "Leverage data for impactful decisions.",
    href: "/services/data-analytics/strategy-analysis",
  },
  {
    icon: CalendarCheck,
    title: "Process Optimization",
    description: "Streamline operations for peak efficiency.",
    href: "/services/operational-excellence/process-reengineering",
  },
  {
    icon: UserCircle2,
    title: "Customer Engagement",
    description: "Enhance sales & manage channels.",
    href: "/services/revenue-growth/sales-channel-management",
  },
  {
    icon: MessageSquareText,
    title: "Innovation Hub",
    description: "Foster creativity and new solutions.",
    href: "/services/digital-transformation/innovation",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Delivery",
    description: "Execute your digital projects.",
    href: "/services/digital-transformation/delivery",
  },
];


const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    // New structure for the 2x3 grid inspired mega menu
    serviceItems: serviceItemsForMegaMenu,
    // Old megaMenuColumns structure is replaced by serviceItems for this NavItem
    // megaMenuColumns: [ /* ... existing complex structure ... */ ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/cta-generator", label: "AI Tools" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">Hindeshwar Consulting</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-2 md:flex">
            <NavLinks items={navItems} />
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden text-foreground hover:text-primary border-border hover:border-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground border-border">
              <div className="grid gap-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold text-foreground">Hindeshwar Consulting</span>
                </Link>
                <nav className="grid gap-2">
                  <NavLinks items={navItems} isMobile={true} />
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                   <Button variant="ghost" size="lg" aria-label="Search" className="text-foreground hover:text-primary justify-start">
                    <Search className="mr-2 h-5 w-5" /> Search
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
