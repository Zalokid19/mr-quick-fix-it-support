"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {quotes.length === 0 ? (
        <p>No quotes yet</p>
      ) : (
        <div className="space-y-4">
          {quotes.map((q) => (
            <div key={q.id} className="border p-4 rounded">
              <h2 className="font-bold">{q.name}</h2>
              <p>{q.email}</p>
              <p>{q.message}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}