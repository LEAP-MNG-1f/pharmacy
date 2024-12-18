"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("Component state:", { isLoaded, isSignedIn, hasUser: !!user });

    if (isLoaded && isSignedIn && user) {
      console.log("User ID:", user.id);
      console.log("First Name:", user.firstName);
      console.log("Email:", user.emailAddresses[0]?.emailAddress);
      console.log("Full user object:", user);
    }
  }, [isLoaded, isSignedIn, user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn
        signUpUrl="/sign-up"
        afterSignInUrl={window.location.href} // Stay on current page
      />
    </div>
  );
}
