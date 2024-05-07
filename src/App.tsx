import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import TodoList from './components/TodoList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/todolist" exact component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
