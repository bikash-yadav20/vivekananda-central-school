import {
  BookOpen,
  Brain,
  Calculator,
  FlaskConical,
  GraduationCap,
  Languages,
  PenTool,
  School,
  Users,
} from "lucide-react";

export const academicsHero = {
  badge: "Academics",
  title: "A Future-Ready Academic Experience",
  description:
    "Our academic system combines strong subject knowledge, practical learning, values, communication skills, STEM, robotics, AI awareness, and student confidence.",
  image: "/images/hero/academic_hero.webp",
};

export const academicPrograms = [
  {
    icon: School,
    title: "Pre-School Program",
    slug: "preschool",
    level: "Play Group • Nursery • Prep",
    description:
      "Our Pre-School Program provides a safe, joyful, and stimulating environment where young learners develop essential early childhood skills through play-based learning, creativity, and exploration.",
    subjects: [
      "English Language Development",
      "Early Mathematics",
      "Phonics & Literacy",
      "Creative Arts & Craft",
      "Rhymes & Storytelling",
      "Physical Activities",
      "General Awareness",
    ],
    outcomes: [
      "Develops social and emotional confidence",
      "Builds early reading and communication skills",
      "Strengthens fine and gross motor skills",
      "Encourages creativity and curiosity",
      "Prepares children for primary education",
      "Promotes independence and positive learning habits",
    ],
    image: "/images/gallery/pre_school.webp",
  },
  {
    icon: BookOpen,
    title: "Junior School Program",
    slug: "junior-school",
    level: "Grades 1–8",
    description:
      "Our Junior School Program provides a comprehensive learning experience that strengthens academic foundations while fostering creativity, critical thinking, leadership, and responsible citizenship in a supportive learning environment.",
    subjects: [
      "English",
      "Assamese",
      "Mathematics",
      "General Science",
      "Computer Science",
      "Social Studies",
      "Social Studies",
      "Arts & Creative Activities",
    ],
    outcomes: [
      "Strong foundation in core academic subjects",
      "Enhanced critical thinking and problem-solving skills",
      "Effective communication and presentation abilities",
      "Confidence in using technology for learning",
      "Development of teamwork, leadership, and responsibility",
      "Preparation for secondary education and future success",
    ],
    image: "/images/gallery/junior_school.webp",
  },
  {
    icon: GraduationCap,
    title: "Senior School Program",
    slug: "senior-school",
    level: "Grades 9–10",
    description:
      "Our Senior School Program prepares students for academic excellence through conceptual learning, practical application, board examination readiness, and career-focused guidance in a disciplined and supportive environment.",
    subjects: [
      "English",
      "Assamese",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Social Studies",
    ],
    outcomes: [
      "Excellent preparation for board examinations",
      "Strong conceptual understanding of science and mathematics",
      "Hands-on experience through laboratory work and practical projects",
      "Improved analytical, critical thinking, and problem-solving skills",
      "Career awareness and informed academic planning",
      "Confidence, leadership, and readiness for higher education",
    ],
    image: "/images/gallery/senior_school.webp",
  },
];

export const departmentsData = [
  {
    icon: Brain,
    title: "IT, STEM & Robotics Department",
    slug: "it-stem-robotics",
    shortName: "IT & STEM",
    overview:
      "The IT, STEM & Robotics Department equips students with future-ready digital and technical skills through computer education, artificial intelligence, coding, robotics, engineering design, and hands-on STEM learning. Students develop creativity, critical thinking, innovation, and problem-solving abilities in a technology-driven environment.",

    focusAreas: [
      "Computer Science",
      "Artificial Intelligence",
      "Coding & Programming",
      "Digital Literacy",
      "STEM Education",
      "Robotics",
      "Arduino & Sensors",
      "Engineering Design",
      "Innovation & Problem Solving",
    ],

    teachers: [
      {
        name: "Pooja Kalita",
        designation: "IT Teacher & AI Instructor",
        qualification: "BS Computer Science, BS Software Engineering",
        experience: "3+ Years",
        subjects: [
          "Computer Science",
          "Artificial Intelligence",
          "Programming",
          "STEM",
          "Robotics",
        ],
        image: "/images/faculty/Pooja.webp",
      },
      {
        name: "Sneha Sharma",
        designation: "IT Developer & Teacher",
        qualification: "ADP(CS), BS Information Technology",
        experience: "1+ Year",
        subjects: [
          "STEM",
          "Engineering Design",
          "Project-Based Learning",
        ],
        image: "/images/faculty/SnehaSharma.webp",
      },
      {
        name: "Swati Verma",
        designation: "IT Developer & Teacher",
        qualification: "BS Information Technology, B.Ed",
        experience: "4+ Years",
        subjects: [
          "Robotics",
          "Arduino",
          "Electronics",
        ],
        image: "/images/faculty/SwatiVerma.webp",
      },
    ],

    gallery: [
      "/images/gallery/IT_1.webp",
      "/images/gallery/IT_2.webp",
      "/images/gallery/IT_3.webp",
    ],

    activities: [
      "Coding workshops",
      "AI & Prompt Engineering activities",
      "Scratch programming",
      "Website and app development",
      "STEM innovation projects",
      "Science and engineering challenges",
      "Arduino programming",
      "Robotics competitions",
      "Electronics and sensor projects",
      "Hackathons & innovation fairs",
    ],
  },
  {
    icon: FlaskConical,
    title: "Science Department",
    slug: "science",
    shortName: "Science",
    overview:
      "The Science Department inspires curiosity, critical thinking, and scientific inquiry through engaging classroom instruction, hands-on laboratory experiments, and project-based learning. Students develop a strong understanding of scientific concepts while exploring the natural world with creativity and confidence.",
    focusAreas: [
      "Physics",
      "Chemistry",
      "Biology",
      "Experiments",
      "Science Projects",
      "Science Exhibitions",
    ],
    teachers: [
      {
        name: "Meenakshi Das",
        designation: "Science Teacher",
        qualification: "BS Biotechnology",
        experience: "3+ Years",
        subjects: ["Chemistry", "Biology"],
        image: "/images/faculty/Meenakshi.webp",
      },
      {
        name: "Isha Malhotra",
        designation: "Science Teacher",
        qualification: "M.Phill Analytical Chemistry",
        experience: "2+ Years",
        subjects: ["Chemistry", "Science"],
        image: "/images/faculty/Isha.webp",
      },
      {
        name: "Monika Gogoi",
        designation: "Science Teacher",
        qualification: "M.Sc. Botany",
        experience: "1 Year",
        subjects: ["Biology", "General Science"],
        image: "/images/faculty/Monika.webp",
      },
    ],
    gallery: [
      "/images/gallery/Science_1.webp",
      "/images/gallery/Science_2.webp",
      "/images/gallery/Science_3.webp",
    ],
    activities: [
      "Science experiments",
      "Model making",
      "Science exhibitions",
      "Lab demonstrations",
      "Quiz competitions",
    ],
  },
  {
    icon: Calculator,
    title: "Mathematics Department",
    slug: "mathematics",
    shortName: "Mathematics",
    overview:
      "The Mathematics Department builds strong numerical foundations, logical reasoning, and analytical thinking through engaging instruction, practical applications, and problem-solving activities. Students develop confidence and accuracy while preparing for academic success and everyday challenges.",
    focusAreas: [
      "Arithmetic",
      "Algebra",
      "Geometry",
      "Problem Solving",
      "Logical Reasoning",
      "Mental Math",
    ],
    teachers: [
      {
        name: "Rajesh Sharma",
        designation: "Mathematics Teacher",
        qualification: "M.Sc Mathematics",
        experience: "12+ Years",
        subjects: ["Mathematics", "Algebra"],
        image: "/images/faculty/Rajesh.webp",
      },
      {
        name: "Ritu Baruah",
        designation: "Mathematics Teacher",
        qualification: "M.Phill Mathematics",
        experience: "2+ Years",
        subjects: ["Mathematics", "Algebra"],
        image: "/images/faculty/Ritu.webp",
      },
    ],
    gallery: [
      "/images/gallery/Math_1.webp",
      "/images/gallery/Math_2.webp",
      "/images/gallery/Math_3.webp",
    ],
    activities: [
      "Mental math practice",
      "Problem-solving sessions",
      "Math quizzes",
      "Board exam practice",
      "Group activities",
    ],
  },
  {
    icon: Users,
    title: "Spoken English Department",
    slug: "spoken-english",
    shortName: "Spoken English",
    overview:
      "The Spoken English Department enhances students' communication skills, fluency, pronunciation, and confidence through interactive conversations, presentations, role-playing, and public speaking activities, preparing them for academic and professional success.",
    focusAreas: [
      "Fluency",
      "Pronunciation",
      "Conversation",
      "Public Speaking",
      "Listening Skills",
      "Confidence Building",
    ],
    teachers: [
      {
        name: "Karan Anand",
        designation: "Spoken English Trainer",
        qualification: "M.A English, B.Edu",
        experience: "10+ Years",
        subjects: ["Spoken English", "Communication Skills"],
        image: "/images/faculty/Karan.webp",
      },
      {
        name: "Manasi Saikia",
        designation: "Spoken English Trainer",
        qualification: "BS English Literature",
        experience: "2+ Years",
        subjects: ["Spoken English", "Communication Skills"],
        image: "/images/faculty/Manasi.webp",
      },
    ],
    gallery: [
      "/images/gallery/Spoken_English_1.webp",
      "/images/gallery/Spoken_English_2.webp",
      "/images/gallery/Spoken_English_3.webp",
    ],
    activities: [
      "Conversation practice",
      "Role play",
      "Presentations",
      "Debates",
      "Confidence-building sessions",
    ],
  },
  {
    icon: Languages,
    title: "English Department",
    slug: "english",
    shortName: "English",
    overview:
      "The English Department develops strong reading, writing, grammar, vocabulary, and literary skills through engaging lessons that inspire critical thinking, creativity, effective communication, and a lifelong love for language.",
    focusAreas: [
      "Grammar",
      "Reading",
      "Writing",
      "Comprehension",
      "Vocabulary",
      "Presentation Skills",
    ],
    teachers: [
      {
        name: "Ankita Kapoor",
        designation: "English Teacher",
        qualification: "BS English",
        experience: "3+ Years",
        subjects: ["English Grammar", "Creative Writing"],
        image: "/images/faculty/Ankita.webp",
      },
    ],
    gallery: [
      "/images/gallery/English_1.webp",
      "/images/gallery/English_2.webp",
      "/images/gallery/English_3.webp",
    ],
    activities: [
      "Reading sessions",
      "Story writing",
      "Speech practice",
      "Spelling competitions",
      "Presentation activities",
    ],
  },
  {
    icon: PenTool,
    title: "Assamese Department",
    slug: "Assamese",
    shortName: "Assamese",
    overview:
      "The Assamese Department nurtures a deep appreciation for the state language by developing reading, writing, grammar, literature, and communication skills while promoting creativity, critical thinking, and cultural values.",
    focusAreas: [
      "Assamese Grammar",
      "Reading",
      "Writing",
      "Comprehension",
      "Poetry",
      "Speech",
    ],
    teachers: [
      {
        name: "Anamika Bora",
        designation: "Assamese Teacher",
        qualification: "MA Assamese, B.Ed",
        experience: "7+ Years",
        subjects: ["Assamese", "Poetry"],
        image: "/images/faculty/Anamika.webp",
      },
    ],
    gallery: [
      "/images/gallery/Assamese_1.webp",
      "/images/gallery/Assamese_2.webp",
      "/images/gallery/Assamese_3.webp",
    ],
    activities: [
      "Assamese speeches",
      "Essay writing",
      "Poetry recitation",
      "Handwriting practice",
      "Reading activities",
    ],
  },
];

export const academicsCta = {
  title: "Explore Our Academic Programs",
  description:
    "Discover how Alpine Digital School develops confident, skilled, and future-ready students through academics, STEM, robotics, AI, and communication skills.",
  primary: {
    label: "Apply Now",
    href: "/admissions",
  },
  secondary: {
    label: "Contact Academic Office",
    href: "/contact",
  },
};