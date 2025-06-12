
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  disabled?: boolean;
}

export interface LinkGroup {
  title: string;
  links: NavLink[];
}

export interface MegaMenuColumn {
  groups: LinkGroup[];
}

export interface NavItem {
  label: string;
  href?: string;
  disabled?: boolean;
  children?: NavLink[]; // For simple dropdowns
  megaMenuColumns?: MegaMenuColumn[]; // For mega menus
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
      isMobile
        ? "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground"
        : "px-3 py-2 rounded-md",
      !isMobile && isTrigger && "cursor-pointer"
    );

  const dropdownMenuItemLinkClasses = (href: string | undefined, disabled?: boolean) =>
    cn(
      "w-full text-left",
      pathname === href ? "text-primary font-semibold" : "",
      disabled && "pointer-events-none opacity-50"
    );

  return (
    <>
      {items.map((item) => {
        const isActive = item.href ? pathname.startsWith(item.href) : false;

        if (!isMobile && item.megaMenuColumns && item.megaMenuColumns.length > 0) {
          // DESKTOP MEGA MENU (HoverCard)
          return (
            <HoverCard key={item.label} openDelay={50} closeDelay={150}>
              <HoverCardTrigger asChild>
                <div
                  className={cn(
                    navLinkClasses(item.href, item.disabled, true, isActive),
                    "flex items-center group outline-none cursor-pointer gap-1"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                sideOffset={12}
                className="w-auto max-w-5xl p-6 bg-card shadow-xl rounded-lg z-[60]" // Ensure z-index
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                  {item.megaMenuColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-6">
                      {column.groups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold text-primary text-[0.9rem] mb-2 border-b border-dotted border-border pb-1.5">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5 mt-2">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-muted-foreground hover:text-primary hover:underline"
                                  prefetch={false}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        } else if (item.children && item.children.length > 0) {
          // SIMPLE DROPDOWN (Desktop or Mobile)
          const triggerContent = (
            <>
              {item.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
                  isMobile ? "" : ""
                )}
              />
            </>
          );
          
          const triggerElement = isMobile ? (
            <div className={cn(navLinkClasses(item.href, item.disabled, true, isActive), "flex items-center justify-between w-full")}>
              {triggerContent}
            </div>
          ) : (
             <span className={cn(navLinkClasses(item.href, item.disabled, true, isActive), "flex items-center group outline-none gap-1")}>
              {triggerContent}
            </span>
          );

          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className={cn(
                  "outline-none", // remove default trigger styling if it's just a wrapper
                   isMobile ? "" : navLinkClasses(item.href, item.disabled, true, isActive) // Apply base styles only on desktop for trigger
                )}
                asChild={!isMobile} // asChild on desktop to use custom styled span, not on mobile to use default button look from navLinkClasses
              >
               {triggerElement}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isMobile ? "center" : "start"}
                className={cn(
                  isMobile ? "w-[calc(100vw-5rem)] min-w-[calc(100vw-5rem)]" : "min-w-[220px]",
                  "mt-1 z-[60]"
                )}
              >
                {item.children.map((child) => {
                  const menuItemContent = (
                    <Link
                      href={child.href}
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
          // REGULAR LINK (Desktop or Mobile)
          // For mobile and "Services" which has megaMenu but not children, it should be a simple link.
          if (isMobile && item.megaMenuColumns && item.href) {
             const mobileLinkElement = (
              <Link
                href={item.href} // Links to the base href e.g. /services
                className={navLinkClasses(item.href, item.disabled, false, isActive)}
                prefetch={false}
              >
                {item.label}
              </Link>
            );
            return <SheetClose asChild key={item.href}>{mobileLinkElement}</SheetClose>;
          }

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
