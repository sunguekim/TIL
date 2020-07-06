import React,{useEffect} from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import {useSelector,useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {writePost,updatePost} from '../../modules/write'

const WriteActionButtonsContainer =({history})=>{
    const dispatch = useDispatch();
    const {title,body,tags,post,postError,orginalPostId}=useSelector(({write})=>({
        title:write.title,
        body:write.body,
        tags:write.tags,
        post:write.post,
        postError:write.postError,
        orginalPostId:write.orginalPostId,
    }));

    const onPublish=()=>{
        if(orginalPostId){
            dispatch(updatePost({title,body,tags,id:orginalPostId}))
        }
        dispatch(
            writePost({
                title,
                body,
                tags,
            }),
        );
    };

    const onCancle =()=>{
        history.goBack();
    }

    useEffect(()=>{
        if(post){
            const{_id,user}=post;
            history.push(`/@${user.username}/${_id}`);
        }
        if(postError){
            console.log(postError);
        }
    },[history,post,postError]);
    
    return <WriteActionButtons onPublish={onPublish} onCancle={onCancle} isEdit={!orginalPostId} />;
}

export default withRouter(WriteActionButtonsContainer);