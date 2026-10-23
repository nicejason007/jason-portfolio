import {
  ArrowRight,
  Boxes,
  GraduationCap,
  Layers,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Sparkles,
  Users,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project covers are local placeholder wireframes (public/projects/*.png).
 * Replace them with real product screenshots whenever you have them.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "design-system",
    icon: Layers,
    iconLabel: "Design System",
    title:
      "Built a company-wide UI design system from scratch, lifting design efficiency by 40%.",
    description:
      "Defined atomic components, an icon system, interaction and motion standards, and set up cloud-based design–dev sync that raised dev fidelity above 95%. It became onboarding material and won the annual Efficiency Breakthrough award.",
    meta: "UI Designer, 2021–2022",
    imageRatio: 1024 / 768,
    image: "/projects/design-system.png",
    imageAlt: "Design system and component library case study cover",
  },
  {
    id: "b2b-saas",
    icon: Boxes,
    iconLabel: "B2B SaaS",
    title:
      "Designed an end-to-end property-management SaaS from zero, cutting client churn to 18%.",
    description:
      "Owned lead and deal management, transaction follow-up, e-contract signing and approvals, plus VR viewing and a customer-lifecycle board. Renewal rate reached 85% with 200+ signed clients.",
    meta: "UI/UX Designer, 2020–2022",
    imageRatio: 1024 / 768,
    image: "/projects/b2b-saas.png",
    imageAlt: "B2B property management SaaS case study cover",
  },
  {
    id: "community-app",
    icon: Users,
    iconLabel: "Community App",
    title:
      "Rebuilt a consumer home-finding community, raising retention to 52%.",
    description:
      "Ran 100+ user surveys, simplified the feeds and publishing flow, added verification and comments, and layered in emotional micro-interactions. Grew 50k+ new users and +30% daily time.",
    meta: "UI Designer, 2020–2021",
    imageRatio: 1024 / 768,
    image: "/projects/community-app.png",
    imageAlt: "Consumer home-finding community app case study cover",
  },
  {
    id: "data-dashboard",
    icon: LineChart,
    iconLabel: "Data Dashboard",
    title:
      "Turned spreadsheets into a real-time dashboard, cutting monthly review meetings from 4h to 1.5h.",
    description:
      "Designed modular dashboards for performance, leads, sales and forecasting, with threshold alerts and role-based access. Decision response time improved by 70%.",
    meta: "UI/UX Designer, 2022",
    imageRatio: 1024 / 768,
    image: "/projects/data-dashboard.png",
    imageAlt: "Real-time data dashboard case study cover",
  },
  {
    id: "marketing-funnel",
    icon: Megaphone,
    iconLabel: "Marketing Funnel",
    title:
      "Built an online-to-offline brand and lead funnel, lifting annual site UV by 480%.",
    description:
      "Created a brand visual system (key visual, type, IP) across web, mini program and stores, and unified lead intake into a private-traffic pool. Site UV reached 58k and mini-program DAU 3k+.",
    meta: "UI/Visual Designer, 2021",
    imageRatio: 1024 / 768,
    image: "/projects/marketing-funnel.png",
    imageAlt: "Marketing and lead funnel case study cover",
  },
  {
    id: "interface-redesign",
    icon: LayoutDashboard,
    iconLabel: "Core UI Redesign",
    title:
      "Redesigned the high-frequency core screens, adopted into the product's 2.0 release.",
    description:
      "Rebuilt visual hierarchy and information density across rankings, detail, share and workspace screens, validated through A/B testing and a staged gray rollout.",
    meta: "UI Designer, 2021",
    imageRatio: 1024 / 768,
    image: "/projects/interface-redesign.png",
    imageAlt: "Core interface redesign case study cover",
  },
  {
    id: "culture-brand",
    icon: Sparkles,
    iconLabel: "Brand & Culture",
    title:
      "Strengthened employer brand and internal culture through visual design.",
    description:
      "Translated the “geek spirit” into corridor posters, festival gifting and a restructured recruiting site. Employee satisfaction rose from 6.2 to 8.5 and applications increased 35%.",
    meta: "UI/Visual Designer, 2020–2021",
    imageRatio: 1024 / 768,
    image: "/projects/culture-brand.png",
    imageAlt: "Employer brand and culture design case study cover",
  },
  {
    id: "tencent-learning",
    icon: GraduationCap,
    iconLabel: "Tencent Learning",
    title:
      "Rebranded a company-wide Tencent learning campaign, raising participation from 30% to 85%.",
    description:
      "Led the full identity — a “knowledge galaxy” key visual, gradient system, merchandise and H5 — for a month-long event. All merch was claimed and the template was reused.",
    meta: "Graphic Design Intern, 2019",
    imageRatio: 1024 / 768,
    image: "/projects/tencent-learning.png",
    imageAlt: "Tencent learning month campaign visual case study cover",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Selected UI/UX work across design systems, B2B SaaS, and data —
              the projects I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
