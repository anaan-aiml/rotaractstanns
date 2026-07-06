import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://rotaract-st-anns-template.example";

export const pageMeta = {
  home: {
    title: "Rotaract Club of St. Ann's | Service, Leadership, Fellowship",
    description:
      "A premium template website for the Rotaract Club of St. Ann's, designed for service projects, events, membership, leadership, and community impact."
  },
  about: {
    title: "About | Rotaract Club of St. Ann's",
    description: "Learn the placeholder history, vision, mission, values, and Rotaract overview for the club website template."
  },
  board: {
    title: "Board Members | Rotaract Club of St. Ann's",
    description: "Meet the placeholder executive board, committee chairs, and directors. Replace each profile with official member details."
  },
  events: {
    title: "Events | Rotaract Club of St. Ann's",
    description: "Explore upcoming and past placeholder events with editable dates, venues, descriptions, and registration calls to action."
  },
  projects: {
    title: "Projects | Rotaract Club of St. Ann's",
    description: "Discover community service, environment, education, health, and fundraising project placeholders with impact numbers."
  },
  gallery: {
    title: "Gallery | Rotaract Club of St. Ann's",
    description: "A premium filterable placeholder gallery for future club photos, videos, and event memories."
  },
  achievements: {
    title: "Achievements | Rotaract Club of St. Ann's",
    description: "Awards, milestones, recognition, and certificate placeholders for the club achievement archive."
  },
  membership: {
    title: "Membership | Rotaract Club of St. Ann's",
    description: "Membership benefits, eligibility, FAQs, and a polished application form for prospective Rotaractors."
  },
  contact: {
    title: "Contact | Rotaract Club of St. Ann's",
    description: "Contact form, social links, phone, email, and map placeholder for the Rotaract Club of St. Ann's."
  }
};
