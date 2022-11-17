import React from "react";
import {TbBooks} from "react-icons/tb";
import {BsPersonFill} from "react-icons/bs";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {GiBookStorm} from "react-icons/gi";
import Link from "next/link";
import {IoBookSharp} from "react-icons/io";


function Navigation() {
    return (
        <div className="flex justify-between p-4 items-center text-2xl bg-black text-white sticky top-0  rounded-sm">
            <Link href="/"><div className="flex items-center space-x-1">
                <h2 className=" flex items-center text-slate-200 font-bold text-2xl font-serif ">JNP</h2>
                
                <TbBooks />
                
             
                
   
            </div></Link>
            <div className="text-xs space-x-1 flex  md:space-x-8 md:text-sm lg:text-2xl">
                <Link href="/Books"><p1 className="flex  rounded-full "><TbBooks className="mt-1 mr-1"/>Books</p1></Link>
                <Link href="/About"><p2 className="flex"><BsPersonFill className="mr-1 mt-1"/>About</p2></Link>
            </div>
            <div className="hidden md:inline-flex items-center space-x-2 lg:space-x-3">
                
                <AiOutlineMenuUnfold />
          
            </div>
            <div className="flex space-x-2 md:hidden">
                <AiOutlineMenuUnfold />
              
            </div>
        </div>)

}


export default Navigation;