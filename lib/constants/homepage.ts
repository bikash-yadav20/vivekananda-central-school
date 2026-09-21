import {
  CalendarDays,
  Newspaper,
  Sparkles,
  Trophy,
} from "lucide-react";

export const heroSlides = [
  {
    badge: "Admissions Open 2026–27",
    title: "Vivekananda Central School",
    subtitle: "Where Excellence Meets Future-Ready Learning",
    description:
      "A premium learning environment focused on academics, character building, STEM, robotics, AI, and digital skills.",
    image: "/images/hero/home_hero_1.jpeg",
    primaryCta: {
      label: "Apply Now",
      href: "/admissions",
    },
    secondaryCta: {
      label: "Explore School",
      href: "/gallery",
    },
  },
  {
    badge: "Modern Education",
    title: "Building Confident Future Leaders",
    subtitle: "Academic Excellence With Innovation",
    description:
      "Our students learn through modern classrooms, skilled teachers, practical projects, competitions, and real-world exposure.",
    image: "/images/hero/home_hero_2.jpg",
    primaryCta: {
      label: "View Academics",
      href: "/academics",
    },
    secondaryCta: {
      label: "Meet Faculty",
      href: "/faculty",
    },
  },
  
  {
    badge: "Academics • Character • Community",
    title: "Nurturing Mind, Body, and Spirit",
    subtitle: "A Foundation for Lifelong Success",
    description:
      "At Vivekananda Central School , we combine strong academic standards with sports, arts, and value-based education to help every child reach their full potential.",
    image: "/images/hero/home_hero_3.jpg",
    primaryCta: {
      label: "Explore Our Curriculum",
      href: "/academics",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
  },
];

export const statsData = [
  {
    iconName: "users",
    value: 200,
    suffix: "+",
    label: "Students",
    description: "Active learners across all academic levels.",
  },
  {
    iconName: "graduation",
    value: 35,
    suffix: "+",
    label: "Faculty Members",
    description: "Qualified teachers and academic mentors.",
  },
  {
    iconName: "book",
    value: 6,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving education with dedication.",
  },
  {
    iconName: "award",
    value: 20,
    suffix: "+",
    label: "Awards Won",
    description: "Academic, sports, STEM, and IT achievements.",
  },
];

export const principalMessage = {
  name: "Principal Vivekananda Central School",
  designation: "Principal",
  photo: "/images/faculty/principal.png",
  welcome:
    "Welcome to Vivekananda Central School, a place where academic excellence, discipline, creativity, and modern learning come together to shape confident young minds.",
  vision:
    "Our vision is to prepare students not only for examinations, but for life — empowering them with strong values, communication skills, technology awareness, and leadership confidence.",
  quote:
    "Education is not only about knowledge; it is about building character, confidence, and a brighter future.",
  cta: {
    label: "Learn More About Us",
    href: "/about",
  },
};

export const testimonialsData = [
  {
    name: "Ajit Konwar",
    role: "Parent",
    className: "Father of Class Nursery Student",
    message:
      "I’m very happy with my children’s experience at Vivekananda Central School. The caring teachers and supportive staff provide quality education while fostering strong character and values.",
    rating: 5,
    image: "/images/gallery/Review_1.webp",
  },
  {
    name: "Ajit Das",
    role: "Parent",
    className: "Father of Class 1 Student",
    message:
      "VCS provides a perfect balance between academics and character building. The regular updates from teachers and focus on discipline give parents great confidence.",
    rating: 5,
    image: "/images/gallery/Review_2.webp",
  },
  {
    name: "Hiya Rizwan",
    role: "Student",
    className: "Class 7 Student",
    message:
      "My experience at Vikananda has been wonderful. The teachers make lessons interesting, encourage participation, and help students prepare confidently for exams and future challenges.",
    rating: 5,
    image: "/images/gallery/Review_3.webp",
  },
  {
    name: "Sufyan Sohail",
    role: "Parent",
    className: "Father of Class Nursery Student",
    message:
      "What I appreciate most about VCS is the attention given to every student. The learning environment is friendly, safe, and encourages children to achieve their best.",
    rating: 5,
    image: "/images/gallery/Review_4.webp",
  },
  {
    name: "Chaya Chetia",
    role: "Student",
    className: "Class 7 Student",
    message:
      "Vivekananda Central School has helped me become more confident through competitions, activities, and guidance from my teachers. I enjoy learning in such a positive environment.",
    rating: 5,
    image: "/images/gallery/Review_5.webp",
  },
];

export const ctaData = {
  badge: "Start Your Journey",
  title: "Give Your Child a Future-Ready Education",
  description:
    "Join Vivekananda Central School for a quality education that balances academic excellence, ethical values, critical thinking, and essential life skills.",
  actions: [
    {
      label: "Apply for Admission",
      href: "/admissions",
      iconName: Sparkles,
    },
    {
      label: "Contact School",
      href: "/contact",
      iconName: CalendarDays,
    },
    {
      label: "Explore Campus",
      href: "/gallery",
      iconName: Trophy,
    },
  ],
};

export const homepageSections = [
  {
    iconName: CalendarDays,
    title: "Latest Events",
    href: "/events",
  },
  {
    iconName: Newspaper,
    title: "News Updates",
    href: "/news",
  },
  {
    iconName: Trophy,
    title: "Achievements",
    href: "/achievements",
  },
];