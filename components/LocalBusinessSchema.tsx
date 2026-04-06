export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerRepair",
    name: "Mr Quick Fix",
    url: "yourwebsite.com",
    telephone: "+27 67 625 9810",
    email: "ITsolutions.011404@gmail.com",
    areaServed: [
      {
        "@type": "City",
        name: "Cape Town",
      },
      {
        "@type": "Country",
        name: "South Africa",
      },
    ],
    address: {
      "@type": "7493",
      addressLocality: "Cape Town",
      addressCountry: "ZA",
    },
    description:
      "Mr Quick Fix provides fast remote IT support in Cape Town and South Africa, including laptop repair, virus removal, WiFi help, software troubleshooting, and remote computer support.",
    serviceType: [
      "performance repair",
      "Virus removal",
      "Internet and WiFi help",
      "Remote IT support",
      "Software troubleshooting",
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}