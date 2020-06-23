import React from 'react';
import styled from '@emotion/styled';
import { CaretRightOutlined } from "@ant-design/icons";

const TodayVideoBox = styled.div`
    /* max-width: 1024px; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    align-items: top;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const TodayVideoItem = styled.div`
    width: 100%;
    border-radius: 15px;

    .TodayVideoItem__title {
        font-size: 20px;
        font-weight: 800;
        padding: 0.5rem;
    }

    .TodayVideoItem__image {
        background-image: url(${props => props.bgImg});
        background-size: 100% 100%;
        background-position: center;
        width: 100%;
        min-height: 185px;
        border: 0;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .video-icon {
            font-size: 50px;
            color: rgba(247, 249, 249, 0.8);
            transition: .2s;
        }
    }

    .TodayVidoItem__authorBox{
        display: flex;
        padding: 0 0.5rem;
        align-items: center;
    }

    .TodayVideoItem__avatar {
        width: 25px;
        height: 25px;
        background-color: teal;
        border-radius: 15px;
        margin-right: 10px;
    }

    .TodayVideoItem__author {
        color: black;
    }

    &:hover {
        cursor: pointer;

        .video-icon {
            font-size: 55px;
            color: rgba(247, 249, 249, 1);
        }
    }
`;


const dummyTodayStory = [
    {
        img: "https://t1.daumcdn.net/cfile/tistory/998E90395B713E560C",
        title: "무더운 여름 탈피를 위해 혼자 떠난 여행",
        author: "author1"
    },
    {
        img: "https://www.hotelrestaurant.co.kr/data/photos/20190623/art_15596946372275_95ba96.bmp",
        title: "경기도 여주 강천감, 솔캠 체험하기",
        author: "author2"
    },
    {
        img: "https://newsimg.hankookilbo.com/2018/02/10/201802101464654412_1.jpg",
        title: "title3",
        author: "author3"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREuPrHebJKq9uYRcL4UmYiJKnAVJnXk6DWFgBnLG3JYz1R6bDu&usqp=CAU",
        title: "title4",
        author: "author4"
    },
    
]

function TodayVideo() {
    return (
        <TodayVideoBox>
            {
                dummyTodayStory && dummyTodayStory.map( data => (
                    <TodayVideoItem bgImg={data.img}>
                        <div className="TodayVideoItem__image">
                            <CaretRightOutlined className="video-icon" />
                        </div>
                        <div className="TodayVideoItem__title">{data.title}</div>
                        <div className="TodayVidoItem__authorBox">
                            <img src={data.img} alt="" className="TodayVideoItem__avatar"/>
                            <div className="TodayVideoItem__author">{data.author}</div>
                        </div>
                    </TodayVideoItem>
                ))
            }

        </TodayVideoBox>
    )
}

export default TodayVideo;