import React from "react";
import { inject, observer } from "mobx-react";

@inject("apple")
@observer
class AppleItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {1}个苹果，{1}克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {1}个苹果，{1}克
            </div>
          </div>
        </div>

        <div className="appleList">
          <div className="appleItem">
            <div className="apple">
              <img src={require("../images/apple.png")} alt="" />
            </div>
            <div className="info">
              <div className="name">红苹果 - {1}号</div>
              <div className="weight">{2}克</div>
            </div>
            <div className="btn-div">
              <button> 吃掉 </button>
            </div>
          </div>
        </div>

        <div className="btn-div">
          <button>采摘</button>
        </div>
      </div>
    );
  }
}

export default AppleItem;
