import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Resposive from '../common/Responsive'
import palette from '../../lib/styles/palette'

const CommentBlock = styled(Resposive)`
border-bottom: 1px solid ${palette.gray[4]};
    margin-top:3rem
`

const CommentInput = styled.input`

`

const Comment = ({postId}) => {
    return (
        <CommentBlock>
            <input />
            <Button>댓글</Button>
        </CommentBlock>


    )
}

export default Comment;


