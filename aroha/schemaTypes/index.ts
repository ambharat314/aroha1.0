import { defineField, defineType } from 'sanity'

// LANDING PAGE
const landing = defineType({
  name: 'landing',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroSubheading', title: 'Hero Subheading', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
  ]
})

// ABOUT PAGE
const about = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio / Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
  ]
})

// OFFERINGS
const offering = defineType({
  name: 'offering',
  title: 'Offerings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'link', title: 'Link (e.g. /home/offerings/individuals)', type: 'string' }),
    defineField({ name: 'color', title: 'Color Hex Code', type: 'string' }),
    defineField({ name: 'subsections', title: 'Subsections', type: 'array', of: [{ type: 'string' }] }),
  ]
})

// BLOG
const blog = defineType({
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
  ]
})

// EVENTS
const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Event Image', type: 'image', options: { hotspot: true } }),
  ]
})

// GALLERY
const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Image Title', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
  ]
})

// CONTACT
const contact = defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'mapLink', title: 'Google Maps Link', type: 'url' }),
  ]
})

export const schemaTypes = [landing, about, offering, blog, event, gallery, contact]