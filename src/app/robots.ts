// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies to all web crawlers
      allow: '/', // Allows crawling of all content
      // disallow: '/private/', // Example: disallow crawling of a specific path
    },
    sitemap: 'https://www.nrworkforce.com/sitemap.xml', // Replace with your actual domain
    host: 'https://www.nrworkforce.com', // Replace with your actual domain
  };
}
