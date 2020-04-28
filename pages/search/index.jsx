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
  min-height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  padding: 1rem;
  box-sizing: border-box;
`;

const InputBox = styled.input`
    font-size: 30px;
    box-sizing: border-box;
    max-width: 1000px;
    width: 90%;
    height: 50px;
    margin: 0.5rem;
    padding: 0 10px;
    border: 0;
    outline: none;
    border-bottom: 2px solid #e5e5e5;
    background-color: #f7f7f7;
`;

export default function SearchPage() {
  return (
    <Layout>
      <Section>
        <InputBox type="text" placeholder="Search Gachitrip"/>
      </Section>
      <Wrapper>      
        
        
      </Wrapper>

    </Layout>
  )
}