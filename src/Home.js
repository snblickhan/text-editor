import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <ul>
      <li><Link to="/projects">Projects Page</Link></li>
    </ul>
  )
}
