// utils/slug.js
export const slugify = s =>
  String(s).toLowerCase()
   .replace(/[^a-z0-9]+/g, '-')
   .replace(/-+/g, '-')
   .slice(0, 50)
   .replace(/^-|-$/g, '');