"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export function RequireSuperAdmin({ children }: { children: React.ReactNode }) {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isLoaded) return;
        if (!isSignedIn) {
            setError("Not authenticated. Please log in as a super administrator.");
            return;
        }
        const role = user?.publicMetadata?.role;
        if (role !== "super_admin") {
            setError("You do not have super administrator permissions.");
            router.replace("/");
        } else {
            setError(null);
        }
    }, [isLoaded, isSignedIn, user, router]);

    if (error) {
        return <div className="text-center py-12 text-red-600">{error}</div>;
    }
    if (!isLoaded) {
        return <div className="text-center py-12">Checking permissions...</div>;
    }
    if (user?.publicMetadata?.role !== "super_admin") {
        return null;
    }
    return <>{children}</>;
}
