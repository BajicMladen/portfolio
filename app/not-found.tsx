import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
        <p className="prompt">~/mladen-bajic $ cd ./this-page</p>
        <h1 style={{ fontSize: 40, fontWeight: 700 }}>404 · not found</h1>
        <Link className="btn btn-primary" href="/">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
