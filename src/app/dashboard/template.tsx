'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DashboardTemplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);

    return (
        <div className="border-2 border-dashed border-black p-4 mx-auto mt-5">
            <h2>Dashboard template {count}</h2>
            <button className="bg-black text-white p-2 rounded-md my-2" onClick={() => setCount(count + 1)}>layout加按钮</button>
            {children}
        </div>
    );
  }