"use client"

import * as React from "react"
import {
    BookOpen,
    Bot,
    Command,
    Settings2,
    SquareTerminal,
    PieChart
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Overview",
            url: "/admin",
            icon: SquareTerminal,
        },
        {
            title: "Moderation",
            url: "/admin/moderation",
            icon: Bot,
        },
        {
            title: "Verification",
            url: "/admin/verification",
            icon: BookOpen,
        },
        {
            title: "Reports",
            url: "/admin/reports",
            icon: PieChart,
        },
        {
            title: "Policies",
            url: "/admin/policies",
            icon: Settings2,
        },
    ],
}

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Acme Inc</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}
