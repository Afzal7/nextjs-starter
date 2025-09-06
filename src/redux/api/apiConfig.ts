// API configuration based on environment
const getBaseURL = () => {
  if (typeof window !== "undefined") {
    // Client-side
    return "/api";
  }
  // Server-side - use full URL for SSR
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
};

export const API_CONFIG = {
  baseURL: getBaseURL(),
};
