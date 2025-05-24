import React from 'react'
import { data } from '@/data'
import { Card } from 'antd'

export default function BlogUserDetail( {params}: {params: {id: string}} ) {
  const item = data.find((item) => item.id === parseInt(params.id))!

  return (
    <Card title={item.title}>
        <p>{item.body}</p>
    </Card>
  )
}