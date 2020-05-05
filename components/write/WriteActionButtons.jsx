import React from "react";
import styled from "@emotion/styled";

export default function WriteActionButtons ({ onCancle, onPublish, onDraft }) {
    return (
        <div>
            <button onClick={onPublish}>등록하기</button>
            <button onClick={onDraft}>임시저장하기</button>
            <button onClick={onCancle}>취소</button>
        </div>
    )
}