import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = { title: 'Privacy Policy', robots: { index: false, follow: true } };

export default function Page() { return <main className="legal-page"><Navbar/><section className="simple-hero"><span className="eyebrow">ATASCENT · PRIVACY POLICY</span><h1>Privacy Policy</h1><p>This page is a draft for client and legal review. Atascent should confirm the final privacy notice, data controller details, retention periods, lawful bases, third-party processors and UAE-specific requirements before publication.</p></section></main>; }
