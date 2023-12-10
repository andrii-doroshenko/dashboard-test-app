import { Header, Input, Title } from "./PageHeader.styled";

export default function PageHeader({ searchTerm, onSearchTermChange }) {
  return (
    <Header>
      <Title>
        <h2>All Customers</h2>
        <p>Active members</p>
      </Title>
      <Input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </Header>
  );
}
