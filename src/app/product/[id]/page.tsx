import { products } from '@/data'
import Image from 'next/image'
import React from 'react'

export default async function ProductPage({params}: {params: {id: string}}) {
  const resolvedParams = await Promise.resolve(params)
  const product = products.find((product) => product.id === parseInt(resolvedParams.id))!
  return (
    <div className='container mx-auto mt-8'>
        <Image className='rounded-2xl block mx-auto' src={product.image} alt={product.alt} width={300} height={300}/>
        <div className='border-2 border-dashed border-gray-500 rounded-2xl p-4 mt-4 block mx-auto w-1/2 leading-8'>
            <p><strong>Title:</strong> {product.alt}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
        </div>
    </div>
  )
}
