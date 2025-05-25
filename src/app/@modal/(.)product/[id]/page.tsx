'use client'
import React from 'react'
import { products } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProductModal({params}: {params: {id: string}}) {
  const product = products.find((product) => product.id === parseInt(params.id))!
  const router = useRouter()
  return (
    <div className='justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={() => router.back()}>
        <Image className='rounded-2xl block mx-auto mt-10' src={product.image} alt={product.alt} width={300} height={300} onClick={(e) => e.stopPropagation()}/>
        <div className='border-2 border-dashed border-gray-500 bg-white rounded-2xl p-4 mt-4 block mx-auto w-1/2 leading-8' onClick={(e) => e.stopPropagation()}>
            <p><strong>Title:</strong> {product.alt}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
        </div>
    </div>
  )
}
