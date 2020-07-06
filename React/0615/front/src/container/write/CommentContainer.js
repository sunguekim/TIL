import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {writeComment} from '../../modules/comment';

const CommentContainer =()=>{
    const dispatch = useDispatch()
    const {text,postId}=useSelector(({comment})=>({
        text:comment.text,
        postId:comment.postId,
    }))

    const onSubmit=()=>{
        dispatch(writeComment({
            text,
            postId
        }))
    }

    return <Comment onSubmit={onSubmit} />
}
export default CommentContainer;