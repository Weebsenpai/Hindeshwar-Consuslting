"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

export interface NavItem {
  href: string;
  label: string;
  disabled?: boolean;
}

interface NavLinksProps {
  items: NavItem[];
  isMobile?: boolean;
}

export function NavLinks({ items, isMobile = false }: NavLinksProps) {
  const pathname = usePathname();

  const linkClasses = (href: string, disabled?: boolean) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      pathname === href ? "text-primary" : "text-muted-foreground",
      disabled && "pointer-events-none opacity-50",
      isMobile && "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground"
    );

  const renderLink = (item: NavItem) => (
    <Link
      key={item.href}
      href={item.href}
      className={linkClasses(item.href, item.disabled)}
      prefetch={false}
    >
      {item.label}
    </Link>
  );

  if (isMobile) {
    return (
      <>
        {items.map((item) => (
          <SheetClose key={item.href} asChild>
            {renderLink(item)}
          </SheetClose>
        ))}
      </>
    );
  }

  return <>{items.map(renderLink)}</>;
}
