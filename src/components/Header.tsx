"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { SignInButton, UserProfileButton } from "@/components/auth";
import { Skeleton } from "@/components/ui/skeleton";

export default function Header() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            MyApp
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {isSignedIn && (
              <Link
                href="/dashboard"
                className="transition-colors hover:text-foreground/80"
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {!isLoaded ? (
            <Skeleton className="w-8 h-8 rounded-full" />
          ) : isSignedIn ? (
            <UserProfileButton />
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </header>
  );
}
