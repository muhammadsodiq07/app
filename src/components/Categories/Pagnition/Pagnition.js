import React from 'react'
import "./Pagniton.scss"

function Pagnition({postsPerPage, totalPosts, paginate}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <nav className="container d-flex justify-content-center mb-5">
    <ul className='pagination'>
      {pageNumber.map(number => {
        return <li className='page-item' key={number}>
          <button onClick={() => paginate(number)} className='page-link'>
            {number}
          </button>
        </li>
      })}
    </ul>
  </nav>
  )
}

export default Pagnition
