"use client";

import { usePageTransition } from "./PageTransition";

export default function TransitionLink({ href, className, children }) {
  const navigate = usePageTransition();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
