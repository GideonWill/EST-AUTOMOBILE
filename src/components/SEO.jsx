import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website', name = 'EST AUTOMOTIVE', href }) {
  const currentUrl = href || window.location.href;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title ? `${title} | ${name}` : name}</title>
      <meta name="description" content={description} />
      {/* End Standard SEO */}

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title ? `${title} | ${name}` : name} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      {/* End Facebook Tags */}

      {/* Twitter Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${name}` : name} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter Tags */}
      
      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
