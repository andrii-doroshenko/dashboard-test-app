import styled from "styled-components";
import ReactPaginate from "react-paginate";

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #404b52;
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  list-style: none;
  cursor: pointer;

  .page__item {
    display: inline-flex;
    background-color: #f5f5f5;
    border: 1px solid #eee;
    border-radius: 4px;
    transition: background-color 300ms ease;

    &:hover {
      color: #fff;
      border-color: #5932ea;
      background-color: #5932ea;
    }
  }

  .pagination__link {
    padding: 6px 10px;
  }

  .active {
    color: #fff;
    border-color: #5932ea;
    background-color: #5932ea;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  & p {
    color: #b5b7c0;
    font-weight: 500;
  }
`;

export default function Paginate({
  data,
  perPage,
  handlePageChange,
  currentPage,
}) {
  const startIndex = currentPage * perPage + 1;
  const endIndex = Math.min((currentPage + 1) * perPage, data.length);

  return (
    <PaginationContainer>
      <p>{`Showing data ${startIndex} to ${endIndex} of ${data.length} entries`}</p>
      <StyledReactPaginate
        containerClassName={"pagination"}
        pageClassName={"page__item"}
        activeClassName={"active"}
        pageLinkClassName={"pagination__link"}
        previousClassName={"page__item"}
        nextClassName={"page__item"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        onPageChange={handlePageChange}
        pageCount={Math.ceil(data.length / perPage)}
        breakLabel="..."
        previousLabel={"<"}
        nextLabel={">"}
      />
    </PaginationContainer>
  );
}
