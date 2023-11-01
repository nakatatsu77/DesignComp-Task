import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { News } from "@/components/news/News";
import { Service } from "@/components/service/Service";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Service />
        <News />
        <Contact/>
      </main>
    </>
  );
}
