import React from 'react';
import styled from 'styled-components';
import palette from './palette';

export const radio = (props) => {
    const {
        label,
        disabled,
        onChange,
        name
    } = props;
    
    if(!name){
        throw new Error(`The required attribute 'name' is missing😡`)
    }

    return (
        <RadioWrap className="radio-item">
            <input type="radio" name={name} onChange={onChange} disabled={disabled}/>
            <Radio/>
            {
                label
                ?
                <LabelText>{label}</LabelText>
                :
                ""
            }
        </RadioWrap>
    )
}
export const radioGroup = (props) => {
    const {
        children
    } = props;
    return (
        <RadioGroup>
            {
                children
            }
        </RadioGroup>
    )
}

const RadioGroup = styled.div`
    display:flex;
    .radio-item{
        margin-right:5px;
        &:nth-last-of-type(1){
            margin-right:0;
        }
    }
`;

const RadioWrap = styled.label`
    postion:relative;
    display:inline-flex;
    overflow:hidden;
    align-items:center;
    &[disabled]{
        cursor:not-allowed;
    }
    input[type="radio"]{
        position:absolute;
        left:-9999px;
        &:checked+*{
            background-color:${palette.primary};
            &:after{
                transform:translate(-50%,-50%) scale(1);
            }
        }
        &[disabled]+*{
            cursor:not-allowed;
            border:1px solid ${palette.info};
            background-color:${palette.lightInfo};
            &:after{
                transform:translate(-50%,-50%) scale(1);
            }
        }
    }
`
const Radio = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:16px;
    height:16px;
    background-color:#fff;
    border-radius:50%;
    margin-right:5px;
    border:1px solid ${palette.primary};
    &:after{
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius:50%;
        background-color:#fff;
        position:absolute;
        left:50%;
        top:50%;
        transition:transform .1s linear;
        transform:translate(-50%,-50%) scale(0);
    }
`
const LabelText = styled.span`
    font-size:13px;
`