import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({planetsPerPage, totalPlanets, currentPage}) => {
    let pageNumbers = []

    for (let i=1; i <= Math.ceil(totalPlanets/planetsPerPage); i++) {
        pageNumbers=[...pageNumbers,i]
    }

  return (
    <nav className='pagination'>
        <ul className='pagination__list'>
            {pageNumbers.map( page => (
                <li className={ Number(currentPage) === page ? 'pagination__item__on' : 'pagination__item__off'} key={page}>
                    <Link to={`/planets?page=${page}`} /* onClick={() => paginate(page)} */ >
                        {page}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination