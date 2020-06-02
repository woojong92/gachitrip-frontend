import React, {useRef} from 'react'
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const EditorWrapper = styled.div`
    padding: 1rem;
    /* padding-top: 5rem;
    padding-bottom: 5rem; */
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor .ql-blanck::before {
        left: 0px;
    }
`;

export default () => {

    return (
        <EditorWrapper>
            <TitleInput type="text" placeholder="제목을 입력하세요"/>
            <QuillWrapper>
                
                <QuillNoSSRWrapper 
                    placeholder={"내용을 작성하세요..."}
                    modules={modules} 
                    formats={formats} 
                    theme="snow" //"bubble" 
                />
            </QuillWrapper>
        </EditorWrapper>
    )
 
}