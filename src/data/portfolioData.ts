export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
}

export interface AchievementItem {
  period: string;
  title: string;
  event: string;
}

export interface ToolItem {
  code: string;
  name: string;
  category: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface ProjectRole {
  index: string;
  kicker: string;
  title: string;
  summary: string;
  category: string;
  period: string;
  organization: string;
  highlights: string[];
  deliverables: string[];
}

export const PROFILE = {
  name: 'Kanaya Dirahayu',
  shortName: 'Naya',
  heroBio:
    'An adaptive Informatics Engineering student with a strong leadership track record. Experienced in organizational administration, event planning, and public speaking—turning complex plans into structured execution.',
  aboutHeading: 'Hello,\nI’m Naya!',
  aboutParagraphs: [
    'I am an S1 Informatics Engineering student at Institut Teknologi PLN with a strong foundation in organizational leadership, administration, and public communication.',
    'Previously serving as General Secretary of MPK at SMAN 1 Padang Panjang and Secretary 1 of Forum Anak Kota Padang Panjang, I thrive at the intersection of structured execution, event coordination, competitive debate, and modern technology.',
  ],
  location: 'Duri Kosambi, Cengkareng, Jakarta Barat',
  email: 'dirahayukanaya@gmail.com',
  phoneDisplay: '+62 882-7923-5066',
  phoneHref: 'tel:+6288279235066',
  whatsappHref: 'https://wa.me/6288279235066',
  linkedinLabel: 'linkedin.com/in/kanaya-dirahayu',
  linkedinShort: '/in/kanaya-dirahayu',
  linkedinHref: 'https://www.linkedin.com/in/kanaya-dirahayu-b144a5434',
  instagramHandle: '@kny.drahayu',
  instagramHref: 'https://instagram.com/kny.drahayu',
  heroPortraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB0-TQh7dxaE_evxiXjop1N5aF48mlcc7y6AldzmUGPsPVi5aMUsFHrvRrlkD6DUCz_ZxSZEQAVfCMtyj4MfsTKd0-bkA_rYO_0OX90Z4ed5h7mM4OF_lPKrQjCaMsrEzNNqM8IEFocLvQaZNL3v7YLZUi_FqB700C9_ns1Pa67tFEOpEk-Hpgv2HCQUl-1_JuMnb0JU9U4BFILct_iedqEg_0rckk7ZziqO-Mey-o_siDve_r6T8Trrw',
  heroPortraitAlt:
    'Editorial studio portrait of Kanaya Dirahayu wearing smart-casual dark green and cream attire with warm natural side lighting.',
  aboutPortraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDcs0vK2KBUr3YtYsnBw2vEzX26DLfUEgQPWbJH2HhL8xyHyqmZjD0LcjoQItdbfMoMxYyMrNL5uFOhUL3J-bR01E2S_y9Bpd1pZDIJw8Hwb4YVOIFhkzjTPA0Mvx38iBTel-8eiArHcP-Bm5poklxyL77hSNvs7tI39dYT8z584Z_lzGQIhVTGCVMJAh72xIDZksjx349MAVpRqG-y9rLwWHBwp0de3OVWgUvCHXaRMQhA2VKpYAqLug',
  aboutPortraitAlt:
    'Editorial candid portrait of Kanaya Dirahayu smiling warmly in a dark olive blazer against a warm archival cream backdrop.',
};

export const EDUCATION: EducationItem[] = [
  {
    period: '2026 – Now',
    institution: 'Institut Teknologi PLN',
    degree: 'S1 Teknik Informatika',
  },
  {
    period: '2023 – 2026',
    institution: 'SMAN 1 Padang Panjang',
    degree: 'High School Diploma (Avg. Score: 92.59 / 100)',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2025',
    role: 'Event Division Coordinator',
    organization: 'Batik Birru 14th',
  },
  {
    period: '2024 – 2025',
    role: 'General Secretary',
    organization: 'MPK SMAN 1 Padang Panjang',
  },
  {
    period: '2023 – 2024',
    role: 'Secretary 1',
    organization: 'Forum Anak Kota Padang Panjang',
  },
  {
    period: '2023 – 2024',
    role: 'Public Relations & Official MC',
    organization: 'OSIS SMAN 1 Padang Panjang',
  },
];

export const CHARACTER_TAGS: string[] = [
  '#Leadership',
  '#Attention-to-detail',
  '#Problem-solving',
  '#Teamwork',
  '#Time-management',
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    period: '2025 / 2026',
    title: '2nd Place Debate Competition',
    event: 'Gebyar Bahasa Internasional, UKM-BKM UIN Muhammad Yunus',
  },
  {
    period: '2025 / 2026',
    title: '2nd Place Debate Competition',
    event: 'Andalas Legislative Fest',
  },
];

export const TOOLS: ToolItem[] = [
  { code: 'W', name: 'Microsoft Word', category: 'Documentation' },
  { code: 'X', name: 'Microsoft Excel', category: 'Spreadsheets' },
  { code: 'P', name: 'Microsoft PowerPoint', category: 'Presentations' },
  { code: 'G', name: 'Google Workspace', category: 'Collaboration' },
  { code: 'Cv', name: 'Canva', category: 'Visual Design' },
  { code: 'WA', name: 'WhatsApp Business', category: 'Communication' },
];

export const DOMAIN_SKILLS: string[] = [
  'Event Planning & Rundown',
  'Official Correspondence & Archiving',
  'Public Speaking & MC',
  'Debate & Negotiation',
  'Informatics & AI Automation',
];

export const SKILL_PILLS: string[] = [
  'Public Relations',
  'Proposal & LPJ Writing',
  'Critical Thinking',
  'Negotiation',
  'Event Operations',
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Indonesian', proficiency: 'Native' },
  { name: 'English', proficiency: 'Intermediate / Debate Proficient' },
  { name: 'Minang', proficiency: 'Native' },
];

export const SELECTED_PROJECTS: ProjectRole[] = [
  {
    index: '01',
    kicker: '2025 · EVENT COORDINATOR',
    title: 'Batik Birru 14th',
    summary:
      'Led end-to-end event division operations, coordinating cross-functional teams, stage rundowns, and stakeholder logistics for a flagship student cultural festival.',
    category: 'Event Operations',
    period: '2025',
    organization: 'SMAN 1 Padang Panjang',
    highlights: [
      'Directed cross-division stage timing, cue sheets, and live show-calling from pre-event rehearsal through closing ceremony.',
      'Coordinated schedules with external performers, guest speakers, and school stakeholders to keep zero critical delays.',
      'Prepared contingency plans and rapid-response workflows for real-time venue adjustments.',
    ],
    deliverables: ['Master Event Rundown', 'Division SOPs', 'Stage Cue Matrix'],
  },
  {
    index: '02',
    kicker: '2024–2025 · GENERAL SECRETARY',
    title: 'MPK SMAN 1 Padang Panjang',
    summary:
      'Managed official correspondence, archival systems, proposal & LPJ documentation, and executive board governance across student legislative programs.',
    category: 'Administration',
    period: '2024 – 2025',
    organization: 'Majelis Perwakilan Kelas (MPK)',
    highlights: [
      'Standardized official letter numbering, meeting minutes, and digital archive indexing for legislative sessions.',
      'Reviewed and finalized organizational proposals and accountability reports (LPJ) for multi-commission initiatives.',
      'Facilitated executive board alignment and legislative oversight reporting.',
    ],
    deliverables: ['Digital Correspondence Archive', 'Proposal & LPJ Templates', 'Session Minutes'],
  },
  {
    index: '03',
    kicker: '2023–2024 · PR & OFFICIAL MC',
    title: 'OSIS & Forum Anak',
    summary:
      'Served as official Master of Ceremonies and public relations liaison, representing youth initiatives and moderating formal institutional forums.',
    category: 'Public Speaking',
    period: '2023 – 2024',
    organization: 'OSIS SMAN 1 & Forum Anak Kota Padang Panjang',
    highlights: [
      'Anchored formal school assemblies, city-level youth dialogues, and institutional ceremonies as Official MC.',
      'Drafted secretariat documentation and coordinated municipal communication as Secretary 1 of Forum Anak Kota Padang Panjang.',
      'Built external partnership outreach and clear public communication channels.',
    ],
    deliverables: ['MC Cue Scripts', 'Institutional PR Briefs', 'Municipal Youth Records'],
  },
];
