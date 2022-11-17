import {movies} from "../components/BooksData";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {BiArrowBack} from "react-icons/bi"
import Footer from "../components/Footer";



function Books() {
    const prefix = "/author-web";

    return <div className="bg-black m-6 mt-12 rounded-lg pb-10 ">  
        <Link href="/">
           
            <button type="text" className="border-2 text-lg justify-center absolute  right-2 w-28 top-0 items-center flex  h-10 rounded-lg bg-yellow-600 font-bold text-black shadow-lg shadow-yellow-100 md:top-16 md:right-10 md:rounded-sm"> <BiArrowBack className='mr-1  '/>Home</button></Link>
        
         
       <div>
        <h1 className='ml-8 pt-4 text-xl font-semibold text-yellow-600 mb-8'>The Author's Collections</h1>
      </div>
       
    
    {movies.map(function(movie) {
        return <div className='sm:mt-2 flex space-x-4 border-b-2 pb-3 mb-4 pl-2 pt-1 lg:pl-32 '>
        
        <img src={ prefix + movie.picture} alt="bookss" className="w-200 h-55 object-contain"/>
        <div className="text-white">
            <p1 className=" font-bold"> {movie.name}</p1><br/>
            <p6 className="mb-"><span className='text-sm'>{movie.date}</span></p6><br/>
            <a href= {movie.webpage} target="_blank">
            <button type='text' className='mt-10 ml-3 border-2 p-1 w-20 rounded-full font-semibold border-white text-black bg-white'>Buy Now</button>
            </a>
        </div>
        <div className='hidden lg:block pt-4 text-yellow-100 pl-5 '><p1 className="mt-10">{movie.captionn}<span className=' text-white '><a href={movie.webpage} target="_blank">[See more ]</a></span></p1>  
        </div> 
           

      </div>
          
        
      })} 
      <div className="w-full">
        <Footer/>
      </div>
    </div>

      
};

export default Books;


