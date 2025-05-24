import React from 'react'
import BlogUserDetail from '@/components/blogUserDetail'
import { data } from '@/data'

export const generateMetadata = async ({params}: {params: {id: string}}) => {
  const item = data.find((item) => item.id === parseInt(params.id))!
  return {
    title: item.meta,
  }
}

export default function page( {params}: {params: {id: string}} ) {
  return <BlogUserDetail params={params} />
}