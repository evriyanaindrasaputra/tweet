import { Link } from "@remix-run/react";
import GitHubButton from "./github-button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-neutral-200">
      <div className="text-xl"> <Link to="/" className="block group-hover/product:shadow-2xl">
      Github Pages x Remix SPA
      </Link></div>
      <div>
      <GitHubButton repoUrl={"https://github.com/evriyanaindrasaputra/tweet"}/>
      </div>
    </nav>
  );
};
