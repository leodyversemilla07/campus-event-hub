"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    return (
        <>
            <Separator className="w-full max-w-6xl mx-auto px-4 sm:px-8 mt-8" />
            <footer className="w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-4 text-center text-muted-foreground text-sm pt-8 pb-6">
                <div className="font-bold text-primary text-base">Campus Event Hub</div>
                <div className="text-muted-foreground text-sm mb-2">
                    Transforming how university communities discover, create, and participate in campus events.
                </div>
                <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium">
                    <Link href="/about" className={`hover:text-primary transition-colors${pathname.startsWith("/about") ? " text-primary" : ""}`}>About</Link>
                    <Link href="/events" className={`hover:text-primary transition-colors${pathname.startsWith("/events") ? " text-primary" : ""}`}>Events</Link>
                    <Link href="/organizations" className={`hover:text-primary transition-colors${pathname.startsWith("/organizations") ? " text-primary" : ""}`}>Organizations</Link>
                    <Link href="/contact" className={`hover:text-primary transition-colors${pathname.startsWith("/contact") ? " text-primary" : ""}`}>Contact</Link>
                </nav>
                <div className="text-xs text-muted-foreground mt-2">&copy; {new Date().getFullYear()} Campus Event Hub. All rights reserved.</div>
            </footer>
        </>
    );
}
