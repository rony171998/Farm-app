import React, { useState } from "react";
import Cards from "../Main/Cards/Cards";
import Table from "../Main/Table/Table";
import Animal from "../Animals/Animal";
import Clientes from "../Client/Client";
import Sell from "../Sells/Sell";
import "./MainDash.css";
import Sidebar from "../Sidebar"


const MainDash = () => {
  console.log(Sidebar)
  return (

      <div className="MainDash">
        <h1 className="cloud">Menu Principal</h1>
        <div>
         <Animal/>
         <Table/>
        </div>

      </div>
    
  );
};

export default MainDash;
