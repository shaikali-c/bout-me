import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarBuildBlockchain() {
  return (
    <AvatarGroup>
      <Avatar size="default">
        <AvatarImage src="/assets/stacks/cplusplus.svg" alt="C++" />
        <AvatarFallback>C++</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="/assets/stacks/bitcoin.svg" alt="Bitcoin" />
        <AvatarFallback>BTC</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
export function AvatarBuildNotes() {
  return (
    <AvatarGroup>
      <Avatar size="default" className="rounded-md">
        <AvatarImage src="/assets/stacks/react.svg" alt="DB" />
        <AvatarFallback>REACT</AvatarFallback>
      </Avatar>
      <Avatar size="default" className="rounded-md">
        <AvatarImage src="/assets/stacks/nextdotjs.svg" alt="NEXT" />
        <AvatarFallback>NEXT</AvatarFallback>
      </Avatar>
      <Avatar size="default" className="rounded-none">
        <AvatarImage src="/assets/stacks/supabase.svg" alt="DB" />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
      <Avatar size="default" className="rounded-none">
        <AvatarImage src="/assets/stacks/typescript.svg" alt="TS" />
        <AvatarFallback>TS</AvatarFallback>
      </Avatar>
      <Avatar size="default" className="rounded-none">
        <AvatarImage src="/assets/stacks/vercel.svg" alt="V" />
        <AvatarFallback>VERCEL</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  );
}
