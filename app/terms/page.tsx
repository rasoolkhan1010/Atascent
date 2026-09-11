import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = { title: 'Terms of Use', robots: { index: false, follow: true } };

export default function Page() { return <main className="legal-page"><Navbar/><section className="simple-hero"><span className="eyebrow">ATASCENT · TERMS OF USE</span><h1>Terms of Use</h1><p>This page is a draft for client and legal review. Atascent should confirm the final terms governing website use, service enquiries, intellectual property, disclaimers, liability and applicable UAE law before publication.</p></section></main>; }
