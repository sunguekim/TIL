import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags'
import Comment from './Comment'


const PostViewerBlock = styled(Responsive)`
    margin-top:4rem;
`
const CommentBlock = styled.div`
border-bottom: 1px solid ${palette.gray[4]};
margin-top:3rem
`

const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;

    h1{
        font-size: 3rem;
        line-height:1.5;
        margin:0;
    }
`;

// const SubInfo = styled.div`
//     margin-top:1rem;
//     color:${palette.gray[6]};
//     span+span:before{
//         color:${palette.gray[5]};
//         padding-left:0.25rem;
//         padding-right:0.25rem;
//         content: '\\B7';
//     }
// `;

// const Tags = styled.div`
//     margin-top:0.5rem;
//     .tag{
//         display:inline-block;
//         color:${palette.cyan[7]};
//         text-decoration:none;
//         margin-right:0.5rem;
//         &:hover {
//             color:${palette.cyan[6]};
//         }
//     }
// `;

const PostContent = styled.div`
    font-size:1.3125rem;
    color:${palette.gray[8]};
    border-bottom: 1px solid ${palette.gray[7]};
`

const CommentViewer = ({ item }) => {
    return (
        <CommentBlock>
            <div key={item._id}>
                <h2>User:{item.username}</h2>
                <h3>Comment:{item.text}</h3>
            </div>
        </CommentBlock>

    )
}

const PostViewer = ({ post, error, loading, actionButtons, postId, comment }) => {

    if (error) {
        if (error.response && error.response.status === 404) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
        }
        return <PostViewerBlock>오류 발생!</PostViewerBlock>;
    }
    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;
    const { text, username } = comment

    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>

                <SubInfo username={user.username} publishedDate={publishedDate} hashMarginTop />
                <Tags
                    tags={tags}
                />
            </PostHead>
            {actionButtons}
            <PostContent dangerouslySetInnerHTML={{ __html: body }} />
            <Comment postId={postId} />
            {!loading && comment && (
                <div>
                    {comment.map(item => (
                        <CommentViewer key={item._id} item={item} />
                    ))}
                </div>
            )}
        </PostViewerBlock>
    );
};


export default PostViewer;