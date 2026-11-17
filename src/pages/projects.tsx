import { DocPage } from "../components/doc-page";
import { ProjectCard } from "../components/project-card";
import { PROJECTS } from "../data/projects";

export function ProjectsPage() {
  return (
    <DocPage
      eyebrow="Projects"
      title="What we build"
      lead="Every osseco project follows the same stack, design and security baseline."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </DocPage>
  );
}
