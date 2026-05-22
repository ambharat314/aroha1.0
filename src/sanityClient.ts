import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'bv5mzv8s', // Your project ID from sanity.cli.ts
  dataset: 'production',
  apiVersion: '2023-05-03', // Use a recent date for the API version
  useCdn: true, // Use the edge CDN for fast fetching
});

// Helper function to generate image URLs from Sanity's image objects
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
