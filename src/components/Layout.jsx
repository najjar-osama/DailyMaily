import React from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";


const Layout = ()=>(
    <div className="layout-wrapper">
        <div className="sidebar-wrapper">
            <Sidebar />
        </div>
        <div className="mainview-wrapper">
            <MainView />
        </div>
    </div>
);

export default Layout;