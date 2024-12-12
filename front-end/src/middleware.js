import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);

  // If user is signed in and on sign-in page, redirect them
  if (auth.userId && url.pathname === "/sign-in") {
    const redirectTo = url.searchParams.get("redirect") || "/orderpage";
    return Response.redirect(new URL(redirectTo, request.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
