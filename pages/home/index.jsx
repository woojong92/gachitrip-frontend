import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";

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
  min-height: 250px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: teal;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    max-height: 180px;
    min-height: 180px;
  }
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const Cards = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  /* border: 1px solid black; */
  border-radius: 15px;
  /* background-color: red; */
  box-shadow: 2px 2px 6px 0px rgba(0,0,0, 0.3);
  text-align: left;

  img {
    width: 100%;
    border: 0;
    /* border-radius: 15px; */
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`

const SectionBox = styled.section`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  /* .post__section {
    width: 100%;
    background-color: teal;
  } */
`;

const PostBox = styled.div`
  width: 100%;
  /* height: 300px; */
  /* background-color: red; */
  margin-right: 24px;
  @media (max-width: 900px) {
    margin-right: 0;
  }
`

const Post = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: green; */
  margin-bottom: 3rem;
  /* @media (max-width: 768px) {
    max-height: 100px;
    min-height: 100px;
  } */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .post__main {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin-right: 10px!important;
    flex-direction: column;
    justify-content: space-between;
  }

  .post__title {
    font-size: 24px;
    margin-bottom: 2px!important;
  }

  .post__createdAt {
    margin-bottom: 4px!important;
  }

  .post__sub {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .post__sub_right {
    display: flex;
    flex-direction: row;
  }

  .post__sub_left {
    display: flex;
    flex-direction: row;
  }

  .post__content {
    word-break:break-all;
  }

  .post__author {
  }

  .post__thumnail {
    box-sizing: border-box;
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    background-color: brown;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const RightSectionBox = styled.div`
  min-width: 328px;
  height: 300px;
  background-color: blue;

  @media (max-width: 900px){
    display: none;
  }
`;

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

export default function Home() {
  return (
    <Layout navigation footer>
          <SubMenuWrapper>
          <SubMenuInner>
              <Link href="/"><SubMenuA>Home</SubMenuA></Link>
              <Link href="/post"><SubMenuA>스토리</SubMenuA></Link>
              <Link href="/picture"><SubMenuA>사진</SubMenuA></Link>
              <Link href="/video"><SubMenuA>영상</SubMenuA></Link>
              <Link href="/question"><SubMenuA>질문과 답변</SubMenuA></Link>
          </SubMenuInner>
        </SubMenuWrapper> 
      <Wrapper>
        <Banner>
          <img src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1412/mikalaimanyshau141200015/34925939-%EC%97%AC%ED%96%89-%EB%B0%B0%EB%84%88%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8F%89%EB%A9%B4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg" alt=""/>
        </Banner>

        <SectionBox>

          <PostBox className="post__section">
            <Post>
              <div className="post__main">
                <div>
                  <div className="post__title">Post Title</div>
                  <div className="post__createdAt">작성일: 2020. 05. 26</div>
                  <p className="post__content">asdfjklkjsdflkajsdflkjsaldfkjalskdfjlaksdfjlkajfdlkajsdf</p>
                </div>

                <div className="post__sub">
                  <div className="post__sub_right">
                    <div>avatar</div>
                    <div>by woody</div>
                  </div>

                  <div className="post__sub_left">
                    <div>likes</div>
                    <div>댓글</div>
                  </div>
                </div>
              </div>
              
              <div className="post__thumnail">
                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
              </div>
            </Post>
            <Post>
              <div className="post__main">
                <div>
                  <div className="post__title">Post Title</div>
                  <div className="post__createdAt">작성일: 2020. 05. 26</div>
                  <p className="post__content">asdfjklkjsdflkajsdflkjsaldfkjalskdfjlaksdfjlkajfdlkajsdf</p>
                </div>

                <div className="post__sub">
                  <div className="post__sub_right">
                    <div>avatar</div>
                    <div>by woody</div>
                  </div>

                  <div className="post__sub_left">
                    <div>likes</div>
                    <div>댓글</div>
                  </div>
                </div>
              </div>
              
              <div className="post__thumnail">
                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
              </div>
            </Post>
  
          </PostBox>

          <RightSectionBox>

            asdfasdf
          </RightSectionBox>

        </SectionBox>

        <Cards>
          <Card>
            <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
            <div>
               <div className="card__title">Card Title</div> 
               <p>hello, world. this is card contents</p>
            </div>
          </Card>

          <Card>
            <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
            <div>
               <div className="card__title">Card Title</div> 
               <p>hello, world. this is card contents</p>
            </div>
          </Card>         
          <Card>
            <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
            <div>
               <div className="card__title">Card Title</div> 
               <p>hello, world. this is card contents</p>
            </div>
          </Card>
          <Card>
            <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F264179365948F4B52CF164" alt=""/>
            <div>
               <div className="card__title">Card Title</div> 
               <p>hello, world. this is card contents</p>
            </div>
          </Card>
        </Cards>


      </Wrapper>

    </Layout>
  )
}