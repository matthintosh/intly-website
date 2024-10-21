import { PropsWithChildren } from "react";

export default function PrivacyLayout({ children }: PropsWithChildren) {
  return <div className={`flex flex-col items-center justify-center text-white p-8 md:px-[20%]`}>{children}</div>;
}
