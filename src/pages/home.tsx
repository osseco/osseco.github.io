import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow } from "../components/doc-page";
import { ProjectCard } from "../components/project-card";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { PROJECTS } from "../data/projects";

const PILLARS = [
  {
    title: "Tools",
    body: "Small, focused tools for the work around open source: contributing from a company, keeping supply chains safe, publishing consistently.",
  },
  {
    title: "Curated lists",
    body: "Tools and services we use or trust, grouped by the problem they solve, each with a one-line reason to look at it.",
  },
  {
    title: "Shared practice",
    body: "One design guide, one security baseline and one way to ship, written down so every project starts from the same place.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="max-w-3xl space-y-5">
        <Eyebrow>Open source ecosystem support</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          Tools and know-how that help open source projects, and the people
          around them, work well together.
        </h1>
        <p className="text-lg leading-8 text-pretty text-muted-foreground">
          OSSEco builds and curates what sits around the code: how companies
          contribute, how dependencies stay safe, how projects ship and look.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/projects">
              Our projects <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/lists">Curated lists</Link>
          </Button>
        </div>
      </section>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle className="text-base">{pillar.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {pillar.body}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-16 space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
