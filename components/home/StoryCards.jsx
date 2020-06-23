import React from 'react';
import styled from '@emotion/styled';
import { HeartFilled, CommentOutlined } from '@ant-design/icons';

const StoryCardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  /* justify-content: center; */
  margin: 0;
  padding: 0;
    /* background-color: yellowgreen; */

    /* @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    } */

    /* @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    } */

    @media (min-width: 40rem ) { 
        .StroyCardItem {
            width: 50%;
        }
    }

    @media (min-width: 56rem) {
        .StroyCardItem {
            width: 33.3333%;
            /* padding-left: 0;
            padding-right: 0; */
        }
    }
`;

const StroyCardItem = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    /* margin: 1rem; */
    
    /* background-color: red; */
    /* height: 380px; */

    .StoryCardItem__image {
        height: auto;
        max-width: 100%;
        vertical-align: middle;

        /* background-image: url("https://t1.daumcdn.net/cfile/tistory/998E90395B713E560C");
        background-size: 100% 100%;
        background-position: center; */
        border-radius: 10px;
    }

    .StoryCardItem__content {
        width: 100%;
        /* height: 160px; */
        /* background-color: blue; */
        padding: 0.5rem;
        
        h4 {
            color: #565656;
            font-size: 20px;
            font-weight: 800;
            transition: 0.2s;
        }
    }

    .StoryCardItem__subinfo {
        width: 100%;
        height: 40px;
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
    }

    .StoryCardItem__subinfo .userinfo {
        display: flex;
        align-items: center;
    }

    .StoryCardItem__subinfo .icons {
        display: flex;
        align-items: center;
    }

    .StoryCardItem__subinfo .userinfo .avatar {
        width: 25px;
        height: 25px;
        background-color: teal;
        border-radius: 15px;
        margin-right: 10px;
    }

    .StoryCardItem__subinfo .icons .likes {
        margin-right: 10px;
        .likes-icon {
            margin-right: 4px;
        }
    }

    .StoryCardItem__subinfo .icons .comments {
        /* margin-right: 10px; */
        .comments-icon {
            margin-right: 4px;
        }
    }

    &:hover {
        /* transform:scale(1.05); 
        transition: transform .2s; */
        
        .StoryCardItem__content h4 {
            color: #202124;
        }
    }
`;

const dummyTodayStory = [
    {
        img: "https://picsum.photos/500/300/?image=1",
        title: "무더운 여름 ㅎㅎㅎㅎ",
        author: "author1"
    },
    {
        img: "https://picsum.photos/500/300/?image=14",
        title: "경기도 여주, 가자 캠핑!!",
        author: "author2"
    },
    {
        img: "https://picsum.photos/500/300/?image=9",
        title: "여자혼자, 배낭여행 가기",
        author: "author3"
    },
    {
        img: "https://picsum.photos/500/300/?image=17",
        title: "회사 때려치구고",
        author: "author4"
    },
    
]


function StoryCards() {
    return (
        <StoryCardsBox>
           
                {
                    dummyTodayStory.map( data => (
                        <StroyCardItem className="StroyCardItem">
                        <img src={data.img} className="StoryCardItem__image"></img>
                        <div className="StoryCardItem__content">
                            <h4>{data.title}</h4>
                        </div>
                        <div className="StoryCardItem__subinfo">
                            <div className="userinfo">
                                <div className="avatar">
        
                                </div>
                                <div className="username">
                                    {data.author}
                                </div>
                            </div>
                            <div className="icons">
                                <div className="likes">
                                    <HeartFilled className="likes-icon"/>
                                    34
                                </div>
                                <div className="comments">
                                    <CommentOutlined />
                                    28
                                </div>
                            </div>
                        </div>
                    </StroyCardItem>
                    ))
                }
        </StoryCardsBox>
    )
}

export default StoryCards;