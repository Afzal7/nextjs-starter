"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignInButton({
  children,
  ...props
}: { children?: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href="/sign-in" {...props}>
      {children || <Button variant="default">Sign In</Button>}
    </Link>
  );
}
