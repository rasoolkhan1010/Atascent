'use client';
import { FormEvent, useState } from 'react';
import { ArrowRight, Check, LockKeyhole } from 'lucide-react';

const services=['Accounting','Internal Audit','External Audit','Corporate Tax','VAT','ESR','Management Consultancy','HR & Admin','IT Support','Not sure'];

export default function ContactForm(){
  const [submitted,setSubmitted]=useState(false);
  const [error,setError]=useState('');
  const [sending,setSending]=useState(false);

  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setError('');
    setSending(true);

    const form = e.currentTarget;
    const endpointEmail = process.env.NEXT_PUBLIC_FORM_EMAIL?.trim();

    if (!endpointEmail || endpointEmail === 'YOUR_EMAIL_HERE') {
      setError('Email delivery is not configured yet. Add your email to NEXT_PUBLIC_FORM_EMAIL in .env.local and restart the dev server.');
      setSending(false);
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(endpointEmail)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Unable to send enquiry. Please try again.');
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send enquiry right now. Please try again.');
    } finally {
      setSending(false);
    }
  }

  if(submitted) return <div className="form-success"><span className="success-icon"><Check/></span><span className="form-step">ENQUIRY RECEIVED</span><h3>Thank you. We’ll take it from here.</h3><p>Your enquiry has been sent to the Atascent team. We’ll review your requirement and respond using the contact details you provided.</p><button className="outline-btn" type="button" onClick={()=>setSubmitted(false)}>Send another enquiry <ArrowRight/></button></div>;

  return <form className="business-form" onSubmit={handleSubmit}>
    <div className="form-top"><span>1. YOUR NEED</span><span>2. BUSINESS</span><span>3. CONTACT</span><span>4. MESSAGE</span></div>
    <div className="form-heading"><span className="form-step">SEND AN ENQUIRY</span><h3>Tell us what your business needs.</h3><p>Give us a little context and our team can point you toward the right service.</p></div>
    <div className="form-grid">
      <input className="honeypot" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New Atascent website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      <label>Full name *<input name="name" placeholder="Your full name" autoComplete="name" required /></label>
      <label>Company name *<input name="company" placeholder="Your company" required /></label>
      <label>Business email *<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
      <label>Phone / WhatsApp<input name="phone" placeholder="+971 …" autoComplete="tel" /></label>
      <label>Service of interest *<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(s=><option key={s}>{s}</option>)}</select></label>
      <label>UAE jurisdiction<select name="jurisdiction" defaultValue=""><option value="">Select jurisdiction</option><option>Mainland</option><option>DMCC</option><option>Free Zone</option><option>Other / International</option></select></label>
      <label className="full">How can we help?<textarea name="message" rows={4} placeholder="Tell us briefly about your requirement…" /></label>
    </div>
    {error && <div className="form-error" role="alert">{error}</div>}
    <div className="form-submit"><span><LockKeyhole size={14}/> Your information is treated confidentially.</span><button className="gold-btn" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send enquiry'} {!sending && <ArrowRight/>}</button></div>
  </form>
}
