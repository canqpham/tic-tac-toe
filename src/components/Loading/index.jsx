import React from 'react';
import { Row, Spin } from 'antd'
import styled from 'styled-components';

const Loading = props => {
    return (
        <LoadingFullScreen>
            <Row justify="center">
                <Spin size="large" />
                {/* <Spin indicator={icon} /> */}
            </Row>
        </LoadingFullScreen>
    );
};


const LoadingFullScreen = styled.div`
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export default Loading;