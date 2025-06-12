
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
  children?: NavLink[]; 
  megaMenuColumns?: MegaMenuColumn[]; 
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
      isActive ? "text-primary font-semibold" : "text-muted-foreground",
      disabled && "pointer-events-none opacity-50",
      isMobile
        ? "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground w-full text-left" // ensure full width for mobile
        : "px-3 py-2 rounded-md",
      !isMobile && isTrigger && "cursor-pointer flex items-center gap-1 group" // Added group for ChevronDown rotation
    );

  const dropdownMenuItemLinkClasses = (href: string | undefined, disabled?: boolean) =>
    cn(
      "w-full text-left text-card-foreground hover:text-primary", // Ensure text color for light card background
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
                    "group outline-none cursor-pointer"
                  )}
                  role="button" // for accessibility
                  tabIndex={0} // for keyboard navigation
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') e.currentTarget.click(); }}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-muted-foreground group-hover:text-primary"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                sideOffset={18} // Increased offset
                className="w-auto max-w-5xl p-6 bg-card text-card-foreground shadow-2xl rounded-lg z-[60] border-border" 
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                  {item.megaMenuColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="space-y-6">
                      {column.groups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold text-primary text-[0.9rem] mb-3 border-b border-dotted border-border pb-2">
                            {group.title}
                          </h4>
                          <ul className="space-y-2 mt-2">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-card-foreground hover:text-primary hover:underline"
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
                  "h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-muted-foreground group-hover:text-primary",
                  isMobile ? "ml-auto" : "" // Ensure chevron is at the end on mobile
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
                  "outline-none", 
                   isMobile ? "w-full" : navLinkClasses(item.href, item.disabled, true, isActive)
                )}
                asChild={!isMobile} 
              >
               {triggerElement}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isMobile ? "center" : "start"}
                className={cn(
                  isMobile ? "w-[calc(100vw-5rem)] min-w-[calc(100vw-5rem)]" : "min-w-[220px]",
                  "mt-1 z-[60] bg-card text-card-foreground border-border shadow-xl" // Added styles for dark theme
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
                        <DropdownMenuItem asChild className="focus:bg-accent/20 focus:text-primary">{menuItemContent}</DropdownMenuItem>
                      </SheetClose>
                    );
                  }
                  return (
                    <DropdownMenuItem asChild key={child.href} className="focus:bg-accent/20 focus:text-primary">{menuItemContent}</DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        } else if (item.href) {
          // REGULAR LINK (Desktop or Mobile)
          // For mobile and "Services" which has megaMenu but not children, it should be a simple link.
          if (isMobile && item.megaMenuColumns && item.href) { // This handles the main "Services" link on mobile
             const mobileLinkElement = (
              <Link
                href={item.href} 
                className={navLinkClasses(item.href, item.disabled, false, isActive)}
                prefetch={false}
              >
                {item.label}
              </Link>
            );
            // For mobile, if it's a mega menu item, we still want to list its sub-pages
            // This section is complex due to mobile mega menu adaptation, simplifying to direct link for now
            // Or, list children if defined, otherwise direct link
            if(item.megaMenuColumns.length > 0 && isMobile) {
                 const allLinks: NavLink[] = [];
                 item.megaMenuColumns.forEach(col => col.groups.forEach(group => allLinks.push(...group.links)));
                 
                 return (
                    <div key={item.label}>
                        <div className={cn(navLinkClasses(item.href, item.disabled, true, isActive), "flex items-center justify-between w-full text-foreground font-semibold")}>
                         {item.label}
                        </div>
                        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                        {allLinks.map(link => (
                             <SheetClose asChild key={link.href}>
                                 <Link href={link.href} className={navLinkClasses(link.href, link.disabled, false, pathname.startsWith(link.href))}>
                                     {link.label}
                                 </Link>
                             </SheetClose>
                         ))}
                        </div>
                    </div>
                 );
            }

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
