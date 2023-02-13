/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, createRef } from "react"
import styled from 'styled-components';

const CommentWrapper = styled.div`
    margin-top: 50px;
`

const Comment = () => {
    const commentBox = createRef<HTMLDivElement>();
    
    useEffect(() => {
        if(commentBox.current.querySelector('script')) {
            return;
        }
        const scriptEl = document.createElement('script');
        const attributes = [
            ['src', 'https://utteranc.es/client.js'],
            ['repo', 'B-sirius/b-sirius.github.io'],
            ['label', 'Comment'],
            ['issue-term', 'pathname'],
            ['theme', 'github-dark'],
            ['crossorigin', 'anonymous'],
            ['async', 'true'],
        ];
        for (const item of attributes) {
            scriptEl.setAttribute(item[0], item[1]);
        }
        commentBox.current.appendChild(scriptEl);
    }, []);

    return (
        <CommentWrapper>
            <div ref={commentBox} />
        </CommentWrapper>
    )
}

export default Comment;