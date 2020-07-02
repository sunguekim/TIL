import React from 'react';
import {withRouter} from 'react-router-dom'
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border:none;
    boder-radius:4px;
    font-size:1rem;
    font-weight:bold;
    padding:0.25rem 1rem;
    color:white;
    outline:none;
    cursor:pointer;
    
    background: ${palette.gray[8]};
    &:hover{
        background:${palette.gray[6]};
    }
    ${props=>
        props.fullWidth&&
        css`
            padding-top:0.75rem;
            padding-bottom:0.75rem;
            width:100%;
            font-size:1.125;
        `}
        ${props=>
            props.cyan&&
            css`
                background:${palette.cyan[5]};
                &:hover{
                    background:${palette.cyan[4]};
                }
                &:diabled{
                    background:${palette.gray[3]};
                    color:${palette.gray[5]};
                    cursor: not-allowed;
                }
            `
        }
`;

const Button = ({to,history,...rest})=>{
    const onClick = e =>{
        if(to){
            history.push(to);
        }
        if(rest.onClick){
            rest.onClick(e);
        }
    };
    return <StyledButton {...rest} onClick={onClick}/>
}

// const Button = props=><StyledButton{...props}/>
export default withRouter(Button);