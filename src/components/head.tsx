'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: 'Performance', path: '/performance'},
  { name: 'Reliability', path: '/reliability'},
  { name: 'Scale', path: '/scale'},
]

export default function head() {
  const pathname = usePathname()

  let found = false 
  for (const item of linkData) {
    if (pathname === item.path) { found = true; break }
  }
  if (pathname === '/') { found = true }
  if (!found) { return null }

  return (
    <div className='absolute w-full z-10'>
      <div className="flex justify-between container mx-auto mt-8 text-lg font-bold">
        <Link className='text-3xl font-bold text-white' href="/">Home</Link>
        <div className="flex gap-10 text-sm font-bold">
            {linkData.map((item) => (
                <Link href={item.path} className={`text-xl font-bold ${pathname === item.path ? 'text-purple-500' : 'text-white'}`}>{item.name}</Link>
            ))}
        </div>
      </div>
    </div>
  )
}
