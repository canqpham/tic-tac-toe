import React from 'react';
import { Layout, Row, Typography, } from 'antd';
import LoginForm from '../components/LoginForm'
import styled from 'styled-components';

const LoginContainer = props => {

    return (
        <MainContent>
            <RowStyled justify="center">
                <Typography.Title level={2}  >Login to Tic Tac Toe</Typography.Title>
            </RowStyled>
            <LoginForm />
        </MainContent>
    );
};

const MainContent = styled(Layout.Content)`
    padding: 0 20vh;
    max-width: 1440px;
    margin: auto
`

const RowStyled = styled(Row)`
    margin: 80px;
`

LoginContainer.propTypes = {

};

export default LoginContainer;