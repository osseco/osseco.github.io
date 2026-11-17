import { Callout } from "../components/callout";
import { DocPage, Section } from "../components/doc-page";

const SITE_REPO = "https://github.com/osseco/osseco.github.io";

export function ContributePage() {
  return (
    <DocPage
      eyebrow="Contribute"
      title="Get involved"
      lead="Everything here is open: the projects, the lists and this site. Changes arrive as pull requests."
    >
      <Section id="propose-an-entry" title="Propose a list entry">
        <p>
          Each list is a TypeScript file in{" "}
          <a href={`${SITE_REPO}/tree/main/src/data/lists`}>
            <code>src/data/lists/</code>
          </a>{" "}
          of this site's repository. Add an entry with a name, an https link, a
          one-line description, whether it is a <code>tool</code> or a{" "}
          <code>service</code>, and its SPDX license if it has one. Keep entries
          sorted by name; the tests check it.
        </p>
        <p>
          A good entry solves a real problem for open source maintainers or
          contributors, is maintained, and is something you would recommend to a
          colleague.
        </p>
      </Section>

      <Section id="new-list" title="Start a new list">
        <p>
          Copy <code>src/data/lists/_template.ts</code> to{" "}
          <code>&lt;slug&gt;.ts</code>, fill it in, and add it to{" "}
          <code>LISTS</code> in <code>src/data/lists/index.ts</code>. Open the
          pull request with a few entries so the category is clear.
        </p>
      </Section>

      <Section id="bring-a-project" title="Bring a project to osseco">
        <p>
          Projects that support the ecosystem can move into the organization.
          Open an issue on <a href={`${SITE_REPO}/issues`}>osseco.github.io</a>{" "}
          describing the project and who maintains it. Once agreed, the
          repository is transferred (GitHub redirects the old URLs) and adopts
          the shared baseline.
        </p>
        <Callout title="Shared baseline">
          Web frontends follow the{" "}
          <a
            href="https://osseco.github.io/web-design-guide/"
            className="underline"
          >
            osseco web design guide
          </a>
          . Workflows pin actions by SHA, start from{" "}
          <code className="font-mono">permissions: {"{}"}</code>, and installs
          run behind Socket Firewall.
        </Callout>
      </Section>

      <Section id="security" title="Report a security issue">
        <p>
          Use <strong>Security → Report a vulnerability</strong> on the affected
          repository. Don't open a public issue.
        </p>
      </Section>
    </DocPage>
  );
}
