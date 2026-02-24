import { CardProps } from "@/types/global";
import { Button } from "../button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../card";
import Link from "next/link";
import { SeperatorBuild } from "./seperatorbuild";

export function CardBuild({ title, body, link, children }: CardProps) {
  return (
    <Card className="w-full max-w-sm gap-0 p-0">
      <CardHeader className="flex items-center justify-between px-4 py-5">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="border-y px-4 py-3 flex flex-col gap-5 pb-5">
        <p>{body}</p>
        <SeperatorBuild>Stack</SeperatorBuild>
        {children}
      </CardContent>
      <CardFooter className="border-none px-4 py-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href={link}>GitHub</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
