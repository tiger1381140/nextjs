import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-xl container mx-auto mt-10">
      {children}
    </div>
  );
}
