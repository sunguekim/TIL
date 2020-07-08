import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import {readComment} from '../../modules/comments'
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostAcitonButtons'
import {setOrginalPost} from '../../modules/write'


const PostViewerContainer = ({ match,history }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { post, error, loading,user,comment } = useSelector(({ post, loading,user,comments }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST','comment/READ_COMMENT'],
        user:user.user,
        comment:comments.comment
    }));

    useEffect(() => {
        
        dispatch(readPost(postId));
        dispatch(readComment(postId))
        return () => {
            dispatch(unloadPost());
        }
    }, [dispatch, postId]);

    const onEdit =()=>{
        dispatch(setOrginalPost(post));
        history.push('/write')
    }
    
    return (
        <PostViewer
            postId = {postId}
            post={post}
            loading={loading}
            error={error}
            comment={comment}
            actionButtons={<PostActionButtons onEdit={onEdit}/>}
        />)
};

export default withRouter(PostViewerContainer);