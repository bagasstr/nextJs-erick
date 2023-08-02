import Image from "next/image";
import {
  Filter,
  Footer,
  Hero,
  Navbar,
  Product,
  ProductCopy,
} from "../components";

export default function Home() {
  return (
    <main>
      <Navbar primary={"text-primary"} white={"text-white"} />
      <Hero />
      <Filter />
      <ProductCopy />
      <Footer />
    </main>
  );
}
