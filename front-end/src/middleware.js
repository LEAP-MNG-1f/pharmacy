import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);

  // Log the current path and auth state
  console.log("Middleware running:", {
    path: url.pathname,
    hasUserId: !!auth.userId,
  });

  // If user is signed in and on sign-in page, redirect them
  if (auth.userId && url.pathname === "/sign-in") {
    const redirectTo = url.searchParams.get("redirect") || "/orderpage";
    return Response.redirect(new URL(redirectTo, request.url));
  }

  // Optional: If you want to force authentication for certain paths
  if (!auth.userId && !url.pathname.startsWith("/sign-in")) {
    url.pathname = "/sign-in";
    url.searchParams.set("redirect", request.url);
    return Response.redirect(url);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
