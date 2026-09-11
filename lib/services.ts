import { FileCheck2, Landmark, ShieldCheck, Users, type LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'internal-audit', number: '01', title: 'Internal Audit',
    short: 'Strengthen internal controls, processes and operational confidence.',
    description: 'Internal audit support designed to help businesses review controls, processes and operational practices with greater clarity.',
    icon: FileCheck2,
    bullets: ['Internal control review', 'Process and operational assessment', 'Risk and control observations', 'Practical recommendations'],
  },
  {
    slug: 'external-audit', number: '02', title: 'External Audit',
    short: 'Professional external audit support across Mainland, DMCC and other Free Zones.',
    description: 'External audit support for businesses operating across UAE jurisdictions, including Mainland, DMCC and other Free Zones.',
    icon: ShieldCheck,
    bullets: ['External audit support', 'Financial statement review support', 'Mainland and Free Zone requirements', 'Clear audit coordination'],
  },
  {
    slug: 'accounting-services', number: '03', title: 'Accounting Services',
    short: 'Monthly, quarterly and yearly accounting support for UAE businesses.',
    description: 'Ongoing accounting support structured around the reporting and operational needs of your business.',
    icon: Landmark,
    bullets: ['Monthly accounting support', 'Quarterly accounting support', 'Yearly accounting support', 'Organized financial records'],
  },
  {
    slug: 'corporate-tax', number: '04', title: 'Corporate Tax',
    short: 'Registration and filing support for UAE Corporate Tax requirements.',
    description: 'Support with UAE Corporate Tax registration and filing requirements, helping businesses stay organized around their obligations.',
    icon: FileCheck2,
    bullets: ['Corporate Tax registration support', 'Corporate Tax filing support', 'Requirement review', 'Compliance-focused documentation'],
  },
  {
    slug: 'vat-services', number: '05', title: 'VAT Services',
    short: 'VAT registration, exemption and filing support.',
    description: 'Practical VAT support covering registration, exemption-related requirements and filing needs for UAE businesses.',
    icon: FileCheck2,
    bullets: ['VAT registration support', 'VAT exemption support', 'VAT filing support', 'Compliance documentation'],
  },
  {
    slug: 'esr-compliance', number: '06', title: 'ESR Compliance',
    short: 'Economic Substance Requirement assessment and notification support.',
    description: 'Economic Substance Requirement support focused on assessment and notification requirements relevant to your business.',
    icon: ShieldCheck,
    bullets: ['ESR assessment', 'Economic Substance notification support', 'Requirement review', 'Compliance documentation'],
  },
  {
    slug: 'management-consultancy', number: '07', title: 'Management Consultancy',
    short: 'Tailored guidance aligned with your business and financial goals.',
    description: 'Management consultancy support tailored to the practical business and financial needs of your organization.',
    icon: Users,
    bullets: ['Business requirement assessment', 'Management guidance', 'Financial and operational perspective', 'Tailored recommendations'],
  },
  {
    slug: 'hr-admin-support', number: '08', title: 'HR & Admin Support',
    short: 'Practical administrative and HR support for day-to-day operations.',
    description: 'Practical HR and administrative support that helps businesses manage recurring operational requirements.',
    icon: Users,
    bullets: ['Administrative support', 'HR support', 'Recurring operational assistance', 'Documentation support'],
  },
  {
    slug: 'it-support-services', number: '09', title: 'IT Support Services',
    short: 'Reliable technology support alongside your business operations.',
    description: 'IT support services to help businesses handle day-to-day technology requirements alongside their core operations.',
    icon: Landmark,
    bullets: ['Day-to-day IT support', 'Business technology assistance', 'Operational technology support', 'Requirement-based assistance'],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
