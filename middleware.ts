import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protect all routes except /profile catch-all
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/organizations(.*)",
  "/events(.*)",
  "/student(.*)",
  "/org-admin(.*)",
  // Add other protected routes as needed
]);

export default clerkMiddleware(async (auth, req) => {
  // Do not protect /profile catch-all route
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
