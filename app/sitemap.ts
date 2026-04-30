import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ipp.com.my';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services/wealth-protection`, lastModified: new Date() },
    { url: `${baseUrl}/services/wealth-accumulation`, lastModified: new Date() },
    { url: `${baseUrl}/services/wealth-management`, lastModified: new Date() },
    { url: `${baseUrl}/services/wealth-distribution`, lastModified: new Date() },
  ];
}
