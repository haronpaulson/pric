import React from 'react'
import Image from 'next/image';
import {movies} from "./BooksData";




function BooksList() {
  function Truncate(str,num) {
    const total = str.length;
    const sentence= str.slice(0,num) + "...";
    if (num <= str.length) {
      return sentence;
    }
    return str;
  }

  const prefix = "/author-web";
  return (
    <div className=' space-x-12  '>
      <div>
        <h1 className='ml-8 pt-4 text-xl font-semibold text-yellow-600'>The Author's Collections</h1>
      </div>
    
      
      
      
      {movies.map(function(movie) {
        return <div className='mt-8 flex space-x-4 border-b-2 pb-3 '>
        <img src = {prefix + movie.picture} alt="boooks" className='w-28  object-contain md:w-48'/>
        <Image src={prefix + movie.picture} alt="bookss" width="170" height="70" objectFit='contain' className='hidden'/>
        <div>
            <p1 > {movie.name}</p1><br/>
            <p6 className="mb-"><span className='text-sm'>{movie.date}</span></p6><br/>
            <a href= {movie.webpage} target= "_blank">
            <button type='text' className='mt-10 ml-3 border-2 p-1 w-20 rounded-full font-semibold border-white text-black bg-white'>Buy Now</button>
            </a>
        </div>
        <div className='hidden lg:block pt-4 text-yellow-100 pl-5 pr-2 '><p1 className="mt-10">{movie.captionn}<span className=' text-white '><a href={movie.webpage} target="_blank">[See more ]</a></span></p1>  
        
        </div> 
           

      </div>
          
        
      })} 
      
    </div>
  )
}

export default BooksList;
