import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core'

const TodayPictureBox = styled.div`
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

const TodayPictureItem = styled.div`
  border-radius: 15px;
  text-align: left;
  position: relative;

  .TodayPictureItem__image {
    background-image: url(${props => props.bgImg});
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    min-height: 185px;
    border: 0;
    border-radius: 15px;
    transition: .2s;
  }
  .TodayPictureItem__image:hover {
      background-size: 110% 110%;
  }


  .TodayPictureItem__authorBox{
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 40px;
      padding: 1rem;
      left: 0;
      top: 0;
      padding: 0 0.5rem;
      z-index: 1;
  }

  .TodayPictureItem__avatar {
    width: 25px;
    height: 25px;
    background-color: teal;
    border-radius: 15px;
    margin-right: 10px;
    border: 2px solid whitesmoke;
  }

  .TodayPictureItem__author {
    font-weight: 600;
    color: #242424;
  }

  &:hover {
      cursor: pointer;
  }
`

const dummyTodayStory = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpBdkC-UyyzjEeQojYXgC_Gn8_-18sJW-A1DBgZ0_9ncRfaChL&usqp=CAU",
        title: "무더운 여름 탈피를 위해 혼자 떠난 여행",
        author: "author1"
    },
    {
        img: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/10/00/a1000076/img/basic/a1000076_main.jpg?20200605160508&q=80&rw=750&rh=536",
        title: "경기도 여주 강천감, 솔캠 체험하기",
        author: "author2"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYesDHmuF1sFEuOVWIuAZlDs2XTZ-fYUojN_hXTB61qvUBgT0G&usqp=CAU",
        title: "title3",
        author: "author3"
    },
    {
        img: "https://lh3.googleusercontent.com/proxy/fsC1IzEtlv6BWQiZjzb-DQcoMwXRGW8ngOjDZfFjylJps7ZdPEmvy-hbJXLe7PT_aZvCBioLgYVmvpdMg9JlZBHcO7bkhkZ5qjLrRBFFC5y4I4GopunFnznBgA",
        title: "title4",
        author: "author4"
    },
    {
        img: "https://news.hmgjournal.com/images_n/contents/cons/1910/191031_iceland_01.jpg",
        title: "무더운 여름 탈피를 위해 혼자 떠난 여행",
        author: "author1"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH_TP1rDxj1BRJAeGcN2ejcfzWri7zNKrErzlslWP1FFxVVRhT&usqp=CAU",
        title: "경기도 여주 강천감, 솔캠 체험하기",
        author: "author2"
    },
    {
        img: "https://i2.wp.com/blog.allstay.com/wp-content/uploads/2018/07/%EC%83%81%ED%95%B4-%EC%97%AC%ED%96%89-%EB%AA%85%EC%86%8C-%EC%99%80%EC%9D%B4%ED%83%84.jpg?resize=740%2C451&ssl=1",
        title: "title3",
        author: "author3"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT10euFrHu3XDzcycSC6DgsxwJZvniKUoiYnRJvkdFRlXK8csT8&usqp=CAU",
        title: "title4",
        author: "author4"
    },
]

function TodayPicture ( ) {
    return (
        <TodayPictureBox>
            {
                dummyTodayStory.map( data => (             
                    <TodayPictureItem bgImg={data.img}>
                        <div className="TodayPictureItem__image"/>
                        {/* <div className="TodayPictureItem__title">{data.title}</div> */}
                        <div className="TodayPictureItem__authorBox">
                            <img src={data.img} alt="" className="TodayPictureItem__avatar"/>
                            <div className="TodayPictureItem__author">{data.author}</div>
                        </div>
                     
                    </TodayPictureItem>
                ))
            }
        </TodayPictureBox>
    )
}

export default TodayPicture;