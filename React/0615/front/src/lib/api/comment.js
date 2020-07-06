import client  from './client'

export const writeCommnet = ({text})=>
    client.post('/api/comment',{text});