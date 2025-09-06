"use client";

import { useGetExampleQuery } from "@/redux/features/example/exampleApi"; // Updated path

export default function ExampleComponent() {
  const { data, error, isLoading, isFetching } = useGetExampleQuery();

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return (
      <div className="p-4 text-red-500">
        Error occurred: {JSON.stringify(error)}
      </div>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Example Data</h2>
      {isFetching && <div>Updating...</div>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
