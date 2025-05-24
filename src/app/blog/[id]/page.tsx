import React from 'react'
import { Card } from 'antd'
import { data } from '@/data'

interface IParams {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: IParams) {
  const resolvedParams = await Promise.resolve(params)
  const item = data.find((item) => item.id === parseInt(resolvedParams.id))!
  return {
    title: item.meta,
  }
}

export default async function Page({ params }: IParams) {
    const resolvedParams = await Promise.resolve(params)
    const item = data.find((item) => item.id === parseInt(resolvedParams.id))!

    return (
      <Card title={item.title}>
          <p>{item.body}</p>
      </Card>
    )
}