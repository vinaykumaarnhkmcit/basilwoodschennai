export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export interface SchemaOrgProps {
  type: 'Organization' | 'EducationalOrganization';
  name: string;
  url: string;
  logo: string;
  description: string;
}
