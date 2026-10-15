// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Barbershop 26',
  role: 'where cuts meet style 💈',
  email: '',
  tagline: 'Good cuts. Great people. Neighborhood barbershop',
  description:
    'Come by Barbershop 26 in North Hollywood for a classic cut, a fresh fade, or just a good conversation',
  status: 'OPEN HOURS: Sunday - Thursday 10:00 AM - 8:00 PM. Friday 10:00 AM - 2:00 PM SAT CLOSED שבת',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/barbershop_26__/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
