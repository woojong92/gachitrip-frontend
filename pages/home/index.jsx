import Layout from "../../components/Layout";
import styled from "@emotion/styled";

const Section = styled.div`
  width: 100%;
  height: 47vh;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

export default function Home() {
  return (
    <Layout navigation footer>
      <Section>
        Home
      </Section>
      
    </Layout>
  )
}