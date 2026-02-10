import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {

    const {id} = useParams()
  return (
    <section>
        {id} 번의 AboutDetail
    </section>
  )
}

export default AboutDetail
