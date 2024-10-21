import { PropsWithChildren } from "react";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function IntlyLayout({ children }: PropsWithChildren) {
  return <div className={lexend.className}>{children}</div>;
}
