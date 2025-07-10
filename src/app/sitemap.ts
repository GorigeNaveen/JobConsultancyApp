// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.nrworkforce.com', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'yearly', // Or 'monthly', 'weekly', etc.
      priority: 1, // Highest priority
    },
    // If you add more pages, list them here
    // {
    //   url: 'https://www.nrworkforce.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://www.nrworkforce.com/services',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://www.nrworkforce.com/contact',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ];
}
