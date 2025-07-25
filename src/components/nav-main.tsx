"use client"

import { type LucideIcon } from "lucide-react"
import Link from "next/link"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavMainItem {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
}

interface NavMainProps {
    items: NavMainItem[];
}

export function NavMain({ items }: NavMainProps) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                            <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
