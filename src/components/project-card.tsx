import { ExternalLink } from "lucide-react";
import { PROJECT_STATUS, type Project } from "../data/projects";
import { StatusBadge } from "./status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const LINK =
  "inline-flex items-center gap-1 rounded-md text-sm text-primary outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring";

export function ProjectCard({ project }: { project: Project }) {
  const status = PROJECT_STATUS[project.status];
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="font-mono text-base">{project.name}</CardTitle>
          <StatusBadge tone={status.tone} title={status.meaning}>
            {project.status}
          </StatusBadge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="flex-1 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={project.repo} className={LINK}>
            Repository <ExternalLink className="size-3" aria-hidden />
          </a>
          {project.site ? (
            <a href={project.site} className={LINK}>
              Site <ExternalLink className="size-3" aria-hidden />
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
