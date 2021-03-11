import React from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/actions';

const { Header, Content } = Layout

const LayoutComponent = props => {
    const {title, children} = props
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <Layout>
            <HeaderStyled className="header">
                <a href='/' onClick={handleLogout}>Logout</a>
            </HeaderStyled>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{title}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <CardStyled>
                        {children}
                    </CardStyled>
                </div>
            </Content>
        </Layout>
    );
};

const CardStyled = styled(Card)`
   height: 85vh;
   margin-bottom: 15vh;

`
const HeaderStyled = styled(Header)`
   text-align: right;
`

LayoutComponent.propTypes = {

};

export default LayoutComponent;