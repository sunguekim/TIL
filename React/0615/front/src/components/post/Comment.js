import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button';
import Resposive from '../common/Responsive'
import palette from '../../lib/styles/palette'
import {writeComment} from '../../modules/comment'

const CommentBlock = styled(Resposive)`
    border-bottom: 1px solid ${palette.gray[4]};
    margin-top:3rem
`

const CommentInput = styled.input`

`

const Comment = ({postId}) => {
    const dispath = useDispatch();
    const [text,setText]=useState('');
    const [id,setId]=useState('')

    useEffect(()=>{
        setId(postId)
        
    },[postId,dispath])
    const onSubmit=()=>{
        dispath(writeComment({text,postId}))
    }
    const onChange=(e)=>{
        setText(e.target.value)
    }

    return (
        <CommentBlock>
            <input value={text} onChange={onChange}/>
            <button onClick={onSubmit}>ddd</button>
        </CommentBlock>


    )
}

export default Comment;


