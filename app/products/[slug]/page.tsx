export default function ProductPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug || "product";

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        {slug.toUpperCase()}
      </h1>

      <p className="mt-4 text-gray-600">
        Detailed information about {slug}.
      </p>
    </main>
  );
}