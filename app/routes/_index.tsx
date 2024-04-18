import type { MetaFunction } from "@remix-run/node";
import { FloatingNav } from "~/components/floating-navbar";
import { HeroParallax } from "~/components/hero-parallax";
import { Navbar } from "~/components/navbar";
import { products } from "~/data/products";

export const meta: MetaFunction = () => {
  return [
    { title: "Kdrama" },
    { name: "description", content: "Welcome to KDrama (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="relative  w-full">
        <FloatingNav />
      </div>
      <HeroParallax products={products} />
    </>
  );
}
