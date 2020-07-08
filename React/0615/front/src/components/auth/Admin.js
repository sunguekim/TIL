import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Resoponsive from '../common/Responsive'
import palette from '../../lib/styles/palette'


const AdiminBlock = styled(Resoponsive)`
border-bottom: 1px solid ${palette.gray[4]};
margin-top:3rem
`

const  UserBlock =({user})=>{
    return(
     <AdiminBlock>
         <h2>{user.username}</h2>
         <h3>{user._id}</h3>
     </AdiminBlock>
    )
}


const Admin = ({ info }) => {
    if(!info){
        return null
    }
    
    return (
        <AdiminBlock>
            <div>
            {info.map(item=>
                    <UserBlock key={item._id} user={item}/>
                )}
            </div>
        </AdiminBlock>

    )
}

export default Admin;