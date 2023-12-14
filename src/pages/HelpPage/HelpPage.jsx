import styled from "styled-components";

const Container = styled.div`
  h2,
  p,
  ul,
  li {
    margin-bottom: 14px;
  }
`;

const HelpPage = () => {
  return (
    <Container>
      <h2 style={{ marginBottom: "14px" }}>Help</h2>
      <p>
        Welcome to the Help page! If you have any questions or need assistance,
        please check the information below.
      </p>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you need further assistance, feel free to contact me through the
          following channels:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="doroshenkoandrey@ukr.net">doroshenkoandrey@ukr.net</a>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default HelpPage;
