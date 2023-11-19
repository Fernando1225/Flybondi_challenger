const Pagination = ({
  totalPosts,
  setCurrentPage,
  currentPage,
  totalFlights,
  flightsCount,
  currentFlights,
  flightsPerPage,
}) => {
  let pages = [];
  const pagesToShow = 3;
  const totalPages = totalPosts - 1 === 0 ? 1 : totalPosts - 1;
  const startPage =
    currentPage - pagesToShow >= 1 ? currentPage - pagesToShow : 1;
  const endPage =
    currentPage + pagesToShow <= totalPages
      ? currentPage + pagesToShow
      : totalPages;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between mx-2 md:mx-10 lg:mx-10 my-3">
        <p>{`Showing ${
          currentPage - 1 < 1
            ? 1
            : currentPage + 1 >= totalPosts
            ? flightsCount - currentFlights
            : flightsCount - flightsPerPage
        } to ${
          currentPage + 1 < totalPosts
            ? flightsCount
            : totalFlights > flightsPerPage ? flightsCount + currentFlights : currentFlights
        } of ${totalFlights}`}</p>
        <div className="mx-5">
          <button
            className="hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              const page = currentPage - 1 >= 1 ? currentPage - 1 : currentPage;
              setCurrentPage(page);
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                className={`mx-1  ${
                  currentPage === page ? " text-yellow-300" : "bg-transparent"
                } rounded-3xl p-2`}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className="hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              const page =
                currentPage + 1 < totalPosts ? currentPage + 1 : currentPage;
              setCurrentPage(page);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
