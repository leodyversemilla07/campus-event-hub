"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function RoleRedirect() {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;
        const role = user?.publicMetadata?.role;
        // Debug log: see what role is being read
        console.log("Clerk user:", user);
        console.log("Detected role:", role);
        if (role === "super_admin") {
            router.replace("/admin");
        } else if (role === "student") {
            router.replace("/student");
        } else if (role === "org_admin") {
            router.replace("/org-admin");
        }
    }, [isLoaded, user, router]);

    return null;
}
