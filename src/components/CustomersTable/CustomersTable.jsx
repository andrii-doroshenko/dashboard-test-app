import {
  Table,
  Th,
  Tr,
  Td,
  Tbody,
  Thead,
  TdStatus,
} from "./CustomersTable.styled";

export default function CustomersTable({ content }) {
  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Customer Name</Th>
          <Th>Company</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
          <Th>Country</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>

      <Tbody style={{ color: "#292D32" }}>
        {content.map(({ id, name, company, phone, email, country, status }) => (
          <Tr key={id}>
            <Td>{name}</Td>
            <Td>{company}</Td>
            <Td>{formatPhoneNumber(phone)}</Td>
            <Td>{email}</Td>
            <Td>{country}</Td>
            <Td>
              <TdStatus $isStatus={status}>
                {status ? "Active" : "Inactive"}
              </TdStatus>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
