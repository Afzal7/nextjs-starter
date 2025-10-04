import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Helper to protect server components
export async function protectRoute() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return { userId };
}

// Helper to redirect authenticated users
export async function redirectIfAuthenticated(
  redirectPath: string = "/dashboard",
) {
  const { userId } = auth();

  if (userId) {
    redirect(redirectPath);
  }
}

// Helper to get current user info
export async function getCurrentUser() {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

// Helper to check if user is authenticated
export async function isAuthenticated() {
  const { userId } = auth();
  return !!userId;
}

// Helper to protect API routes
export async function protectApiRoute() {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  return { userId };
}
