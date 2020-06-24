import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import PictureCards from "../../components/home/PictureCards";


const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65px;
    border-bottom: 1px solid #e5e5e5;
`;

const SubMenuInner = styled.div`
    box-sizing: border-box;
    width: 1024px;
    justify-content: flex-start;
    display: flex;
    margin: 1rem;
    @media (max-width: 768px) {
        width: 100%;
        
    }
`;

const SubMenuA = styled.a`
    color: #111;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #111
    }
    margin-right: 1rem;
`;

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

const Section = styled.section`
  margin: 2rem 0;
  max-width: 1024px;
  width: 100%;
`;



function Picture () {
    return (
        <Layout navigation footer>
            <SubMenuWrapper>
                <SubMenuInner>
                    <Link href="/"><SubMenuA>Home</SubMenuA></Link>
                    <Link href="/story"><SubMenuA>스토리</SubMenuA></Link>
                    <Link href="/picture"><SubMenuA>사진</SubMenuA></Link>
                    <Link href="/video"><SubMenuA>영상</SubMenuA></Link>
                    <Link href="/question"><SubMenuA>질문과 답변</SubMenuA></Link>
                </SubMenuInner>
            </SubMenuWrapper> 
            <Wrapper>
               <Section>
                    <PictureCards></PictureCards>
               </Section>
            </Wrapper>

        </Layout>
    )
}

export default Picture;