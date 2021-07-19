import './App.css';
import Navbar from './components/Navbar';
import Email from './components/Email';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/email">
            <Email />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
