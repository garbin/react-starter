import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Index from './components/index';
import Test from './components/test';
const history = createBrowserHistory();

export default (
  <Router history={history}>
    <Route path="/" component={Index}>
      <Route path="test" component={Test} />
    </Route>
  </Router>
)
