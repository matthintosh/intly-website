"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

function Auth() {
  const searchParams = useSearchParams();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tokenHash = searchParams.get("token_hash");
    const type = searchParams.get("type");
    if (tokenHash) {
      const url = `io.geniuscodecraft.intly://authentication/mail-verification?token_hash=${tokenHash}&type=${type}`;
      if (linkRef.current) {
        linkRef.current.href = url;
        linkRef.current.click();
      }
    }
  }, [searchParams]);

  return <a href="" ref={linkRef}></a>;
}

export default function IntlyAuthentication() {
  return (
    <Suspense>
      <Auth />
    </Suspense>
  );
}
