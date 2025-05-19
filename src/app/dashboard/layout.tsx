'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkData = [
  { name: 'About', path: '/dashboard/about'},
  { name: 'Setting', path: '/dashboard/setting'}
]

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);
    const userpath = usePathname();

    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
            <div className="flex gap-4 font-bold text-lg mb-4">
             {linkData.map((item) => (
                <Link className={`${userpath === item.path ? 'text-purple-500' : 'text-black'}`} href={item.path}>{item.name}</Link>
              ))}
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white p-2 rounded-md my-2" onClick={() => setCount(count + 1)}>layout加按钮</button>
            {children}
        </div>
    );
  }