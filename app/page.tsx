import { ContentBody } from "@/components/ui/content";
import { ProjectsSection } from "@/sections/projects";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Asterisk } from "lucide-react";

const SmoothCursor = dynamic(() => import("@/components/ui/smooth-cursor"), {});

export default function Home() {
  return (
    <main className="min-h-dvh relative text-neutral-800">
      <SmoothCursor />
      <div className="-z-1 mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] fixed inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="max-w-180 w-full mx-auto">
        <header className="md:p-10 p-7 md:text-xl text-lg flex justify-between items-center font-semibold">
          <h2 className="font-secondary flex flex-col md:gap-2 gap-1.5">
            SHAIK MARWAAN
            <span className="font-mono text-xs text-sky-500 uppercase font-medium">
              Software Engineer
            </span>
          </h2>
          <div className="flex gap-5">
            <Link href={"https://github.com/shaikali-c"}>
              <Image
                src={"/assets/social/github.svg"}
                width={22}
                height={22}
                alt="Github"
              />
            </Link>
            <Link href={"https://x.com/astrostrax"}>
              <Image
                src={"/assets/social/x.svg"}
                width={22}
                height={22}
                alt="Github"
              />
            </Link>
          </div>
        </header>
        <section className="font-sans md:px-10 px-7 flex flex-col gap-5">
          <ContentBody>
            {`
              I'm a developer currently studying B.Tech in AI & ML, but most of my learning happens while building things.
              I work across the stack with Next.js, React, Tailwind, APIs, and PostgreSQL, MongoDB, Express.js Supabase, and I like building fast, clean full-stack apps with strong performance and clean architecture..
            `}
          </ContentBody>
          <ContentBody>
            {`
              Apart the web world, I spend time in C++, cryptography, and
            blockchain concepts, which pushed me to think more seriously about
            security and system design. Lately, I've also been focusing more into game
            development and low-level programming because I want to grow into an
            engineer who understands how things work from the UI all the way
            down to memory :)
            `}
          </ContentBody>
          <ProjectsSection />
          <div className="my-20 flex justify-center text-neutral-800">
            <Asterisk size={50} />
          </div>
        </section>
      </div>
    </main>
  );
}
