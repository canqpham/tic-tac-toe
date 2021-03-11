import { useEffect, useState } from "react"
import { isBoolean, isEmpty, random } from 'lodash';
import { notification } from "antd";

const generateNullMatrixValue = () => {
    const data = {}
    const matrix = Array.from(Array(9).keys()).map(item => item + 1)
    matrix.forEach(item => data[item] = null)
    return data
}

export const useTicTacToe = () => {
    const [squareMatrix, setSquareMatrix] = useState(generateNullMatrixValue())
    const [humanCheck, setHumanCheck] = useState(true)
    const [winLine, setWinLine] = useState([])
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (!humanCheck) {
            handleBotCheck()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [humanCheck])

    useEffect(() => {
        if (!isEmpty(winLine)) {
            setDisabled(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winLine])

    useEffect(() => {
        const emptySquare = Object.keys(squareMatrix).filter(key => !isBoolean(squareMatrix[key]))
        if (!emptySquare.length && isEmpty(winLine)) {
            setDisabled(true)
            notification['info']({
                message: 'You were tied in this game. Please click button "Replay" to replay the game.'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [squareMatrix])

    const calculateWinner = (squares) => {
        const lines = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (isBoolean(squares[a]) && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a]) {
                    notification['success']({
                        message: 'You are winner!!!'
                    })
                } else {
                    notification['error']({
                        message: 'You are loser!!!'
                    })
                }
                return lines[i];
            }

        }
        return [];
    }


    const handleCheck = (i) => {
        if (!winLine.length) {
            if (typeof (squareMatrix[i]) !== 'boolean') {
                setSquareMatrix({ ...squareMatrix, [i]: humanCheck })
                setHumanCheck(!humanCheck)
                setWinLine(calculateWinner({ ...squareMatrix, [i]: humanCheck }))
            }
        }
    }

    const handleBotCheck = () => {
        const matrixEmptyValues = Object.keys(squareMatrix).filter(key => !isBoolean(squareMatrix[key]) && Number(key))

        if (isEmpty(winLine) && !isEmpty(matrixEmptyValues)) {
            const randomPoint = random(matrixEmptyValues.length - 1)
            handleCheck(matrixEmptyValues[randomPoint])
        }
    }

    const handleReplay = () => {
        setSquareMatrix(generateNullMatrixValue())
        setHumanCheck(true)
        setWinLine([])
        setDisabled(false)
    }

    return {
        squareMatrix,
        humanCheck,
        winLine,
        disabled,
        handleCheck,
        handleBotCheck,
        handleReplay
    }
} 