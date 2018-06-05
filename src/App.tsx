import * as React from 'react';
import './App.css';
import MainContainer from "./Containers/MainContainer";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <MainContainer/>
      </div>
    );
  }
}

export default App;
