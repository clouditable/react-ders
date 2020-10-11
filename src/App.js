import React from 'react';
import './App.css';
import {Provider} from "react-redux";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Header} from "./Components/Common/Header";
import {TodoScreen} from "./Screens/TodoScreen";
import {MoviesScreen} from "./Screens/MoviesScreen";
import {NotFound} from "./Components/Common/404";

import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route path="/todos" component={TodoScreen}/>
            <Route path="/movies" component={MoviesScreen}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
