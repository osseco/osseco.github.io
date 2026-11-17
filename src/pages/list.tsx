import { ExternalLink } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { DocPage } from "../components/doc-page";
import { Badge } from "../components/ui/badge";
import { findList } from "../data/lists";

export function ListPage() {
  const { slug } = useParams();
  const list = findList(slug);
  if (!list) return <Navigate to="/lists" replace />;

  return (
    <DocPage eyebrow="Curated list" title={list.title} lead={list.summary}>
      <ul className="divide-y divide-border rounded-xl border border-border bg-card">
        {list.entries.map((entry) => (
          <li
            key={entry.name}
            className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div className="space-y-1">
              <a
                href={entry.url}
                className="inline-flex items-center gap-1 rounded-md font-medium text-foreground outline-none hover:text-primary focus-visible:ring-3 focus-visible:ring-ring"
              >
                {entry.name}
                <ExternalLink className="size-3" aria-hidden />
              </a>
              <p className="text-sm leading-6 text-muted-foreground">
                {entry.description}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Badge variant="default" className="font-mono">
                {entry.kind}
              </Badge>
              {entry.license ? (
                <Badge className="font-mono text-muted-foreground">
                  {entry.license}
                </Badge>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
