import React from 'react'
import { Link } from 'react-router-dom'

const List = ({item,href,className}) => {
  return (
    <Link className={`${className}`} to={href}>
        <li>{item}</li>
    </Link>
  )
}

export default List
