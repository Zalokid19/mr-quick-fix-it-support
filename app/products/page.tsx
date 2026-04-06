"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { slug: "flooring", name: "Flooring Systems" },
  { slug: "waterproofing", name: "Waterproofing" },
  { slug: "coatings", name: "Protective Coatings" },
];

export default function Products() {
  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Our Products
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>
            <p className="text-gray-500">
              Click to explore →
            </p>
          </Link>
        ))}
      </div>
      <motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-white p-6 rounded-lg shadow"
></motion.div>
    </main>
  );
}