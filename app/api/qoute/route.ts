let quotes: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  quotes.push({
    ...body,
    id: Date.now(),
  });

  return new Response(JSON.stringify({ success: true }));
}

export async function GET() {
  return new Response(JSON.stringify(quotes));
}