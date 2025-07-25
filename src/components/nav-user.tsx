"use client"

// Minimal Clerk user type for custom trigger
interface ClerkUser {
    imageUrl?: string;
    fullName?: string;
    firstName?: string;
    emailAddresses?: { emailAddress?: string }[];
}

import { UserButton, useUser } from "@clerk/nextjs"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function NavUser() {
    const { state } = useSidebar();
    const { user } = useUser();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                {state === "collapsed" ? (
                    <div className="flex items-center justify-center w-full px-2 py-1">
                        <UserButton
                            userProfileMode="modal"
                            appearance={{
                                elements: {
                                    avatarBox: () => (
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                                            <AvatarFallback className="rounded-lg">
                                                {user?.firstName?.[0] || user?.fullName?.[0] || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    ),
                                    userButtonTrigger: ({ user, ...props }: { user: ClerkUser;[key: string]: unknown }) => {
                                        const u = user;
                                        return (
                                            <button
                                                className="h-8 w-8 rounded-lg flex items-center justify-center focus:outline-none"
                                                {...props}
                                            >
                                                <Avatar className="h-8 w-8 rounded-lg">
                                                    <AvatarImage src={u?.imageUrl} alt={u?.fullName || "User"} />
                                                    <AvatarFallback className="rounded-lg">
                                                        {u?.firstName?.[0] || u?.fullName?.[0] || "U"}
                                                    </AvatarFallback>
                                                </Avatar>
                                            </button>
                                        );
                                    },
                                }
                            }}
                        />
                    </div>
                ) : (
                    <div className="flex items-center w-full px-2 py-1">
                        <UserButton
                            showName
                            userProfileMode="modal"
                            appearance={{
                                elements: {
                                    userButtonBox: "flex gap-2 items-center w-full",
                                    avatarBox: () => (
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                                            <AvatarFallback className="rounded-lg">
                                                {user?.firstName?.[0] || user?.fullName?.[0] || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    ),
                                    userButtonTrigger: ({ user, ...props }: { user: ClerkUser;[key: string]: unknown }) => {
                                        const u = user;
                                        return (
                                            <SidebarMenuButton
                                                size="lg"
                                                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center gap-2 px-2 py-1 rounded-lg"
                                                {...props}
                                            >
                                                <Avatar className="h-8 w-8 rounded-lg">
                                                    <AvatarImage src={u?.imageUrl} alt={u?.fullName || "User"} />
                                                    <AvatarFallback className="rounded-lg">
                                                        {u?.firstName?.[0] || u?.fullName?.[0] || "U"}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="grid flex-1 text-left text-sm leading-tight">
                                                    <span className="truncate font-medium">{u?.fullName || "User"}</span>
                                                    <span className="truncate text-xs">{u?.emailAddresses?.[0]?.emailAddress || ""}</span>
                                                </div>
                                                <svg className="ml-auto size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 15 12 10 17 15" /></svg>
                                            </SidebarMenuButton>
                                        );
                                    },
                                    userButtonName: "truncate font-medium text-sm",
                                    userButtonEmail: "truncate text-xs",
                                }
                            }}
                        />
                    </div>
                )}
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
