import React, {Component} from 'react';
import MyName from "./components/MyName";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
        <div>
            <MyName name="Chul"/>
            <Counter/>
        </div>
    );
  }
}


export default App;
