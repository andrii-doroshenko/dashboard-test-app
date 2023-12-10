import CustomersTable from "components/CustomersTable/CustomersTable";
import React, { useState, useEffect } from "react";
import Paginate from "components/Paginate/Paginate";
import PageHeader from "components/PageHeader/PageHeader";
import { Container } from "./CustomersPage.styled";

export default function Customers() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const n = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("usersData.json");
        const customers = await response.json();
        setData(customers);

        setFilterData(
          customers.filter((item, index) => {
            return (index >= page * n) & (index < (page + 1) * n);
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const contentFiltered = filterData.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container>
        <PageHeader
          searchTerm={searchTerm}
          onSearchTermChange={(e) => setSearchTerm(e.target.value)}
        />

        {!filterData ? (
          <p>Loading...</p>
        ) : (
          <CustomersTable content={contentFiltered} />
        )}

        {data && (
          <Paginate
            perPage={n}
            data={data}
            currentPage={page}
            handlePageChange={(e) => setPage(e.selected)}
          />
        )}
      </Container>
    </>
  );
}
