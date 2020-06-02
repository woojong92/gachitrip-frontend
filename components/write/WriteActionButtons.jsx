import React from "react";
import styled from "@emotion/styled";
import { ArrowLeftOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`;

const StyledBtn = styled.a`
    font-family: Baloo;
    font-size: 16px;
    color: #111;
    padding: 5px 10px;
    margin: 0 0.5rem;
    cursor: pointer;
    &:hover {
        color: #555555;
    }
    
    &.btn__register {
        color: #fff;
        border-radius: 10px;
        border: 1px solid #111;
        background-color: #228B22;
    }

    &.btn__draft {
        border-radius: 10px;
        border: 1px solid #111;
        background-color: #e8e8e8;
    }

    &.btn__exit {
        color: #fff;
        border-radius: 10px;
        border: 1px solid #CD5C5C;
        background-color: #F08080;
    }
`;


export default function WriteActionButtons ({ onCancle, onPublish, onDraft }) {
    return (
        <Wrapper>
            <StyledBtn className="btn__exit" onClick={onCancle}><ArrowLeftOutlined /> 취소</StyledBtn>
            <div>
                <StyledBtn className="btn__register" onClick={onPublish}>등록하기</StyledBtn>
                <StyledBtn className="btn__draft" onClick={onDraft}>임시저장하기</StyledBtn>
            </div>
        </Wrapper>
    )
}