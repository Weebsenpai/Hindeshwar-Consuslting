
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export interface NavItem {
  href?: string; // Href is optional if item is only a trigger with children
  label: string;
  disabled?: boolean;
  children?: NavItem[]; // Added for sub-menu items
}

interface NavLinksProps {
  items: NavItem[];
  isMobile?: boolean;
}

export function NavLinks({ items, isMobile = false }: NavLinksProps) {
  const pathname = usePathname();

  const navLinkClasses = (href: string | undefined, disabled?: boolean, isTrigger?: boolean, isActive?: boolean) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      isActive ? "text-primary" : "text-muted-foreground",
      disabled && "pointer-events-none opacity-50",
      // Mobile specific base styling for links and dropdown triggers
      isMobile && "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground",
      // Desktop specific trigger styling (button appearance)
      !isMobile && isTrigger && "px-3 py-2", // Padding for desktop trigger button
      !isMobile && isTrigger && "cursor-pointer rounded-md" // Make it look like other nav items
    );

  const dropdownMenuItemLinkClasses = (href: string | undefined, disabled?: boolean) =>
    cn(
      "w-full text-left", // Ensure link takes full width of menu item
      pathname === href ? "text-primary font-semibold" : "", // Active state for dropdown item
      disabled && "pointer-events-none opacity-50"
    );

  return (
    <>
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          // Render DropdownMenu for items with children
          const isActive = item.href ? pathname.startsWith(item.href) : false;
          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className={cn(
                  navLinkClasses(item.href, item.disabled, true, isActive),
                  "flex items-center group outline-none", // group for icon rotation, outline-none for trigger
                  isMobile ? "justify-between w-full" : "gap-1" // Mobile: full width, space between | Desktop: small gap
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
                    isMobile ? "" : "" 
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align={isMobile ? "center" : "start"} 
                className={cn(isMobile ? "w-[calc(100vw-5rem)] min-w-[calc(100vw-5rem)]" : "min-w-[200px]", "mt-1 z-[60]")} // Increased z-index, ensure it's above other sticky elements if any
              >
                {item.children.map((child) => {
                  const menuItemContent = (
                    <Link
                      href={child.href!} // Assert href exists for children
                      className={dropdownMenuItemLinkClasses(child.href, child.disabled)}
                      prefetch={false}
                    >
                      {child.label}
                    </Link>
                  );

                  if (isMobile) {
                    return (
                      <SheetClose asChild key={child.href}>
                        <DropdownMenuItem asChild>{menuItemContent}</DropdownMenuItem>
                      </SheetClose>
                    );
                  }
                  return (
                    <DropdownMenuItem asChild key={child.href}>{menuItemContent}</DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        } else if (item.href) {
          // Render regular Link for items without children but with href
          const isActive = pathname === item.href;
          const linkElement = (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClasses(item.href, item.disabled, false, isActive)}
              prefetch={false}
            >
              {item.label}
            </Link>
          );
          if (isMobile) {
            return <SheetClose asChild key={item.href}>{linkElement}</SheetClose>;
          }
          return linkElement;
        }
        return null; 
      })}
    </>
  );
}

    