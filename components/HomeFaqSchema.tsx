export default function HomeFaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you fix my computer remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most software issues, performance problems, and setup issues can be fixed remotely without you needing to leave your home.",
        },
      },
      {
        "@type": "Question",
        name: "How fast will I get help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Response time depends on availability, but WhatsApp is usually the fastest option.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of issues do you fix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We help with slow laptops, viruses, WiFi problems, software errors, system setup, and general IT troubleshooting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only help people in Cape Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. While based in Cape Town, remote support allows us to help clients across South Africa and internationally.",
        },
      },
      {
        "@type": "Question",
        name: "How does payment work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing is shared upfront depending on your issue. You will know what to expect before any work begins.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}