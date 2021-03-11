import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import configStore, { history } from './config/store'
import { Loading } from './components'
import 'antd/dist/antd.css'
import 'aos/dist/aos.css'
import './index.less'
import App from './App';

const store = configStore()

ReactDOM.render(
  <Suspense fallback={<Loading />} >
    <Provider store={store}>
      <React.StrictMode>
       <App history={history} />
      </React.StrictMode>
    </Provider>
  </Suspense>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
