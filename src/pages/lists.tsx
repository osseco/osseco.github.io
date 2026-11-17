import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DocPage } from "../components/doc-page";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { LISTS } from "../data/lists";

export function ListsPage() {
  return (
    <DocPage
      eyebrow="Curated lists"
      title="Tools and services worth knowing"
      lead={
        <>
          Grouped by the problem they solve. Something missing?{" "}
          <Link to="/contribute" className="text-primary hover:underline">
            Propose an entry
          </Link>
          .
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {LISTS.map((list) => (
          <Link
            key={list.slug}
            to={`/lists/${list.slug}`}
            className="group rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring"
          >
            <Card className="h-full transition-colors group-hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3 text-base">
                  {list.title}
                  <ArrowRight className="size-4 text-primary" aria-hidden />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>{list.summary}</p>
                <p className="font-mono text-xs">
                  {list.entries.length}{" "}
                  {list.entries.length === 1 ? "entry" : "entries"}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </DocPage>
  );
}
