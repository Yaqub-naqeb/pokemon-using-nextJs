import React from 'react'
import Pagination from "react-pagination-library";

const Pagenate = ({currentPage,changeCurrentPage,NumOfPage}) => {
  return (
    <div>
        {/* npm install react-pagination-library */}
      <Pagination
          currentPage={currentPage}
          totalPages={NumOfPage}
          changeCurrentPage={changeCurrentPage}
          theme="bottom-border"
        />
    </div>
  )
}

export default Pagenate
