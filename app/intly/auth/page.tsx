"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Auth() {
  const searchParams = useSearchParams();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tokenHash = searchParams.get("token_hash");
    if (tokenHash) {
      const url = `io.geniuscodecraft.intly://authentication/mail-verification?token_hash=${tokenHash}&type=magiclink`;
      if (linkRef.current) {
        linkRef.current.href = url;
        linkRef.current.click();
      }
    }
  }, [searchParams]);

  return <a href="" ref={linkRef}></a>;
}
