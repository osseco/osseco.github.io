import { Network } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AppShell } from "./components/app-shell";
import { ContributePage } from "./pages/contribute";
import { HomePage } from "./pages/home";
import { ListPage } from "./pages/list";
import { ListsPage } from "./pages/lists";
import { ProjectsPage } from "./pages/projects";
import "./index.css";

const BRAND = "OSSEco";
const REPO = "https://github.com/osseco";

const basename = (() => {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") return undefined;
  return base.replace(/\/$/, "");
})();

function Layout() {
  return (
    <AppShell
      brand={BRAND}
      icon={<Network />}
      nav={[
        { href: "/", label: "Overview" },
        { href: "/projects", label: "Projects" },
        { href: "/lists", label: "Lists" },
        { href: "/contribute", label: "Contribute" },
        { href: REPO, label: "GitHub" },
      ]}
      footer={
        <>
          <a href={REPO}>GitHub</a>
          <a href="https://osseco.github.io/web-design-guide/">Design guide</a>
          <a href={`${REPO}/osseco.github.io`}>Site source</a>
        </>
      }
    >
      <Outlet />
    </AppShell>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/lists/:slug" element={<ListPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

const root = document.getElementById("root");
if (!root) {
  throw new Error("index.html has no #root element");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
