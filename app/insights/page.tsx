import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Atascent insights covering accounting, audit, tax, VAT, compliance and business support in the UAE.',
  alternates: { canonical: '/insights' },
};

const topics = [
  ['01', 'Corporate Tax', 'Practical guidance and updates for businesses navigating UAE Corporate Tax requirements.'],
  ['02', 'VAT', 'Useful perspectives on VAT registration, exemption-related requirements and filing.'],
  ['03', 'Accounting', 'Clear thinking around financial records, reporting and ongoing accounting support.'],
  ['04', 'Audit & Compliance', 'Professional perspectives on audit, internal controls and compliance requirements.'],
];

export default function InsightsPage() {
  return <main className="simple-page"><Navbar/><section className="simple-hero"><Reveal><span className="eyebrow">ATASCENT · INSIGHTS</span><h1>Useful thinking<br/><em>for UAE business.</em></h1><p>We are preparing a practical library of accounting, tax, audit and compliance insights for businesses operating in the UAE.</p></Reveal></section><section className="insight-topics section-light"><Reveal><div className="simple-head"><span className="kicker">WHAT WE COVER</span><h2>Topics that matter<br/><span>to your business.</span></h2></div><div className="topic-grid">{topics.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><div className="coming">ARTICLES COMING SOON <ArrowUpRight/></div></article>)}</div></Reveal></section><section className="service-cta section-dark"><Reveal><span className="kicker">NEED AN ANSWER NOW?</span><h2>Let’s discuss<br/><em>your requirement.</em></h2><p>Talk to the Atascent team about your accounting, tax, audit or business support needs.</p><a className="gold-btn" href="/#contact">Talk to an expert <ArrowUpRight/></a></Reveal></section></main>;
}
