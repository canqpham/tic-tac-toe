import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom'
import * as paths from './constants/paths'

//Pages
import LoginPage from './modules/LoginPage'
import MainPage from './modules/MainPage'

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props
  const isAuthorized = localStorage.getItem('isAuthorized')
  return (
    <Route {...rest} render={props => (
      isAuthorized
        ? <Component {...props} />
        : <Redirect to={{ pathname: paths.Login, state: { from: props.location } }} />
    )} />
  )
}

const App = ({ history }) => ( /* receive history object via props */
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <PrivateRoute path={paths.Main} component={MainPage} />
        <Route path={paths.Login} component={LoginPage} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default App;
