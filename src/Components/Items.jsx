import React from 'react'

const items = ({Links,title}) => {
  return (
    <div>
      <ul>
       <h1 className="mb-1 font-semibold">{title}</h1>
       {Links.map((Link) => (
        <li key={Link.name}>
            <a className="text-gray-400 hover:text-[#00df9a] duration-300
            text-sm cursor-pointer leading-7" href={Link.link}>{Link.name}</a>
        </li>
       ))}      
      </ul>
    </div>
  )
}

export default items
