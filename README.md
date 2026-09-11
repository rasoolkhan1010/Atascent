# Atascent — Professional UAE Business Services Website

Premium marketing website for Atascent, focused on UAE accounting, audit, tax, compliance and business support.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Next.js.

## What's included

- Premium responsive homepage
- Mobile navigation
- Individual detail pages for all 9 supplied services
- SEO titles/descriptions for service pages
- Conversion-focused enquiry form
- Simple FormSubmit email enquiry delivery (no custom email backend)
- Honeypot spam field
- Responsive layouts and reduced-motion support
- Existing Atascent logo assets

## Contact form setup

The contact form uses FormSubmit so the site does not need a custom email backend, Resend account, API key, or DNS email setup. FormSubmit accepts AJAX submissions and forwards them to the email address configured for the form. urlFormSubmit documentationhttps://formsubmit.co/documentation

### Test it locally first

1. Copy `.env.example` to `.env.local`.
2. Put **your own email address** in `NEXT_PUBLIC_FORM_EMAIL`.
3. Restart the dev server after changing `.env.local`.
4. Open the local Atascent site and submit the contact form.
5. FormSubmit will send an activation/confirmation email the first time. Confirm it. FormSubmit says submissions are retained while the form is waiting for confirmation. urlFormSubmit setup documentationhttps://formsubmit.co/
6. Submit the form again. The enquiry should arrive in your inbox.

Example `.env.local`:

```env
NEXT_PUBLIC_FORM_EMAIL=your-email@gmail.com
```

For the client handoff, change that one value to `info@atascent.com`, submit once from the client environment, and confirm the activation email. No Resend API key is required.

The form keeps the visitor's email as the reply-to field so the recipient can reply directly to the enquiry.

## Before production launch

Verify with the client:

- Official phone / WhatsApp number
- Business hours
- Social media URLs
- Legal company/registration wording
- Privacy, terms and cookie policy text
- Any certifications, testimonials, client logos or statistics
- Licensed/owned photography and image usage rights
- Final domain name and DNS

No unsupported client statistics, testimonials, certifications or awards are included.

## Visual assets

Some imagery in the concept uses public web image references. Replace those backgrounds with licensed client-owned photography before production launch.


## Production finishing in V4
- Added sitemap, robots, favicon and Open Graph image generation.
- Added Insights landing page and draft legal pages marked for client/legal review.
- Added structured data for Atascent as a professional service.
- Contact success state now reflects actual email delivery rather than demo capture.
- Set `NEXT_PUBLIC_SITE_URL` in production to the real deployed domain.
- Configure `NEXT_PUBLIC_FORM_EMAIL` with the final enquiry inbox before enabling enquiries.
- The contact endpoint still needs production-grade rate limiting/abuse protection if traffic volume warrants it.
