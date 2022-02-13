import React from 'react';

export const Pagination = ({ data, setPage, page }) => {
  const handleNextPage = (page) => {
    setPage(page + 1);
  };

  const handleBackPage = (page) => {
    setPage(page - 1);
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={data?.page === 1}
            onClick={() => handleBackPage(data.page)}
            className={`${data?.page === 1 && 'pagination__btnDisabled'}`}
          >
            Anterior
          </button>
        </li>
        <li>
          <button>{data?.page}</button>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <button className="">{data?.totalPages}</button>
        </li>
        <li>
          <button
            className={`${data?.page === data?.totalPages && 'pagination__btnDisabled'}`}
            onClick={() => handleNextPage(data?.page)}
            disabled={data?.page === data?.totalPages}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};
