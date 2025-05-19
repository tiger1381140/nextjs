import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <h2>h2我是root Template</h2>
      {children}
    </div>
  );
}