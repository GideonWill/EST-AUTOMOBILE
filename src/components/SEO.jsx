import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  type = 'website', 
  name = 'ETS AUTOMOTIVE', 
  href, 
  image = '/og-image.jpg',
  keywords = 'auto repair, car service, auto parts, mobile mechanic, Accra'
}) {
  const currentUrl = href || window.location.href;
  const fullTitle = title ? `${title} | ${name}` : name;

  // JSON-LD Structured Data for LocalBusiness
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": name,
    "image": image,
    "url": "https://etsautomotive.com",
    "telephone": "+233509294314",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "description": "Premium automobile parts, wheels, spares and accessories. Expert car maintenance and repair services.",
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* End Standard SEO */}

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      {/* End Facebook Tags */}

      {/* Twitter Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter Tags */}
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}
