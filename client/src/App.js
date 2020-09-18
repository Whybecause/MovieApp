import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Search from './components/Search';
import Home from './components/Home';
import TopRated from './components/TopRated';

function App() {
  return (
    <BrowserRouter>
    {/* NAV + SEARCH FORM */}
    <Nav/>
    <Switch>
      {/* GET POPULAR MOVIES BY DEFAULT */}
      <Home exact path="/" component={Home}/>
      <TopRated exact path="/top" component={TopRated}/>
      <Search exact path="/search" component={Search} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
