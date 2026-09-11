import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atascent.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Atascent | UAE Business Support & Financial Solutions', template: '%s | Atascent' },
  description: 'Expert accounting, audit, tax, VAT, ESR, consultancy, HR and IT support for businesses operating in the UAE.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Atascent',
    title: 'Atascent | UAE Business Support & Financial Solutions',
    description: 'Expert accounting, audit, tax, VAT, ESR, consultancy, HR and IT support for businesses operating in the UAE.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Atascent — UAE Business Support & Financial Solutions' }],
  },
  twitter: { card: 'summary_large_image', title: 'Atascent | UAE Business Support & Financial Solutions', description: 'Expert business support and financial solutions in the UAE.', images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Atascent',
    url: siteUrl,
    email: 'info@atascent.com',
    description: 'Expert business support and financial solutions in the UAE.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sharjah',
      addressCountry: 'AE',
      streetAddress: 'Sharjah Publishing City Free Zone',
    },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    serviceType: ['Accounting Services', 'Internal Audit', 'External Audit', 'Corporate Tax', 'VAT Services', 'ESR Compliance', 'Management Consultancy', 'HR & Admin Support', 'IT Support Services'],
  };

  return <html lang="en" suppressHydrationWarning><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</body></html>;
}
