import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const param = useParams()
  return (
    <div>Details {param.id}</div>
  )
}

export default Details