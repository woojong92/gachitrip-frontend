import Layout from "../../components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f7f7f7;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export default function Home() {
  return (
    <Layout navigation footer>
      <Wrapper>      
        <Section>
        Home
        </Section>
        
      </Wrapper>

    </Layout>
  )
}