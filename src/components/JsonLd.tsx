export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "WalWeb - Soluciones Digitales",
        "image": "https://walweb.vercel.app/walter_contact.png",
        "@id": "https://walweb.vercel.app",
        "url": "https://walweb.vercel.app",
        "telephone": "+50254122572",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guatemala City",
            "addressRegion": "Guatemala",
            "addressCountry": "GT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.6349,
            "longitude": -90.5069
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.linkedin.com/in/waltetergv/",
            "https://www.tiktok.com/@walwebsolutions",
            "https://wa.me/50254122572"
        ],
        "description": "Desarrollo web, redes y automatización en Guatemala. Soluciones digitales profesionales y efectivas.",
        "founder": {
            "@type": "Person",
            "name": "Walter García"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
