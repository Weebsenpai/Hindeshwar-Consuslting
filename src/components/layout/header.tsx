
"use client";

import Link from "next/link";
import { Menu, MountainIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, type NavItem, type NavLink, type MegaMenuColumn, type LinkGroup } from "./nav-links";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    href: "/services", // Fallback for mobile and base for active state
    megaMenuColumns: [
      { // Column 1
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
            title: "Business Transformation",
            links: [
              { href: "/services/business-transformation/transformation-strategy", label: "Transformation Strategy" },
              { href: "/services/business-transformation/transformation-planning", label: "Transformation Planning" },
            ],
          },
        ],
      },
      { // Column 2
        groups: [
          {
            title: "Digital Transformation",
            links: [
              { href: "/services/digital-transformation/strategy-analysis", label: "Strategy & Analysis" },
              { href: "/services/digital-transformation/innovation", label: "Innovation" },
              { href: "/services/digital-transformation/delivery", label: "Digital Transformation Delivery" },
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
      { // Column 3
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
      { // Column 4
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
            title: "Organisational Effectiveness",
            links: [
              { href: "/services/organisational-effectiveness/operating-model", label: "Operating Model" },
              { href: "/services/organisational-effectiveness/organisation-design", label: "Organisation Design" },
            ],
          },
        ],
      },
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
        <nav className="hidden items-center gap-2 md:flex">
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
