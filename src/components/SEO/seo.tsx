import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { SEOProps } from '../../types/seo';

const defaultSEO = {
  title: "Basil Woods Juniors Chennai | Top Preschool & Daycare with Tamil Cultural Integration",
  description: "Experience excellence in early childhood education at Basil Woods Juniors Chennai. Our award-winning preschool combines Tamil cultural values with modern global curriculum for children aged 18 months to 6 years.",
  keywords: "Basil Woods Juniors Chennai, best preschool Chennai, Tamil cultural education, early childhood development",
  ogImage: "https://basilwoodschennai.in/BWJ-Logos.png",
  siteUrl: "https://basilwoodschennai.in"
};

export const SEO: FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogTitle,
  ogDescription,
  ogImage = defaultSEO.ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl = defaultSEO.siteUrl,
  noindex = false,
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Geo Location */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />

      {/* Additional */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEO;
