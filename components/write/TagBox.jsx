import React, {useState, useCallback} from "react";
import styled from "@emotion/styled";

const Tag = styled.div`
    margin-right: 0.5rem;
    color: blue;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

const TagItem = React.memo(({tag, onRemove}) => 
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
);

const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
));

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback( 
        tag => { 
            if(!tag) return; // 공백이라면 추가하지 않음
            if(localTags.includes(tag)) return; // 이미 존재한다면 추가하지 않음
            setLocalTags([...localTags, tag]);
        },
        [localTags]
    );

    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !==  tag));
        },
        [localTags]
    );

    const onChange = useCallback( e => {
        setInput(e.target.value);
    },[]);

    const onSubmit = useCallback( e => {
        e.preventDefault();
        insertTag(input.trim());
        setInput('');
    }, [input, insertTag]);

    return (
        <div>
            <h4>태그</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="태그를 입력하세요."
                    onChange={onChange}
                    value={input}
                />
                <button type="submit">추가</button>
            </form>
            <TagList tags={localTags} onRemove={onRemove}/>
        </div>
    )
}

export default TagBox;