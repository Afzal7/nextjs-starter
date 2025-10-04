"use client";

import { SignOutButton as ClerkSignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignOutButton({
  children,
  ...props
}: React.ComponentProps<typeof ClerkSignOutButton>) {
  return (
    <ClerkSignOutButton {...props}>
      {children || <Button variant="destructive">Sign Out</Button>}
    </ClerkSignOutButton>
  );
}
