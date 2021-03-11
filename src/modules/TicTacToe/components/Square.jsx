import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const Square = (props) => {
    const { winCheck, disabled, value, onClick } = props
    const label = typeof (value) === 'boolean' ? props.value ? 'x' : 'o' : ' '
    return (
        <ButtonStyled className="square" onClick={onClick} disabled={disabled}>
            <CheckPoint level={1} winCheck={winCheck}>
                {label}
            </CheckPoint>
        </ButtonStyled>
    );
}

const ButtonStyled = styled.div`
    padding: 20px;
    min-height: 150px;
    min-width: 150px;
    max-width: 150px;
    max-height: 150px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${props => props?.disabled ? 'unset' : 'pointer'};
    background-color: ${props => props?.disabled ? '#f4f4f4 !important' : ''};
    :hover {
        background-color: #ddd
    }
`

const CheckPoint = styled(Typography.Title)`
    color: ${props => props.winCheck ? 'red !important' : ''}
`


Square.propTypes = {
    
};

export default Square;