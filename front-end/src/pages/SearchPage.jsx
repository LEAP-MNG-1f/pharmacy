"use client";

import GoogleHomePage from "@/components/map/GoogleHome";

export default function SearchHomePage() {
  return (
    <div className="flex items-center justify-center flex-col text-green-300">
      Google
      <GoogleHomePage />
    </div>
  );
}
