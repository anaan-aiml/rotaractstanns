import { IconType } from "react-icons";
import { FiAward, FiCalendar, FiHeart, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiTarget, FiUsers, FiYoutube, FiZap } from "react-icons/fi";

export const registrationFormUrl = "https://forms.gle/rFtTo271Eohw5pVT8";

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
  { value: 35, suffix: "+", label: "Member slots open", icon: FiUsers }
];

export const values = [
  { title: "Service", body: "Hands-on initiatives shaped around local needs and measurable outcomes.", icon: FiHeart },
  { title: "Leadership", body: "A platform for young leaders to practice ownership, empathy, and execution.", icon: FiZap },
  { title: "Fellowship", body: "A welcoming community built through collaboration, celebration, and shared purpose.", icon: FiUsers },
  { title: "Integrity", body: "Transparent planning, responsible stewardship, and respectful partnership.", icon: FiAward }
];

export const boardGroups = [
  {
    title: "Executive Board Members",
    members: [
      {
        name: "Rtr. Syeda Hafsa Hussain",
        position: "President",
        bio: "Leads the club with vision, responsibility, and a strong commitment to service, fellowship, and member growth.",
        image: "/board/syeda-hafsa-hussain.png"
      },
      {
        name: "Rtr. Manaal",
        position: "Secretary",
        bio: "Supports smooth club coordination, documentation, communication, and the organized execution of club activities.",
        image: "/board/manaal.png"
      },
      {
        name: "Rtr. Syeda Husna Hussain",
        position: "Immediate Past President",
        bio: "Guides the board with continuity, experience, and support from the previous Rotaract year.",
        image: "/board/syeda-husna-hussain.png"
      },
      ["Member Name", "Vice President", "Assists the president in planning, coordination, and ensuring club activities run with purpose."],
      ["Member Name", "Joint Secretary", "Supports documentation, communication, records, and smooth follow-up across club activities."],
      ["Member Name", "Sergeant at Arms", "Maintains discipline, meeting decorum, and a respectful environment during club gatherings."],
      ["Member Name", "Treasurer", "Manages club finances, budgeting, and responsible stewardship of funds."]
    ]
  }
];

export const events = [
  { title: "Azure Impact Orientation", date: "Replace date", venue: "Upload venue", type: "Upcoming", desc: "A polished introduction to Rotaract, service avenues, and member opportunities.", schemaDate: "2026-09-12" },
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

export const featuredAvenues = [
  {
    title: "International Relations",
    desc: "Connect with Rotaract communities beyond campus through cultural exchange and district collaboration. Members learn how service can create friendships across clubs, cities, and countries."
  },
  {
    title: "Community Service",
    desc: "Work on meaningful initiatives that support real local needs through drives, awareness campaigns, and outreach. This avenue is where empathy turns into practical action."
  },
  {
    title: "Club Administration",
    desc: "Understand how a strong club is planned, documented, coordinated, and run smoothly. Members can learn meeting flow, reporting, teamwork, and behind-the-scenes leadership."
  },
  {
    title: "Professional Development",
    desc: "Build confidence through sessions, speaker interactions, communication practice, and leadership tasks. It helps members grow personally while preparing for future opportunities."
  }
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
  { icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/rotaract_st.anns" },
  { icon: FiYoutube, label: "YouTube", href: "http://www.youtube.com/@rotaractclubofstanns" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rotaract-club-of-st-ann-s-206381384?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: FiMail, label: "Email", href: "mailto:anns.rotaract@gmail.com" }
];

export const contactDetails = [
  { icon: FiMail, label: "anns.rotaract@gmail.com" },
  { icon: FiMapPin, label: "St. Ann's College for Women" }
];
