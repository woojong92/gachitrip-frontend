import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Editor from "../../components/write/Editor"
import TagBox from "../../components/write/TagBox";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { useCallback } from "react";
import Router from 'next/router'


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* background-color: #f7f7f7; */
`;

const Section = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function WritePage() {

  const onPublish = useCallback( e => {
    e.preventDefault();
    console.log("onpublish")
  }, []);

  const onCancle = useCallback( e => {
    e.preventDefault();
    Router.back()
    console.log("onCancle")
  }, []);

  const onDraft = useCallback( e => {
    e.preventDefault();
    console.log("onDraft")
  }, []);

  return (
    <Layout>
      <Wrapper> 
        <Section>
      
          <WriteActionButtons onPublish={onPublish} onCancle={onCancle} onDraft={onDraft}/>
          <TagBox />
          <Editor />
 
        </Section> 
       
      </Wrapper>
    </Layout>
  )
}