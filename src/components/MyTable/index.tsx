import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import "./index.less";
import { ColumnProps } from "antd/lib/table";

class MyTable extends Component {
  constructor(props: any) {
    super(props);
    this.props = props;
    console.log(props);
    this.afterTagClick = props.afterTagClick;
    this.state = {
      selectedRowKeys: ["2"],
      showSelection: true
    };
  }
  state: {
    selectedRowKeys: any[];
    showSelection: boolean;
  };
  props: {
    afterTagClick: (tag: string, record: any) => void;
    children: any;
  };
  afterTagClick: (tag: string, record: any) => void;
  clickOnText = (text: string) => {
    console.log(this.data, text);
  };
  columns: ColumnProps<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <a href="javascript:;" onClick={this.clickOnText.bind(null, text)}>
          {text}
        </a>
      )
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[], record) => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag
                color={color}
                key={tag}
                onClick={this.afterTagClick.bind(null, tag, record)}
              >
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: { [prop: string]: string }) => (
        <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )
    }
  ];
  data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];
  rowSelection = {
    selectedRowKeys: [] as any,
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      this.setState({ selectedRowKeys });
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
  componentDidMount() {
    console.log(456);
    setTimeout(() => {
      this.setState({ selectedRowKeys: [], showSelection: false });
    }, 8000);
  }
  render() {
    this.rowSelection.selectedRowKeys = this.state.selectedRowKeys;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.data}
          rowSelection={
            this.state.showSelection ? this.rowSelection : undefined
          }
        />
        {this.props.children}
      </div>
    );
  }
}

export default MyTable;
