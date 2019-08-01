import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home'
import Biography from './views/Biography';
import Science from './views/Science';
import Books from './views/Books';
import Forsale from './views/Forsale';
import Realestate from './views/Realestate';
import Museum from './views/Museum';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/biography' component={Biography} />
          <Route path='/science' component={Science} />
          <Route path='/books' component={Books} />
          <Route path='/forsale' component={Forsale} />
          <Route path='/realestate' component={Realestate} />
          <Route path='/museum' component={Museum} />
        </div>

      </BrowserRouter>


    );
  }

}

export default App;
