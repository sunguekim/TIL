import client  from './client'

export const writeCommnet = ({text,postId})=>
    client.post('/api/comment/write',{text,postId});

export const readComment = id=>client.get(`/api/comment/${id}`);