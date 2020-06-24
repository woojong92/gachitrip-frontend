import React from 'react';
import styled from '@emotion/styled';
import { HeartFilled, CommentOutlined } from '@ant-design/icons';

const PictureCardsBox = styled.div`
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
        .PictureCardItem {
            width: 50%;
        }
    }

    @media (min-width: 56rem) {
        .PictureCardItem {
            width: 33.3333%;
            /* padding-left: 0;
            padding-right: 0; */
        }
    }
`;

const PictureCardItem = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.5rem;
    /* margin-right: rem; */
    margin-bottom: 1rem;
    cursor: pointer;
    /* background-color: white; */

    /* margin: 1rem; */
    
    /* background-color: red; */
    /* height: 380px; */
    .PictureCardItem__inner {
        background-color: white;
        border-radius: 15px;
        margin: 0.3rem;
        padding: 0.3rem;
        border: 1px solid #e5e5e5;
    }

    .PictureCardItem__image {
        
        max-width: 100%;
        height: auto;
        vertical-align: middle;

        /* background-image: url("https://t1.daumcdn.net/cfile/tistory/998E90395B713E560C");
        background-size: 100% 100%;
        background-position: center; */
        border-radius: 10px;
    }

    .PictureCardItem__content {
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


        p {
            /* display: inline-block; */
            white-space: normal;
            color: #242424;
            /* overflow: hidden; */
        }
    }

    .PictureCardItem__subinfo {
        width: 100%;
        height: 40px;
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
    }

    .PictureCardItem__subinfo .userinfo {
        display: flex;
        align-items: center;
    }

    .PictureCardItem__subinfo .icons {
        display: flex;
        align-items: center;
    }

    .PictureCardItem__subinfo .userinfo .avatar {
        width: 25px;
        height: 25px;
        background-color: teal;
        border-radius: 15px;
        margin-right: 10px;
    }

    .PictureCardItem__subinfo .icons .likes {
        margin-right: 10px;
        .likes-icon {
            margin-right: 4px;
        }
    }

    .PictureCardItem__subinfo .icons .comments {
        /* margin-right: 10px; */
        .comments-icon {
            margin-right: 4px;
        }
    }

    &:hover {
        @media screen and (min-width: 56rem) {
            transform:scale(1.02); 
            transition: transform .2s;
        }
        
        
        .PictureCardItem__content h4 {
            color: #202124;
        }

        .PictureCardItem__content p {
            color: #7E7E7E;
        }
    }
`;

const dummyTodayStory = [
    {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/159271498097205883.jpeg?gif=1&w=640&h=640&c=c&q=80&webp=1",
        title: "무더운 여름 ㅎㅎㅎㅎ",
        describe: "asdf asd fasㅋ ㅋㅋㅋ ㅋㅋ ㅋㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋㅋ ㅋㅋ ㅋㅋㅋㅋ ㅋㅋㅋ ㅋdf asdㅎ ㅎㅎㅎ ㅎㅎ ㅎㅎ ㅎㅎㅎ ㅎㅎ ㅎㅎf asdf asd fa sd fas dfas dfas df",
        author: "author1"
    },
    {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/159271498097205883.jpeg?gif=1&w=640&h=640&c=c&q=80&webp=1",
        title: "경기도 여주, 가자 캠핑!!",
        describe: "asdf asd fasd fasd fasdf asdf as dfasd fas d fas ㅋㅋㅋㅋㅋ ㅋㅋㅋ ㅋ ㅋㅋdf",
        author: "author2"
    },
    {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/159271498097205883.jpeg?gif=1&w=640&h=640&c=c&q=80&webp=1",
        title: "여자혼자, 배낭여행 가기",
        describe: "asdf asdfasdf asdf asdfas dfasdfas dfas dfa sdfㅇ ㅁㄴ ㄹㅁㄴ ㅇ ㄹㅁㄴ ㅇㄹ",
        author: "author3"
    },
    {
        img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/159279085178454582.jpeg?gif=1&w=640&h=640&c=c&q=80&webp=1",
        title: "회사 때려치구고",
        describe: "asd fj a lskdfjl aks민ㅇ  ㅁㅇ너리 ㅏㅁ넝리 ㅏ먼ㅇ리마 ㅓㄴㅇ 리ㅏ먼 ㅇ리ㅏ 먼; 리ㅏ  먼이 라ㅓㅁ 니ㅏㅇ러민 ㅇㄹ",
        author: "author4"
    },
    
]


function PictureCards() {
    return (
        <PictureCardsBox>
           
                {
                    dummyTodayStory.map( data => (
                        <PictureCardItem className="PictureCardItem">
                            <div className="PictureCardItem__inner">

                        <img src={data.img} className="PictureCardItem__image"></img>
                        <div className="PictureCardItem__content">
                            {/* <h4>{data.title}</h4> */}
                            <p>{data.describe}</p>
                        </div>
                        <div className="PictureCardItem__subinfo">
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

                        </div>
                    </PictureCardItem>
                    ))
                }
        </PictureCardsBox>
    )
}

export default PictureCards;