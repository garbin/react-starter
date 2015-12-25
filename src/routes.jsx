import { Router, Route, Link } from 'react-router'
import Index from './components/index';
import Test from './components/test';
export default (
  <Router>
    <Route path="/" component={Index}>
      <Route path="test" component={Test} />
    </Route>
  </Router>
)
