import { NextResponse } from "next/server";

// Mock data
let exampleData = {
  id: 1,
  name: "Example Item",
  description: "This is an example item from the API",
  timestamp: new Date().toISOString(),
};

// GET endpoint
export async function GET() {
  return NextResponse.json(exampleData);
}

// POST endpoint
export async function POST(request: Request) {
  const newData = await request.json();

  // Update mock data
  exampleData = {
    ...exampleData,
    ...newData,
    id: exampleData.id + 1,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(exampleData);
}
