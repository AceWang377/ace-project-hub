import { ImageResponse } from "next/og";
import { getProject, getProjectSlugs } from "@/lib/projects";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#101211",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 900 }}>Ace Project Hub</div>
          <div style={{ width: 64, height: 8, background: project?.brand.accentColor ?? "#00c7d4" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: -6 }}>
            {project?.name ?? "Project"}
          </div>
          <div style={{ maxWidth: 860, marginTop: 24, fontSize: 34, color: "rgba(255,255,255,.7)" }}>
            {project?.tagline ?? "Apps, tools, and experiments by Ace."}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
