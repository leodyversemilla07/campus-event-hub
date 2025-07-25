"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useMemo } from "react";

export function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  const { getToken, isSignedIn } = useAuth();
  const convex = useMemo(() => new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!), []);


  useEffect(() => {
    convex.setAuth(async () => {
      if (!isSignedIn) return null;
      return await getToken({ template: "convex" });
    });
  }, [getToken, isSignedIn, convex]);

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
