// Text shared across pages: company facts, navigation, services and history.

export const SITE = {
  url: "https://73rdstreet.com",
  name: "73rd Street Associates",
  legalName: "73rd Street Associates, Inc.",
  title: "73rd Street Associates - Technology & Software Development Services",
  description:
    "Founded in 1985, 73rd Street Associates provides technology and software development services specializing in social media integration for content publishing and management.",
  email: "info@73rdstreet.com",
  privacyEmail: "peter@peterkellner.net",
  phone: "+1-408-234-1385",
  phoneHref: "tel:+14082341385",
  location: "Borrego Springs, CA",
  principal: "Peter Kellner",
  principalSite: "https://peterkellner.net",
  // Fixed date for the legal pages; change it whenever their text changes.
  legalUpdated: "October 8, 2026",
};

export type Color = "teal" | "violet" | "berry" | "gold";

export const NAV = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about/", label: "About", key: "about" },
  { href: "/services/", label: "Services", key: "services" },
  { href: "/contact/", label: "Contact", key: "contact" },
] as const;

export const LEGAL = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/data-deletion/", label: "Data Deletion" },
  { href: "/code-of-conduct/", label: "Code of Conduct" },
];

export const WHY: { color: Color; icon: string; title: string; text: string }[] = [
  {
    color: "teal",
    icon: "shield",
    title: "Data Security",
    text: "All data traffic encrypted with TLS, stored data encrypted at rest, and access limited to authorized staff using MFA.",
  },
  {
    color: "violet",
    icon: "building",
    title: "Established Business",
    text: "Over 40 years of experience providing professional technology services and custom software solutions.",
  },
  {
    color: "berry",
    icon: "plug",
    title: "API Integration",
    text: "Expert integration with social media APIs for automated content publishing and management.",
  },
];

export const CAPABILITIES: { color: Color; title: string; items: string[] }[] = [
  {
    color: "teal",
    title: "Content Publishing",
    items: [
      "Automated photo and video publishing",
      "Content scheduling and management",
      "Multi-platform distribution",
    ],
  },
  {
    color: "violet",
    title: "Analytics & Insights",
    items: [
      "Performance tracking and reporting",
      "Engagement metrics and analysis",
      "Real-time monitoring and alerts",
    ],
  },
];

export const SERVICES: { color: Color; icon: string; title: string; text: string; items: string[] }[] = [
  {
    color: "teal",
    icon: "share",
    title: "Social Media Integration",
    text: "Complete integration with social media platform APIs, built to each platform's policies.",
    items: [
      "Photo and video publishing with captions",
      "Content scheduling and automation",
      "Analytics and insights tracking",
      "Comment and engagement management",
    ],
  },
  {
    color: "violet",
    icon: "code",
    title: "Custom Application Development",
    text: "Tailored software solutions built to meet your specific business requirements.",
    items: [
      "Web application development",
      "API design and implementation",
      "Database design and optimization",
      "Cloud deployment and scaling",
    ],
  },
  {
    color: "berry",
    icon: "send",
    title: "Content Publishing Automation",
    text: "Streamline your content workflow with automated publishing solutions.",
    items: [
      "Bulk content uploading",
      "Cross-platform publishing",
      "Scheduled posting campaigns",
      "Content performance tracking",
    ],
  },
  {
    color: "gold",
    icon: "chart",
    title: "Analytics & Reporting",
    text: "Comprehensive analytics to understand your social media performance.",
    items: [
      "Engagement metrics tracking",
      "Custom dashboard creation",
      "Performance trend analysis",
      "Automated reporting",
    ],
  },
];

export const USE_CASES = [
  {
    title: "Content Distribution",
    text: "Automatically distribute content across multiple platforms, perfect for businesses and content creators.",
  },
  {
    title: "Digital Asset Management",
    text: "Organize and manage your digital assets with metadata, version control, and automated workflows.",
  },
  {
    title: "Email Campaign Automation",
    text: "Schedule and automate email marketing campaigns with personalized content, ensuring consistent communication with your audience.",
  },
  {
    title: "Analytics Dashboard",
    text: "Monitor performance metrics and KPIs from a centralized dashboard, enabling data-driven decision making.",
  },
];

export const TIMELINE: { when: string; color: Color; title: string; text: string }[] = [
  {
    when: "Today",
    color: "teal",
    title: "Integration and consulting",
    text: "Social media platform integration for content publishing, analytics and management, plus custom application development and technical consulting.",
  },
  {
    when: "2000",
    color: "berry",
    title: "Healthcare software business sold",
    text: "A large insurance company purchased the assets of the healthcare software business. The corporation continued as a technology and consulting company.",
  },
  {
    when: "1991",
    color: "violet",
    title: "Incorporated in California",
    text: "73rd Street Associates, Inc. became a California corporation.",
  },
  {
    when: "1985",
    color: "gold",
    title: "Founded",
    text: "Clinic scheduling, insurance company management and a turnkey physician office system, eventually serving 500+ customers nationwide.",
  },
];

export const BUILT = [
  "University clinic scheduling and a turnkey physician office management system.",
  "Electronic billing that aggregated insurance claims, sent them securely to a central location and routed them to the right carriers.",
  "A two-year project replacing the online processing of a Florida insurance company with $200 million in annual revenue: a three-tier system running every business process, from adjudicating claims and billing groups to paying commission-based brokers.",
];

export const MISSION: { color: Color; title: string; text: string }[] = [
  {
    color: "teal",
    title: "Privacy First",
    text: "We only use client data to perform requested services and never sell or repurpose it for other uses.",
  },
  {
    color: "violet",
    title: "Security Excellence",
    text: "All data traffic is encrypted with TLS, stored data is encrypted at rest, and access is limited to authorized staff using MFA.",
  },
  {
    color: "berry",
    title: "Client Success",
    text: "We're committed to delivering solutions that meet and exceed our clients' expectations.",
  },
];
