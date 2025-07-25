"use client";


import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export function Header() {
    const pathname = usePathname();
    const { isLoaded, isSignedIn, user } = useUser();
    return (
        <header className="w-full max-w-6xl px-4 sm:px-8 flex items-center justify-between py-6 mb-0">
            <span className="text-2xl font-bold tracking-tight text-primary">Campus Event Hub</span>
            <nav className="flex items-center gap-6">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/"
                                {...(pathname === "/" ? { "data-active": true } : {})}
                                className="text-base font-medium transition-colors px-3 py-2"
                            >
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/events"
                                {...(pathname.startsWith("/events") ? { "data-active": true } : {})}
                                className="text-base font-medium transition-colors px-3 py-2"
                            >
                                Events
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/organizations"
                                {...(pathname.startsWith("/organizations") ? { "data-active": true } : {})}
                                className="text-base font-medium transition-colors px-3 py-2"
                            >
                                Organizations
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/about"
                                {...(pathname.startsWith("/about") ? { "data-active": true } : {})}
                                className="text-base font-medium transition-colors px-3 py-2"
                            >
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="/contact"
                                {...(pathname.startsWith("/contact") ? { "data-active": true } : {})}
                                className="text-base font-medium transition-colors px-3 py-2"
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex gap-3 ml-6">
                    <SignedOut>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Register</Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        {isLoaded && isSignedIn && user && (
                            (() => {
                                const role = user.publicMetadata?.role;
                                let dashboardHref = "/";
                                if (role === "super_admin") dashboardHref = "/admin";
                                else if (role === "org_admin") dashboardHref = "/org-admin";
                                else if (role === "student") dashboardHref = "/student";
                                return (
                                    <Button asChild>
                                        <Link href={dashboardHref}>Dashboard</Link>
                                    </Button>
                                );
                            })()
                        )}
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
}
