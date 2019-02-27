import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";

class MyTable extends Component {
  render() {
    return (
      <div>
        <Button type="primary" className={"test"}>
          Button
        </Button>
      </div>
    );
  }
}

export default MyTable;
