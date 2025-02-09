import * as React from "react";

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

export function Avatar({ className = "", children }: AvatarProps) {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
  );
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}
