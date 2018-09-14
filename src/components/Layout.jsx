import React from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";

class Layout extends React.Component {

  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="layout-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="mainview-wrapper">
          <MainView/>
        </div>
      </div>
    );
  }
}

export default Layout;
