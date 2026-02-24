import {
  AvatarBuildNotes,
  AvatarBuildBlockchain,
} from "@/components/ui/build/avatarbuild";
import { CardBuild } from "@/components/ui/build/cardbuild";
import { ContentHeading } from "@/components/ui/content";

export function ProjectsSection() {
  return (
    <div className="mt-5 w-full">
      <ContentHeading>Projects</ContentHeading>
      <div className="w-full grid md:grid-cols-2 gap-5 mt-5">
        <CardBuild
          title="Private Book"
          body="Write private notes, share them securely with friends, and retain full control over your data through end to end cryptographic protection.  "
          link="htps"
        >
          <AvatarBuildNotes />
        </CardBuild>
        <CardBuild
          title="Blockchain"
          body="Developed a fully functional blockchain prototype in modern C++ to understand distributed ledger architecture at a systems level."
          link="htps"
        >
          <AvatarBuildBlockchain />
        </CardBuild>
      </div>
    </div>
  );
}
