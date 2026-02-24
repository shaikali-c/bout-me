import { Props } from "@/types/global";

export function ContentBody({ children }: Props) {
  return (
    <p className="text-base font-primary text-neutral-800 font-normal leading-6.5">
      {children}
    </p>
  );
}

export function ContentHeading({ children }: Props) {
  return <h2 className="text-2xl font-semibold font-primary">{children}</h2>;
}
export function ContentHighlight({ children }: Props) {
  return <span className="text-sky-500 font-medium">{children}</span>;
}
