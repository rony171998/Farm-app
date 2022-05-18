import React from "react";
import Cards from "../Main/Cards/Cards";
import Table from "../Main/Table/Table";
import "./MainDash.css";
import Sidebar from "../Sidebar"



const MainDash = () => {
  console.log(Sidebar)
  return (

      <div className="MainDash">
        <h1 className="cloud">Menu Principal</h1>
        <div>
         <Cards/>
         <Table/>
        </div>

      </div>
    
  );
};

export default MainDash;
