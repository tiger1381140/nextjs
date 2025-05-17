import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <h1>我是root Template</h1>
      {children}
    </div>
  );
}