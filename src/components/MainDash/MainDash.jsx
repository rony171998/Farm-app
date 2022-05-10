import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";


const MainDash = (indice) => {

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
