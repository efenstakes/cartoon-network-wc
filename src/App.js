import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  Link  
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';


import HomePage from './pages/Home/Home.page'
import CharacterPage from './pages/CharacterPage/Character.page'
import AppBar from './components/AppBar/AppBar'


function App() {
  return (
    <Router>

      <div className="App">
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/character/:id" component={CharacterPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
