import React from "react";
import styled from "@emotion/styled";

const TodayStoryBox = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  align-items: top;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

const TodayStoryItem = styled.div`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
  text-align: left;
  
  .TodayStoryItem__title {
    font-size: 20px;
    font-weight: 800;
    padding: 0.5rem;
  }

  .TodayStoryItem__image {
    background-image: url(${props => props.bgImg});
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    min-height: 185px;
    border: 0;
    border-radius: 15px;
  }
  .TodayStoryItem__image:hover {
      background-size: 110% 110%;
  }

  .TodayStoryItem__authorBox{
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      width: 100%;
  }

  .TodayStoryItem__avatar {
    width: 25px;
    height: 25px;
    background-color: teal;
    border-radius: 15px;
    margin-right: 10px;
  }

  .TodayStoryItem__author {
    color: black;
  }

  &:hover {
      cursor: pointer;
  }
`

const dummyTodayStory = [
    {
        img: "https://blog.hmgjournal.com/images_n/contents/20170727_gn01.jpg",
        title: "무더운 여름 ㅎㅎㅎㅎ",
        author: "author1"
    },
    {
        img: "https://lh5.googleusercontent.com/p/AF1QipP5FzmiidegwyT13gMYcRh2wPzM24RSl8y7dbk5=w408-h306-k-no",
        title: "경기도 여주, 가자 캠핑!!",
        author: "author2"
    },
    {
        img: "https://topclass.chosun.com/news_img/2002/2002_038.jpg",
        title: "여자혼자, 배낭여행 가기",
        author: "author3"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwe9AFpYCpi7pPoP5pEV18_3MUVNIh01_peo5RMHYisTk63-D3&usqp=CAU",
        title: "회사 때려치구고",
        author: "author4"
    },
    
]

function TodayStory ( ) {
    return (
        <TodayStoryBox>
            {
                dummyTodayStory.map( data => (             
                    <TodayStoryItem bgImg={data.img}>
                        <div className="TodayStoryItem__image"/>
                        <div className="TodayStoryItem__title">{data.title}</div>
                        <div className="TodayStoryItem__authorBox">
                           <img src={data.img} alt="" className="TodayStoryItem__avatar"/>
                            <div className="TodayStoryItem__author">{data.author}</div>
                        </div>
                        
                    </TodayStoryItem>
                ))
            }
        </TodayStoryBox>
    )
}

export default TodayStory;