'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: 'Performance', path: '/performace'},
  { name: 'Reliablity', path: '/reliablity'},
  { name: 'Scale', path: '/scale'},
]

export default function head() {
  const pathname = usePathname()
  return (
    <div className="flex justify-between container mx-auto mt-8 text-lg font-bold">
        <Link href="/">Home</Link>
        <div className="flex gap-10 text-sm font-bold">
            {linkData.map((item) => (
                <Link href={item.path} className={`${pathname === item.path ? 'text-purple-500' : 'text-black'}`}>{item.name}</Link>
            ))}
        </div>
    </div>
  )
}
