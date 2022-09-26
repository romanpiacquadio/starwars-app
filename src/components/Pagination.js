import React from 'react'

const Pagination = ({planetsPerPage, totalPlanets, paginate}) => {
    let pageNumbers = []

    for (let i=1; i <= Math.ceil(totalPlanets/planetsPerPage); i++) {
        pageNumbers=[...pageNumbers,i]
    }

  return (
    <nav className='pagination'>
        <ul className='pagination__list'>
            {pageNumbers.map( page => (
                <li className='pagination__item'>
                    <a onClick={() => paginate(page)}>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination