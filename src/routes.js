//Dependencies
import { Route, Switch } from 'react-router-dom';

//components
import App from './App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Faq from './components/Faq';
import Tutorials from './components/Tutorials';
import Error404 from './components/Error404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/faq" component={Faq} exact />
      <Route path="/tutorials" component={Tutorials} exact />
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes;
