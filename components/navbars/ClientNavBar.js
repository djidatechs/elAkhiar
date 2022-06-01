import Image from "next/image";
import React from "react";
import nvbarImage from "../../public/logonavbar.png"
import Router from "next/router";
import IndexDropdown from "../Dropdowns/IndexDropdown";
import { Menu } from "@mui/material";
export default function Navbar({ fixed }) {
 
  return (
    <>
      <nav className="flex  flex-wrap items-center justify-between px-2 py-1 bg-blue-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between font-bold">
          <div className="text-white  cursor-pointer" onClick={()=>Router.push('/')}>
              El Akhiar
          </div>
          <div className="sm:flex hidden">
            <IndexDropdown title="Articles"/>        
            <IndexDropdown title="Offeres"/>        
            <IndexDropdown title="Contact"/>  
            <IndexDropdown title="Logo"/>  
          </div>
          <div className="sm:hidden flex text-white">
            <Menu/>
          </div>
                 
        </div>
      </nav>
    </>
  );
}