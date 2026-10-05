import { Metadata } from "next";
import Navbar from "@/component/navbar/navbar";
import GalleryClient from "@/component/gallery/gallery-client";
import Footer from "@/component/footer/footer";

export const metadata: Metadata = {
  title: "Campus & Computer Lab Gallery | Hartron Skill Centre Panipat",
  description:
    "Explore the high-speed computer practical labs, government typing test setup, web development coding studios, and campus facilities at Hartron Skill Centre Panipat under Director Vijender Singh Nara.",
  keywords: [
    "Hartron Panipat Gallery",
    "Hartron Skill Centre Computer Lab",
    "Hartron SD College Panipat Photos",
    "Government Typing Lab Panipat",
    "Vijender Singh Nara Computer Center",
    "Computer Center photos Panipat",
  ],
  openGraph: {
    title: "Campus & Computer Lab Gallery | Hartron Skill Centre Panipat",
    description:
      "Take a virtual tour of our computer practical labs, typing speed test setup, and modern campus near SD College, Panipat.",
    siteName: "Hartron Skill Centre Panipat",
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Hartron Skill Centre Panipat Campus Gallery",
    description:
      "Photos of computer labs, government typing test setup, classrooms, and reception at Hartron Skill Centre Panipat directed by Vijender Singh Nara.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Hartron Skill Centre SD College Panipat",
      url: "https://hartronpanipat.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opp. SD College Road / Near SD Sr. Sec. School",
        addressLocality: "Panipat",
        addressRegion: "Haryana",
        postalCode: "132103",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <GalleryClient />
      </main>
      <Footer />
    </>
  );
}
