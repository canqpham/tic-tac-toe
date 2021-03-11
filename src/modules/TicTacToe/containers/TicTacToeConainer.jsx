import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import Square from '../components/Square';
import { useTicTacToe } from '../hooks';

const TicTacToeContainer = props => {
    const {
        squareMatrix,
        winLine,
        disabled,
        handleCheck,
        handleReplay
    } = useTicTacToe()

    const renderSquare = (i, winLine) => {
        return (
            <Square
                value={squareMatrix[i]}
                onClick={() => handleCheck(i)}
                winCheck={winLine.indexOf(i) > -1}
                disabled={disabled}
            />
        );
    }

    return (
        <div>
            <Row gutter={[8]}>
                <Col span={12}>
                    {[0, 1, 2].map((item, index) => {
                        return (
                            <div style={{ display: 'flex' }} key={index}>
                                {renderSquare((item * (3)) + 1, winLine)}
                                {renderSquare((item * (3)) + 2, winLine)}
                                {renderSquare((item * (3)) + 3, winLine)}
                            </div>
                        )
                    })}
                    <ButtonReplay onClick={handleReplay}>Replay</ButtonReplay>
                </Col>
                <Col span={12}>
                    <Typography.Title level={3} >
                        RULES FOR TIC-TAC-TOE.
                    </Typography.Title>
                    <Typography.Paragraph>
                        The game is played on a grid that's 3 squares by 3 squares. <br/>
                        You are X,  the computer is O. <br/>
                        The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.<br/>
                        When all 9 squares are full, the game is over.
                    </Typography.Paragraph>
                </Col>
            </Row>
        </div>
    );
};


const ButtonReplay = styled(Button)`
    margin: 40px 0;
`

TicTacToeContainer.propTypes = {

};

export default TicTacToeContainer;