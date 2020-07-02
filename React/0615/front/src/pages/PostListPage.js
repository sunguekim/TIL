import React from 'react';
import HeaderContainer from '../container/common/HeaderContainer'
import PostListContainer from '../container/posts/PostListContainer'
import PagenationContainer from '../container/posts/PagenationContainer'

const PostListPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostListContainer/>
            <PagenationContainer/>
        </div>
    )
}

export default PostListPage;