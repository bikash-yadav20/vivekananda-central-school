/* ==========================================================
   CONTACT HERO
========================================================== */

export const contactHero = {
  badge: "Get In Touch",

  title: "We're Here to Help You",

  description:
    "Have questions about admissions, academics, school life, or anything else? Our team is ready to assist you. Reach out through phone, WhatsApp, email, or visit our campus.",

  image: "/images/hero/contact_hero.webp",

  primaryButton: {
    label: "Send Inquiry",
    href: "#contact-form",
  },

  secondaryButton: {
    label: "WhatsApp Us",
    href: "#whatsapp",
  },
};

/* ==========================================================
   CONTACT DETAILS
========================================================== */

export const contactDetails = [
  {
    title: "Phone",
    value: "0333 6302249",
    href: "tel:+923336302249",
    icon: "Phone",
  },

  {
    title: "WhatsApp",
    value: "0333 6302249",
    href: "https://wa.me/+923336302249",
    icon: "MessageCircle",
  },

  {
    title: "Email",
    value: "alpineschoolhnd@gmail.com",
    href: "mailto:alpineschoolhnd@gmail.com",
    icon: "Mail",
  },

  {
    title: "Address",
    value: "NH 15, North Lakhimpur, Assam 787056, India",
    href: "https://maps.google.com",
    icon: "MapPin",
  },
];

/* ==========================================================
   OFFICE HOURS
========================================================== */

export const officeHours = [
  {
    day: "Monday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Tuesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Wednesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Thursday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Friday",
    time: "8:00 AM – 12:30 PM",
  },
  {
    day: "Saturday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

/* ==========================================================
   SOCIAL MEDIA
========================================================== */

export const socialLinks = [
  {
    name: "Facebook",
    href: "",
    icon: "Facebook",
  },

  {
    name: "Instagram",
    href: "",
    icon: "Instagram",
  },

  {
    name: "YouTube",
    href: "",
    icon: "Youtube",
  },

  {
    name: "LinkedIn",
    href: "",
    icon: "Linkedin",
  },
];

/* ==========================================================
   WHATSAPP SETTINGS
========================================================== */

const phone = "9435321879";

const message =
  "Hello! I would like to inquire about admissions at Vivekananada Centra School.";

export const whatsappConfig = {
  phone,
  message,
  link: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
};