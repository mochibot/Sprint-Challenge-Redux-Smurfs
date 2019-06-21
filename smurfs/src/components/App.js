import React from 'react';
import SmurfList from './SmurfList';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <div className='App-content'>
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
