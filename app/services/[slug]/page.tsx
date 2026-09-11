import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import { getService, services } from '@/lib/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service | Atascent' };
  return {
    title: `${service.title} | Atascent`,
    description: service.short,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;

  return <main id="top" className="service-page">
    <Navbar />
    <section className="service-hero">
      <div className="service-hero-grid"></div>
      <div className="service-hero-inner">
        <Reveal>
          <a className="back-link" href="/#services"><ArrowLeft size={15}/> All services</a>
          <span className="eyebrow">ATASCENT · UAE BUSINESS SUPPORT</span>
          <div className="service-hero-number">{service.number}</div>
          <div className="service-hero-icon"><Icon/></div>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a className="gold-btn" href="/#contact">Discuss this service <ArrowRight/></a>
        </Reveal>
      </div>
    </section>

    <section className="service-detail section-light">
      <Reveal>
        <div className="service-detail-head">
          <div><span className="kicker">WHAT WE SUPPORT</span><h2>A clear approach to<br/><span>your requirement.</span></h2></div>
          <p>{service.short}</p>
        </div>
        <div className="service-detail-grid">
          <div className="service-detail-list">
            {service.bullets.map((bullet) => <div key={bullet}><CheckCircle2/><span>{bullet}</span></div>)}
          </div>
          <div className="service-detail-note">
            <span className="kicker">UAE CONTEXT</span>
            <h3>Professional support, without unnecessary complexity.</h3>
            <p>Every engagement starts with understanding your business, jurisdiction and requirement so the next step is clear.</p>
            <a className="dark-link" href="/#contact">Start an enquiry <ArrowUpRight/></a>
          </div>
        </div>
      </Reveal>
    </section>

    <section className="service-cta section-dark">
      <Reveal>
        <span className="kicker">READY WHEN YOU ARE</span>
        <h2>Let’s discuss<br/><em>your requirement.</em></h2>
        <p>Tell us about your business and what you need help with.</p>
        <a className="gold-btn" href="/#contact">Talk to an expert <ArrowRight/></a>
      </Reveal>
    </section>

    <footer className="footer service-footer">
      <div className="footer-bottom"><span>© 2026 Atascent. All rights reserved.</span><a href="/#services">Back to services <ArrowUpRight size={13}/></a><a href="/#contact">Contact Atascent <ArrowUpRight size={13}/></a></div>
    </footer>
  </main>;
}
