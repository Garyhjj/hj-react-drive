import React, { Component } from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import MyTable from "./components/MyTable";
import "./App.css";

class App extends Component {
  afterTagClick = (tag: string, record: any) => {
    console.log(tag, record);
    return;
  };
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <MyTable afterTagClick={this.afterTagClick}>
          <div>55654</div>
          <Button type="primary">Button</Button>
        </MyTable>
      </div>
    );
  }
}

export default App;
