import Layout from "../../components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    box-sizing: border-box;
    margin: 0;
    padding: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f7f7f7;
`;

const Banner = styled.div`
  width: 100%;
  max-width: 1024px;
  max-height: 250px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: teal;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    max-height: 180px;
  }
  margin-bottom: 1rem;
`;



export default function Home() {
  return (
    <Layout navigation footer>
      <Wrapper>      
        <Banner>
          main banner
        </Banner>



      </Wrapper>

    </Layout>
  )
}