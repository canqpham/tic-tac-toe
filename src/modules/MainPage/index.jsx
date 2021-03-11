import React, { Component } from 'react';
import Layout from '../../components/Layout';
import TictactoePage from '../TicTacToe';

class MainPage extends Component {
    render() {
        return (
            <Layout title={'Tic Tac Toe'}>
                <TictactoePage />
            </Layout>
        );
    }
}

MainPage.propTypes = {

};

export default MainPage;