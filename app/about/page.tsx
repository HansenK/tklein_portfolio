import Navbar from "@/components/navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BriefcaseIcon,
  Certificate02Icon,
  CodeIcon,
  Download04Icon,
  GraduationScrollIcon,
  LanguageCircleIcon,
  Linkedin02Icon,
  Location01Icon,
  Mail02Icon,
  SmartPhone01Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | TKlein Portfolio",
  description: "About Thiago Klein - Software Engineer",
};

const skills = [
  "React / Next.js",
  "JavaScript / TypeScript",
  "React Native / Expo",
  "HTML / CSS",
  "Python / Django",
  "Node.js",
  "AWS / Azure",
  "SQL",
  "GraphQL",
  "Git",
  "Supabase",
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
];

const certifications = [
  {
    name: "Scientific Computing with Python",
    url: "https://www.freecodecamp.org/certification/thiago_hk/scientific-computing-with-python-v7",
  },
  {
    name: "Data Visualization",
    url: "https://www.freecodecamp.org/certification/thiago_hk/data-visualization",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    url: "https://www.freecodecamp.org/certification/thiago_hk/javascript-algorithms-and-data-structures",
  },
];

const experiences = [
  {
    company: "Makai Labs",
    period: "2024 - Present",
    role: "Frontend Engineer",
    highlights: [
      "Implemented from the very beginning different modules for one of the biggest accounting and consulting firms in the US (Cherry Bekaert LLP).",
      "Built an engagement letter builder with fully dynamic fields, components, and templates to facilitate the workflow of managers, partners, and associates.",
      "Created an entire engagement management portal with dynamic hierarchical project plans and binder files structure, along with comprehensive task management.",
      "Implemented a fully secure and customizable role permissions system to enable limited access based on job functions.",
      "Developed a customizable dashboard creator to visualize reports for productivity, leverage, budget, and more.",
    ],
  },
  {
    company: "Artha",
    period: "2023 - 2024",
    duration: "10 months",
    role: "Frontend Engineer",
    highlights: [
      "Helped create a next-level portfolio management platform for advisors and individual investors to match their goals on the stock market.",
      "Implemented a system to effortlessly monitor, evaluate, and benchmark at three levels: household, client, and account.",
      "Built a model-based approach to help ensure client investments align with their objectives for confident trading decisions.",
      "Created powerful features like customizable investment strategies, risk monitoring, tax-efficiency, and direct indexing opportunities.",
    ],
  },
  {
    company: "Lobby CRE",
    period: "2020 - 2023",
    duration: "3 years 4 months",
    role: "Frontend Engineer",
    highlights: [
      "Helped create from scratch a platform for asset and portfolio management that helped multiple companies and investors in the real estate market.",
      "Implemented a tool for customizable reporting of assets for clients.",
      "Built a property management system with easy-to-see KPIs.",
    ],
  },
];

const education = [
  {
    degree: "Computer Science",
    institution: "Cruzeiro do Sul Virtual",
    period: "2020 - 2023",
    grade: "9.42 / 10.0",
  },
  {
    degree: "Electronic Technician",
    institution: "F.E.T. Liberato Salzano Vieira da Cunha",
    period: "2015 - 2019",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen pt-20 pb-12 px-4 md:px-8 md:flex md:justify-center md:items-start">
        <div className="pointer-events-auto flex flex-col gap-12 md:max-w-3xl backdrop-blur-sm bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] p-4 md:shadow-2xl md:p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex flex-col items-center gap-3 shrink-0">
              <Avatar className="rounded-full size-28 md:size-36">
                <AvatarImage src="/profile.jpg" />
              </Avatar>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex items-center justify-center size-9 border border-primary/50 rounded-md text-primary transition-colors hover:bg-primary/10"
                      href="mailto:thiagohk@proton.me"
                    >
                      <HugeiconsIcon icon={Mail02Icon} size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send Email</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="flex items-center justify-center size-9 border border-primary/50 rounded-md text-primary transition-colors hover:bg-primary/10"
                      href="https://linkedin.com/in/hansenthiago"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <HugeiconsIcon icon={Linkedin02Icon} size={18} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn Profile</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Thiago Klein</h1>
                <p className="text-lg text-primary">Software Engineer</p>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                I&apos;ve spent the last years turning designs into interactive,
                high-performing web experiences with React and TypeScript.
                Alongside front-end work, I have intermediate experience
                building back-end services in Python and Node.js, which lets me
                bridge the client and server making everything more fun. I also
                develop mobile applications with React Native, delivering
                consistent experiences across iOS and Android.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                The projects I worked on affected thousands of people, making
                their work easier and their life better. I am passionate about
                learning and experimenting with new technologies, programming
                languages, and tools. Always trying to create something to
                enhance my skills and stay up-to-date with industry trends.
              </p>
            </div>
          </div>

          <Separator className="bg-foreground/20" />

          {/* Skills Section */}
          <section className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <HugeiconsIcon className="text-primary" icon={CodeIcon} size={20} />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Languages & Certifications Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages Section */}
            <section className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <HugeiconsIcon className="text-primary" icon={LanguageCircleIcon} size={20} />
                Languages
              </h2>
              <ul className="flex flex-col gap-1 text-sm list-disc list-inside marker:text-foreground">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    {lang.name}{" "}
                    <span className="text-foreground/70">({lang.level})</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section className="flex flex-col gap-3">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <HugeiconsIcon className="text-primary" icon={Certificate02Icon} size={20} />
                Certifications
              </h2>
              <ul className="flex flex-col gap-1 text-sm text-foreground/70 list-disc list-inside marker:text-foreground">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <Link
                      className="underline underline-offset-2 hover:text-primary transition-colors"
                      href={cert.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {cert.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <Separator className="bg-foreground/20" />

          {/* Work Experience Section */}
          <section className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <HugeiconsIcon className="text-primary" icon={BriefcaseIcon} size={20} />
              Work Experience
            </h2>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="flex flex-col gap-2 pl-4 border-l-2 border-primary/30"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold">{exp.company}</h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                    <div className="text-sm">
                      {exp.period}
                      {exp.duration && (
                        <span className="ml-1">({exp.duration})</span>
                      )}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1 text-sm text-foreground/70 list-disc list-inside marker:text-foreground">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Separator className="bg-foreground/20" />

          {/* Education Section */}
          <section className="flex flex-col gap-4">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <HugeiconsIcon className="text-primary" icon={GraduationScrollIcon} size={20} />
              Education
            </h2>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 pl-4 border-l-2 border-primary/30"
                >
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-foreground/70">
                      {edu.institution}
                    </p>
                    {edu.grade && (
                      <p className="text-sm text-primary">Grade: {edu.grade}</p>
                    )}
                  </div>
                  <p className="text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="bg-foreground/20" />

          {/* Contact Section */}
          <section className="flex flex-col gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <HugeiconsIcon className="text-primary" icon={User03Icon} size={20} />
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <HugeiconsIcon className="text-primary" icon={SmartPhone01Icon} size={16} />
                <span>+55 (51) 99998-6565</span>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon className="text-primary" icon={Mail02Icon} size={16} />
                <Link
                  className="underline underline-offset-2 hover:text-primary transition-colors"
                  href="mailto:thiagohk@proton.me"
                >
                  thiagohk@proton.me
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon className="text-primary" icon={Linkedin02Icon} size={16} />
                <Link
                  className="underline underline-offset-2 hover:text-primary transition-colors"
                  href="https://linkedin.com/in/hansenthiago"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  /hansenthiago
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HugeiconsIcon className="text-primary" icon={Location01Icon} size={16} />
                <span>Novo Hamburgo, RS, Brazil</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Download Resume Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="pointer-events-auto fixed bottom-6 right-6 z-50 size-12 rounded-full shadow-lg"
          >
            <a download="Thiago Klein - Resume.pdf" href="/resume.pdf">
              <HugeiconsIcon icon={Download04Icon} size={20} />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Download Resume</p>
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default AboutPage;
