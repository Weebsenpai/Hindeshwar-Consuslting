
"use client";

import Link from "next/link";
import { Menu, Mountain, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, type NavItem } from "./nav-links";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services",
    megaMenuColumns: [
      {
        groups: [
          {
            title: "Data & Analytics",
            links: [
              { href: "/services/data-analytics/strategy-analysis", label: "Strategy & Analysis" },
              { href: "/services/data-analytics/architecture-centralization", label: "Architecture Centralization & Modelling" },
              { href: "/services/data-analytics/data-visualization", label: "Data Visualisation" },
            ],
          },
           {
            title: "ESG",
            links: [
              { href: "/services/esg/sustainability-strategy", label: "Sustainability Strategy" },
              { href: "/services/esg/climate-action", label: "Climate Action & Decarbonisation" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Operational Excellence",
            links: [
              { href: "/services/operational-excellence/process-reengineering", label: "Business Process Re-engineering" },
              { href: "/services/operational-excellence/operating-model", label: "Operating Model" },
              { href: "/services/operational-excellence/supply-chain", label: "Supply Chain Management" },
            ],
          },
           {
            title: "Strategy",
            links: [
                { href: "/services/strategy/business-strategy", label: "Business Strategy" },
                { href: "/services/strategy/digital-strategy", label: "Digital Strategy" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Digital Transformation",
            links: [
              { href: "/services/digital-transformation/strategy-analysis", label: "Strategy & Analysis (Digital)" },
              { href: "/services/digital-transformation/innovation", label: "Innovation" },
              { href: "/services/digital-transformation/delivery", label: "Digital Transformation Delivery" },
            ],
          },
           {
            title: "Organisational Effectiveness",
            links: [
                { href: "/services/organisational-effectiveness/organisation-design", label: "Organisation Design" },
                { href: "/services/organisational-effectiveness/operating-model", label: "Operating Model (Org Effect.)" },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: "Revenue Growth",
            links: [
              { href: "/services/revenue-growth/sales-channel-management", label: "Sales & Channel Management" },
              { href: "/services/revenue-growth/product-portfolio", label: "Product & Portfolio Management" },
              { href: "/services/revenue-growth/b2b-go-to-market", label: "B2B Go-To-Market" },
            ],
          },
            {
            title: "Business Transformation",
            links: [
              { href: "/services/business-transformation/transformation-strategy", label: "Transformation Strategy" },
              { href: "/services/business-transformation/transformation-planning", label: "Transformation Planning" },
            ],
          },
        ],
      },
    ],
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
          <nav className="hidden items-center gap-3 md:flex">
            <NavLinks items={navItems} />
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-3 rounded-lg">
              <Link href="/contact">Talk To A Consultant <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 w-full">
                    <Link href="/contact">Talk To A Consultant <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
