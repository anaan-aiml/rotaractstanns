import { IconType } from "react-icons";
import { FiAward, FiBookOpen, FiCalendar, FiHeart, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiTarget, FiTwitter, FiUsers, FiZap } from "react-icons/fi";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/board", label: "Board" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { value: 120, suffix: "+", label: "Service hours planned", icon: FiHeart },
  { value: 18, suffix: "+", label: "Template events", icon: FiCalendar },
  { value: 9, suffix: "+", label: "Impact themes", icon: FiTarget },
  { value: 35, suffix: "+", label: "Member slots", icon: FiUsers }
];

export const values = [
  { title: "Service", body: "Hands-on initiatives shaped around local needs and measurable outcomes.", icon: FiHeart },
  { title: "Leadership", body: "A platform for young leaders to practice ownership, empathy, and execution.", icon: FiZap },
  { title: "Fellowship", body: "A welcoming community built through collaboration, celebration, and shared purpose.", icon: FiUsers },
  { title: "Integrity", body: "Transparent planning, responsible stewardship, and respectful partnership.", icon: FiAward }
];

export const boardGroups = [
  {
    title: "Executive Board",
    members: [
      ["Member Name", "President", "Placeholder bio for the club president. Replace with official profile details and achievements."],
      ["Member Name", "Secretary", "Placeholder bio for the secretary. Add responsibilities, interests, and club contribution."],
      ["Member Name", "Treasurer", "Placeholder bio for the treasurer. Replace with finance and stewardship notes."]
    ]
  },
  {
    title: "Committee Chairs",
    members: [
      ["Member Name", "Community Service Chair", "Leads service drives and impact partnerships with warmth and discipline."],
      ["Member Name", "Professional Development Chair", "Creates leadership workshops, speaker sessions, and member growth programs."],
      ["Member Name", "Public Relations Chair", "Shapes campaign storytelling, social media presence, and event visibility."]
    ]
  },
  {
    title: "Directors",
    members: [
      ["Member Name", "Club Service Director", "Builds fellowship experiences and member engagement systems."],
      ["Member Name", "International Service Director", "Coordinates global themes, cultural exchange, and district collaboration."],
      ["Member Name", "Editor", "Maintains newsletters, reports, and campaign documentation."]
    ]
  }
];

export const events = [
  { title: "Pink Impact Orientation", date: "Replace date", venue: "Upload venue", type: "Upcoming", desc: "A polished introduction to Rotaract, service avenues, and member opportunities.", schemaDate: "2026-09-12" },
  { title: "Community Care Drive", date: "Replace date", venue: "Upload venue", type: "Upcoming", desc: "Placeholder event for a neighborhood support initiative with partner spaces.", schemaDate: "2026-10-04" },
  { title: "Leadership Circle", date: "Replace date", venue: "Upload venue", type: "Past", desc: "Placeholder speaker session for leadership, teamwork, and public service.", schemaDate: "2026-04-20" },
  { title: "Green Campus Day", date: "Replace date", venue: "Upload venue", type: "Past", desc: "Placeholder sustainability event for cleanup, awareness, and action.", schemaDate: "2026-02-16" }
];

export const projects = [
  { title: "Community Service", category: "Community", desc: "Editable placeholder for outreach, donation drives, and local partnerships.", impact: "300+ lives" },
  { title: "Environment", category: "Environment", desc: "Placeholder for cleanup drives, sustainability campaigns, and tree care.", impact: "500 saplings" },
  { title: "Education", category: "Education", desc: "Placeholder for tutoring, career guidance, and library support initiatives.", impact: "80 learners" },
  { title: "Health", category: "Health", desc: "Placeholder for awareness camps, wellness sessions, and screening drives.", impact: "12 camps" },
  { title: "Fundraising", category: "Fundraising", desc: "Placeholder for cause-led fundraisers and sponsor-supported programs.", impact: "5 campaigns" }
];

export const galleryItems = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  label: "Replace with Club Photo",
  category: ["Events", "Projects", "Fellowship", "Awards"][index % 4],
  tall: index % 3 === 0
}));

export const achievements = [
  { title: "District Recognition", body: "Placeholder for district-level recognition, citations, or special mentions." },
  { title: "Club Milestone", body: "Placeholder for charter day, membership milestones, service-hour milestones, or anniversaries." },
  { title: "Award Space", body: "Placeholder for future awards with certificate uploads and descriptions." }
];

export const socials: { icon: IconType; label: string; href: string }[] = [
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FiLinkedin, label: "LinkedIn", href: "#" },
  { icon: FiTwitter, label: "Twitter", href: "#" },
  { icon: FiMail, label: "Email", href: "mailto:replace@example.com" }
];

export const contactDetails = [
  { icon: FiMail, label: "replace@example.com" },
  { icon: FiMapPin, label: "Replace with official campus or meeting location" },
  { icon: FiBookOpen, label: "Rotaract template website. Official details pending." }
];
