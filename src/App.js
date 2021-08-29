import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
