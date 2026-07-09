"use client";

import { FormEvent } from "react";
import { PremiumButton } from "@/components/ui";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Rotaract Website Inquiry");
    const message = String(form.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:anns.rotaract@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" aria-label="Name" placeholder="Name" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
        <input name="email" type="email" aria-label="Email" placeholder="Email" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
      </div>
      <input name="subject" aria-label="Subject" placeholder="Subject" className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
      <textarea name="message" aria-label="Message" placeholder="Message" rows={6} className="rounded-2xl border border-border-pink bg-white px-5 py-4 outline-primary-pink" />
      <PremiumButton type="submit">Send Message</PremiumButton>
    </form>
  );
}
